import {
	Modal,
	Input,
	message,
	Spin,
	Row,
	Menu,
	Col,
	Popover,
	Tooltip
} from "ant-design-vue";

import axios from "axios";

const { TextArea } = Input;
const Search = Input.Search;
import UsernameAutoComplete from "ysrc/components/UsernameAutoComplete/UsernameAutoComplete";
import GuideBtns from "ysrc/components/GuideBtns/GuideBtns";
import { _ } from "@ventose/ui";

import "./GroupList.scss";
import { defineComponent } from "vue";

const tip = (
	<div class="title-container">
		<h3 class="title">欢迎使用 YApi ~</h3>
		<p>
			这里的 <b>“个人空间”</b>{" "}
			是你自己才能看到的分组，你拥有这个分组的全部权限，可以在这个分组里探索
			YApi 的功能。
		</p>
	</div>
);

export default defineComponent({
	props: [
		"groupList",
		"currGroup",
		"fetchGroupList",
		"setCurrGroup",
		"setGroupList",
		"match",
		"history",
		"curUserRole",
		"curUserRoleInGroup",
		"studyTip",
		"study",
		"fetchNewsData",
		"fetchGroupMsg"
	],
	data() {
		return {
			state: {
				addGroupModalVisible: false,
				newGroupName: "",
				newGroupDesc: "",
				currGroupName: "",
				currGroupDesc: "",
				groupList: [],
				owner_uids: []
			}
		};
	},

	async mounted() {
		const groupId = !isNaN(this.props.match.params.groupId)
			? parseInt(this.props.match.params.groupId)
			: 0;
		await this.props.fetchGroupList();
		let currGroup = false;
		if (this.props.groupList.length && groupId) {
			for (let i = 0; i < this.props.groupList.length; i++) {
				if (this.props.groupList[i]._id === groupId) {
					currGroup = this.props.groupList[i];
				}
			}
		} else if (!groupId && this.props.groupList.length) {
			this.props.history.push(`/group/${this.props.groupList[0]._id}`);
		}
		if (!currGroup) {
			currGroup = this.props.groupList[0] || { group_name: "", group_desc: "" };
			this.props.history.replace(`${currGroup._id}`);
		}
		this.setState({ groupList: this.props.groupList });
		this.props.setCurrGroup(currGroup);
	},
	methods: {
		showModal() {
			this.setState({
				addGroupModalVisible: true
			});
		},
		hideModal() {
			this.setState({
				newGroupName: "",
				group_name: "",
				owner_uids: [],
				addGroupModalVisible: false
			});
		},
		async addGroup() {
			const {
				newGroupName: group_name,
				newGroupDesc: group_desc,
				owner_uids
			} = this.state;
			const res = await axios.post("/api/group/add", {
				group_name,
				group_desc,
				owner_uids
			});
			if (!res.data.errcode) {
				this.setState({
					newGroupName: "",
					group_name: "",
					owner_uids: [],
					addGroupModalVisible: false
				});
				await this.props.fetchGroupList();
				this.setState({ groupList: this.props.groupList });
				this.props.fetchGroupMsg(this.props.currGroup._id);
				this.props.fetchNewsData(this.props.currGroup._id, "group", 1, 10);
			} else {
				message.error(res.data.errmsg);
			}
		},
		async editGroup() {
			const { currGroupName: group_name, currGroupDesc: group_desc } =
				this.state;
			const id = this.props.currGroup._id;
			const res = await axios.post("/api/group/up", {
				group_name,
				group_desc,
				id
			});
			if (res.data.errcode) {
				message.error(res.data.errmsg);
			} else {
				await this.props.fetchGroupList();

				this.setState({ groupList: this.props.groupList });
				const currGroup = _.find(this.props.groupList, group => {
					return +group._id === +id;
				});

				this.props.setCurrGroup(currGroup);
				// this.props.setCurrGroup({ group_name, group_desc, _id: id });
				this.props.fetchGroupMsg(this.props.currGroup._id);
				this.props.fetchNewsData(this.props.currGroup._id, "group", 1, 10);
			}
		},
		inputNewGroupName(e) {
			this.setState({ newGroupName: e.target.value });
		},
		inputNewGroupDesc(e) {
			this.setState({ newGroupDesc: e.target.value });
		},
		selectGroup(e) {
			const groupId = e.key;
			//const currGroup = this.props.groupList.find((group) => { return +group._id === +groupId });
			const currGroup = _.find(this.props.groupList, group => {
				return +group._id === +groupId;
			});
			this.props.setCurrGroup(currGroup);
			this.props.history.replace(`${currGroup._id}`);
			this.props.fetchNewsData(groupId, "group", 1, 10);
		},
		onUserSelect(uids) {
			this.setState({
				owner_uids: uids
			});
		},
		searchGroup(e, value) {
			const v = value || e.target.value;
			const { groupList } = this.props;
			if (v === "") {
				this.setState({ groupList });
			} else {
				this.setState({
					groupList: groupList.filter(group =>
						new RegExp(v, "i").test(group.group_name)
					)
				});
			}
		}
	},
	render() {
		const { currGroup } = this.props;
		return (
			<div class="m-group">
				{!this.props.study ? <div class="study-mask" /> : null}
				<div class="group-bar">
					<div class="curr-group">
						<div class="curr-group-name">
							<span class="name">{currGroup.group_name}</span>
							<aTooltip title="添加分组">
								<a class="editSet">
									<aIcon
										class="btn"
										type="folder-add"
										onClick={this.showModal}
									/>
								</a>
							</aTooltip>
						</div>
						<div class="curr-group-desc">简介: {currGroup.group_desc}</div>
					</div>

					<div class="group-operate">
						<div class="search">
							<aSearch
								placeholder="搜索分类"
								onChange={this.searchGroup}
								onSearch={v => this.searchGroup(null, v)}
							/>
						</div>
					</div>
					{this.state.groupList.length === 0 && (
						<aSpin
							style={{
								marginTop: 20,
								display: "flex",
								justifyContent: "center"
							}}
						/>
					)}
					<aMenu
						class="group-list"
						mode="inline"
						onClick={this.selectGroup}
						selectedKeys={[`${currGroup._id}`]}>
						{this.state.groupList.map(group => {
							if (group.type === "private") {
								return (
									<aMenu.Item
										key={`${group._id}`}
										class="group-item"
										style={{ zIndex: this.props.studyTip === 0 ? 3 : 1 }}>
										<aIcon type="user" />
										<Popover
											overlayClassName="popover-index"
											content={<GuideBtns />}
											title={tip}
											placement="right"
											visible={this.props.studyTip === 0 && !this.props.study}>
											{group.group_name}
										</Popover>
									</aMenu.Item>
								);
							} else {
								return (
									<aMenu.Item key={`${group._id}`} class="group-item">
										<aIcon type="folder-open" />
										{group.group_name}
									</aMenu.Item>
								);
							}
						})}
					</aMenu>
				</div>
				{this.state.addGroupModalVisible ? (
					<aModal
						title="添加分组"
						visible={this.state.addGroupModalVisible}
						onOk={this.addGroup}
						onCancel={this.hideModal}
						class="add-group-modal">
						<aRow gutter={6} class="modal-input">
							<aCol span="5">
								<div class="label">分组名：</div>
							</aCol>
							<aCol span="15">
								<aInput
									placeholder="请输入分组名称"
									onChange={this.inputNewGroupName}
								/>
							</aCol>
						</aRow>
						<aRow gutter={6} class="modal-input">
							<aCol span="5">
								<div class="label">简介：</div>
							</aCol>
							<aCol span="15">
								<TextArea
									rows={3}
									placeholder="请输入分组描述"
									onChange={this.inputNewGroupDesc}
								/>
							</aCol>
						</aRow>
						<aRow gutter={6} class="modal-input">
							<aCol span="5">
								<div class="label">组长：</div>
							</aCol>
							<aCol span="15">
								<UsernameAutoComplete callbackState={this.onUserSelect} />
							</aCol>
						</aRow>
					</aModal>
				) : (
					""
				)}
			</div>
		);
	}
});
