import { ErrMsg } from "ysrc/components/ErrMsg/ErrMsg";
import UsernameAutoComplete from "ysrc/components/UsernameAutoComplete/UsernameAutoComplete";
import { State_App } from "ysrc/state/State_App";
import { defineComponent } from "vue";
import "./MemberList.scss";

function arrayAddKey(arr) {
	return arr.map((item, index) => {
		return {
			...item,
			key: index
		};
	});
}

export default defineComponent({
	props: [
		"currGroup",
		"uid",
		"fetchGroupMemberList",
		"setCurrGroup",
		"addMember",
		"delMember",
		"changeMemberRole",
		"role"
	],
	data() {
		return {
			state: {
				userInfo: [],
				role: "",
				visible: false,
				dataSource: [],
				inputUids: [],
				inputRole: "dev"
			}
		};
	},

	mounted() {
		const currGroupId = (this._groupId = this.props.currGroup._id);
		this.props.setCurrGroup(currGroupId).then(res => {
			this.setState({
				role: res.payload.data.data.role
			});
		});
		this.props.fetchGroupMemberList(currGroupId).then(res => {
			this.setState({
				userInfo: arrayAddKey(res.payload.data.data)
			});
		});

		this.$watch(
			() => {
				return this._groupId + this.props.currGroup._id;
			},
			() => {
				if (this._groupId !== this._groupId) {
					return null;
				}
				if (this.props.currGroup._id !== nextProps.currGroup._id) {
					this.props.fetchGroupMemberList(nextProps.currGroup._id).then(res => {
						this.setState({
							userInfo: arrayAddKey(res.payload.data.data)
						});
					});
					this.props.setCurrGroup(nextProps.currGroup._id).then(res => {
						this.setState({
							role: res.payload.data.data.role
						});
					});
				}
			}
		);
	},
	methods: {
		showAddMemberModal() {
			this.setState({
				visible: true
			});
		},

		// 重新获取列表
		reFetchList() {
			this.props
				.fetchGroupMemberList(this.State_App.currGroup._id)
				.then(res => {
					this.setState({
						userInfo: arrayAddKey(res.payload.data.data),
						visible: false
					});
				});
		},

		// 增 - 添加成员

		handleOk() {
			this.props
				.addMember({
					id: this.props.currGroup._id,
					member_uids: this.state.inputUids,
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
							`添加成功! 已成功添加 ${addLength} 人，其中 ${existLength} 人已存在`
						);
						this.reFetchList(); // 添加成功后重新获取分组成员列表
					}
				});
		},
		// 添加成员时 选择新增成员权限

		changeNewMemberRole(value) {
			this.setState({
				inputRole: value
			});
		},

		// 删 - 删除分组成员

		deleteConfirm(member_uid) {
			return () => {
				const id = this.props.currGroup._id;
				this.props.delMember({ id, member_uid }).then(res => {
					if (!res.payload.data.errcode) {
						message.success(res.payload.data.errmsg);
						this.reFetchList(); // 添加成功后重新获取分组成员列表
					}
				});
			};
		},

		// 改 - 修改成员权限
		changeUserRole(e) {
			const id = this.props.currGroup._id;
			const role = e.split("-")[0];
			const member_uid = e.split("-")[1];
			this.props.changeMemberRole({ id, member_uid, role }).then(res => {
				if (!res.payload.data.errcode) {
					message.success(res.payload.data.errmsg);
					this.reFetchList(); // 添加成功后重新获取分组成员列表
				}
			});
		},

		// 关闭模态框

		handleCancel() {
			this.setState({
				visible: false
			});
		},

		onUserSelect(uids) {
			this.setState({
				inputUids: uids
			});
		}
	},
	render() {
		const columns = [
			{
				title:
					this.props.currGroup.group_name +
					" 分组成员 (" +
					this.state.userInfo.length +
					") 人",
				dataIndex: "username",
				key: "username",
				render: (text, record) => {
					return (
						<div class="m-user">
							<RouterView to={`/user/profile/${record.uid}`}>
								<img
									src={
										location.protocol +
										"//" +
										location.host +
										"/api/user/avatar?uid=" +
										record.uid
									}
									class="m-user-img"
								/>
							</RouterView>
							<RouterView to={`/user/profile/${record.uid}`}>
								<p class="m-user-name">{text}</p>
							</RouterView>
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
								onClick={this.showAddMemberModal}>
								添加成员
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
								<aSelect
									value={record.role + "-" + record.uid}
									class="select"
									onChange={this.changeUserRole}>
									<aOption value={"owner-" + record.uid}>组长</aOption>
									<aOption value={"dev-" + record.uid}>开发者</aOption>
									<aOption value={"guest-" + record.uid}>访客</aOption>
								</aSelect>
								<aPopconfirm
									placement="topRight"
									title="你确定要删除吗? "
									onConfirm={this.deleteConfirm(record.uid)}
									okText="确定"
									cancelText="">
									<aButton type="danger" icon="delete" class="btn-danger" />
									{/* <LazySvg icon="delete" class="btn-danger"/> */}
								</aPopconfirm>
							</div>
						);
					} else {
						// 非管理员可以看到权限 但无法修改
						if (record.role === "owner") {
							return "组长";
						} else if (record.role === "dev") {
							return "开发者";
						} else if (record.role === "guest") {
							return "访客";
						} else {
							return "";
						}
					}
				}
			}
		];
		let userinfo = this.state.userInfo;
		let ownerinfo = [];
		let devinfo = [];
		let guestinfo = [];
		for (let i = 0; i < userinfo.length; i++) {
			if (userinfo[i].role === "owner") {
				ownerinfo.push(userinfo[i]);
			}
			if (userinfo[i].role === "dev") {
				devinfo.push(userinfo[i]);
			}
			if (userinfo[i].role === "guest") {
				guestinfo.push(userinfo[i]);
			}
		}
		userinfo = [...ownerinfo, ...devinfo, ...guestinfo];
		return (
			<div class="m-panel">
				{this.state.visible ? (
					<aModal
						title="添加成员"
						visible={this.state.visible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}>
						<aRow gutter={6} class="modal-input">
							<aCol span="5">
								<div class="label usernamelabel">用户名: </div>
							</aCol>
							<aCol span="15">
								<UsernameAutoComplete callbackState={this.onUserSelect} />
							</aCol>
						</aRow>
						<aRow gutter={6} class="modal-input">
							<aCol span="5">
								<div class="label usernameauth">权限: </div>
							</aCol>
							<aCol span="15">
								<aSelect
									defaultValue="dev"
									class="select"
									onChange={this.changeNewMemberRole}>
									<aOption value="owner">组长</aOption>
									<aOption value="dev">开发者</aOption>
									<aOption value="guest">访客</aOption>
								</aSelect>
							</aCol>
						</aRow>
					</aModal>
				) : (
					""
				)}
				<aTable
					columns={columns}
					dataSource={userinfo}
					pagination={false}
					locale={{ emptyText: <ErrMsg type="noMemberInGroup" /> }}
				/>
			</div>
		);
	}
});
