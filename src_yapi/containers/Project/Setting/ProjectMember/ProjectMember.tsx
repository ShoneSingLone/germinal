import {
	Table,
	Card,
	Badge,
	Select,
	Button,
	Modal,
	Row,
	Col,
	message,
	Popconfirm,
	Switch,
	Tooltip
} from "ant-design-vue";

import { setCurrGroup } from "../../../../reducer/modules/group";

import ErrMsg from "../../../../components/ErrMsg/ErrMsg.js";
import { fetchGroupMemberList } from "../../../../reducer/modules/group.js";
import {
	fetchProjectList,
	getProjectMemberList,
	getProject,
	addMember,
	delMember,
	changeMemberRole,
	changeMemberEmailNotice
} from "../../../../reducer/modules/project.js";
import UsernameAutoComplete from "../../../../components/UsernameAutoComplete/UsernameAutoComplete.js";
import "../Setting.scss";

const Option = Select.Option;

const arrayAddKey = arr => {
	return arr.map((item, index) => {
		return {
			...item,
			key: index
		};
	});
};

@connect(
	state => {
		return {
			projectMsg: state.project.currProject,
			uid: state.user.uid,
			projectList: state.project.projectList
		};
	},
	{
		fetchGroupMemberList,
		getProjectMemberList,
		addMember,
		delMember,
		setCurrGroup,
		changeMemberRole,
		getProject,
		fetchProjectList,
		changeMemberEmailNotice
	}
)
class ProjectMember extends Component {
	constructor(props) {
		super(props);
		this.state = {
			groupMemberList: [],
			projectMemberList: [],
			groupName: "",
			role: "",
			visible: false,
			dataSource: [],
			inputUids: [],
			inputRole: "dev",
			modalVisible: false,
			selectProjectId: 0
		};
	}
	static propTypes = {
		match: PropTypes.object,
		projectId: PropTypes.number,
		projectMsg: PropTypes.object,
		uid: PropTypes.number,
		addMember: PropTypes.func,
		delMember: PropTypes.func,
		changeMemberRole: PropTypes.func,
		getProject: PropTypes.func,
		fetchGroupMemberList: PropTypes.func,
		setCurrGroup: PropTypes.func,
		getProjectMemberList: PropTypes.func,
		fetchProjectList: PropTypes.func,
		projectList: PropTypes.array,
		changeMemberEmailNotice: PropTypes.func
	};

	showAddMemberModal = () => {
		this.setState({
			visible: true
		});
	};

	showImportMemberModal = async () => {
		await this.props.fetchProjectList(this.props.projectMsg.group_id);
		this.setState({
			modalVisible: true
		});
	};

	// ??????????????????

	reFetchList = () => {
		this.props.getProjectMemberList(this.$route.params.id).then(res => {
			this.setState({
				projectMemberList: arrayAddKey(res.payload.data.data),
				visible: false,
				modalVisible: false
			});
		});
	};

	handleOk = () => {
		this.addMembers(this.state.inputUids);
	};

	// ??? - ????????????
	addMembers = memberUids => {
		this.props
			.addMember({
				id: this.$route.params.id,
				member_uids: memberUids,
				role: this.state.inputRole
			})
			.then(res => {
				if (!res.payload.data.errcode) {
					const { add_members, exist_members } = res.payload.data.data;
					const addLength = add_members.length;
					const existLength = exist_members.length;
					this.setState({
						inputRole: "dev",
						inputUids: []
					});
					message.success(
						`????????????! ??????????????? ${addLength} ???????????? ${existLength} ????????????`
					);
					this.reFetchList(); // ?????????????????????????????????????????????
				}
			});
	};
	// ??????????????? ????????????????????????
	changeNewMemberRole = value => {
		this.setState({
			inputRole: value
		});
	};

	// ??? - ??????????????????
	deleteConfirm = member_uid => {
		return () => {
			const id = this.$route.params.id;
			this.props.delMember({ id, member_uid }).then(res => {
				if (!res.payload.data.errcode) {
					message.success(res.payload.data.errmsg);
					this.reFetchList(); // ?????????????????????????????????????????????
				}
			});
		};
	};

	// ??? - ??????????????????
	changeUserRole = e => {
		const id = this.$route.params.id;
		const role = e.split("-")[0];
		const member_uid = e.split("-")[1];
		this.props.changeMemberRole({ id, member_uid, role }).then(res => {
			if (!res.payload.data.errcode) {
				message.success(res.payload.data.errmsg);
				this.reFetchList(); // ?????????????????????????????????????????????
			}
		});
	};

	// ????????????????????????????????????
	changeEmailNotice = async (notice, member_uid) => {
		const id = this.$route.params.id;
		await this.props.changeMemberEmailNotice({ id, member_uid, notice });
		this.reFetchList(); // ?????????????????????????????????????????????
	};

	// ???????????????
	handleCancel = () => {
		this.setState({
			visible: false
		});
	};
	// ???????????????????????????
	handleModalCancel = () => {
		this.setState({
			modalVisible: false
		});
	};

	// ??????????????????
	handleChange = key => {
		this.setState({
			selectProjectId: key
		});
	};

	// ???????????????????????????
	handleModalOk = async () => {
		// ??????????????????????????????
		const menberList = await this.props.getProjectMemberList(
			this.state.selectProjectId
		);
		const memberUidList = menberList.payload.data.data.map(item => {
			return item.uid;
		});
		this.addMembers(memberUidList);
	};

	onUserSelect = uids => {
		this.setState({
			inputUids: uids
		});
	};

	async UNSAFE_componentWillMount() {
		const groupMemberList = await this.props.fetchGroupMemberList(
			this.props.projectMsg.group_id
		);
		const groupMsg = await Methods_App.setCurrGroup(
			this.props.projectMsg.group_id
		);
		const projectMemberList = await this.props.getProjectMemberList(
			this.$route.params.id
		);
		this.setState({
			groupMemberList: groupMemberList.payload.data.data,
			groupName: groupMsg.payload.data.data.group_name,
			projectMemberList: arrayAddKey(projectMemberList.payload.data.data),
			role: this.props.projectMsg.role
		});
	}

	render() {
		const isEmailChangeEable =
			this.state.role === "owner" || this.state.role === "admin";
		const columns = [
			{
				title:
					this.props.projectMsg.name +
					" ???????????? (" +
					this.state.projectMemberList.length +
					") ???",
				dataIndex: "username",
				key: "username",
				render: (text, record) => {
					return (
						<div class="m-user">
							<img
								src={"/api/user/avatar?uid=" + record.uid}
								class="m-user-img"
							/>
							<p class="m-user-name">{text}</p>
							<aTooltip placement="top" title="????????????">
								<span>
									<Switch
										size="small"
										checkedChildren="???"
										unCheckedChildren="???"
										checked={record.email_notice}
										disabled={
											!(isEmailChangeEable || record.uid === this.props.uid)
										}
										onChange={e => this.changeEmailNotice(e, record.uid)}
									/>
								</span>
							</aTooltip>
						</div>
					);
				}
			},
			{
				title:
					this.state.role === "owner" || this.state.role === "admin" ? (
						<div class="btn-container">
							<aButton
								class="btn"
								type="primary"
								icon="plus"
								onClick={this.showAddMemberModal}>
								????????????
							</aButton>
							<aButton
								class="btn"
								icon="plus"
								onClick={this.showImportMemberModal}>
								??????????????????
							</aButton>
						</div>
					) : (
						""
					),
				key: "action",
				className: "member-opration",
				render: (text, record) => {
					if (this.state.role === "owner" || this.state.role === "admin") {
						return (
							<div>
								<Select
									value={record.role + "-" + record.uid}
									class="select"
									onChange={this.changeUserRole}>
									<Option value={"owner-" + record.uid}>??????</Option>
									<Option value={"dev-" + record.uid}>?????????</Option>
									<Option value={"guest-" + record.uid}>??????</Option>
								</Select>
								<Popconfirm
									placement="topRight"
									title="?????????????????????? "
									onConfirm={this.deleteConfirm(record.uid)}
									okText="??????"
									cancelText="">
									<aButton type="danger" icon="delete" class="btn-danger" />
								</Popconfirm>
							</div>
						);
					} else {
						// ?????????????????????????????? ???????????????
						if (record.role === "owner") {
							return "??????";
						} else if (record.role === "dev") {
							return "?????????";
						} else if (record.role === "guest") {
							return "??????";
						} else {
							return "";
						}
					}
				}
			}
		];
		// ??????????????????????????????????????????
		const children = this.props.projectList.map((item, index) => (
			<Option key={index} value={"" + item._id}>
				{item.name}
			</Option>
		));

		return (
			<div class="g-row">
				<div class="m-panel">
					{this.state.visible ? (
						<aModal
							title="????????????"
							visible={this.state.visible}
							onOk={this.handleOk}
							onCancel={this.handleCancel}>
							<aRow gutter={6} class="modal-input">
								<aCol span="5">
									<div class="label usernamelabel">?????????: </div>
								</aCol>
								<aCol span="15">
									<UsernameAutoComplete callbackState={this.onUserSelect} />
								</aCol>
							</aRow>
							<aRow gutter={6} class="modal-input">
								<aCol span="5">
									<div class="label usernamelabel">??????: </div>
								</aCol>
								<aCol span="15">
									<Select
										defaultValue="dev"
										class="select"
										onChange={this.changeNewMemberRole}>
										<Option value="owner">??????</Option>
										<Option value="dev">?????????</Option>
										<Option value="guest">??????</Option>
									</Select>
								</aCol>
							</aRow>
						</aModal>
					) : (
						""
					)}
					<aModal
						title="??????????????????"
						visible={this.state.modalVisible}
						onOk={this.handleModalOk}
						onCancel={this.handleModalCancel}>
						<aRow gutter={6} class="modal-input">
							<aCol span="5">
								<div class="label usernamelabel">?????????: </div>
							</aCol>
							<aCol span="15">
								<Select
									showSearch
									style={{ width: 200 }}
									placeholder="?????????????????????"
									optionFilterProp="children"
									onChange={this.handleChange}>
									{children}
								</Select>
							</aCol>
						</aRow>
					</aModal>

					<Table
						columns={columns}
						dataSource={this.state.projectMemberList}
						pagination={false}
						locale={{ emptyText: <ErrMsg type="noMemberInProject" /> }}
						class="setting-project-member"
					/>
					<Card
						bordered={false}
						title={
							this.state.groupName +
							" ???????????? " +
							"(" +
							this.state.groupMemberList.length +
							") ???"
						}
						hoverable={true}
						class="setting-group">
						{this.state.groupMemberList.length ? (
							this.state.groupMemberList.map((item, index) => {
								return (
									<div key={index} class="card-item">
										<img
											src={
												location.protocol +
												"//" +
												location.host +
												"/api/user/avatar?uid=" +
												item.uid
											}
											class="item-img"
										/>
										<p class="item-name">
											{item.username}
											{item.uid === this.props.uid ? (
												<Badge
													count={"???"}
													style={{
														backgroundColor: "#689bd0",
														fontSize: "13px",
														marginLeft: "8px",
														borderRadius: "4px"
													}}
												/>
											) : null}
										</p>
										{item.role === "owner" ? (
											<p class="item-role">??????</p>
										) : null}
										{item.role === "dev" ? (
											<p class="item-role">?????????</p>
										) : null}
										{item.role === "guest" ? (
											<p class="item-role">??????</p>
										) : null}
									</div>
								);
							})
						) : (
							<ErrMsg type="noMemberInGroup" />
						)}
					</Card>
				</div>
			</div>
		);
	}
}

export default ProjectMember;
