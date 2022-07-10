import ProjectCard from "ysrc/components/ProjectCard/ProjectCard";
import { ErrMsg } from "ysrc/components/ErrMsg/ErrMsg";

import "./ProjectList.scss";
import { defineComponent } from "vue";
import { State_App } from "ysrc/state/State_App";

export default defineComponent({
	props: [
		"form",
		"fetchProjectList",
		"addProject",
		"delProject",
		"changeUpdateModal",
		"projectList",
		"userInfo",
		"tableLoading",
		"currGroup",
		"setBreadcrumb",
		"currPage",
		"studyTip",
		"study"
	],
	setup() {
		return { State_App };
	},
	data() {
		const vm = this;
		return {
			configs: {},
			state: {
				visible: false,
				protocol: "http://",
				projectData: []
			}
		};
	},
	computed: {
		isShow() {
			return /(admin)|(owner)|(dev)/.test(this.State_App.currGroup.role);
		}
	},
	methods: {
		// 取消修改
		handleCancel() {
			this.props.form.resetFields();
			this.setState({
				visible: false
			});
		},

		// 修改线上域名的协议类型 (http/https)
		protocolChange(value) {
			this.setState({
				protocol: value
			});
		},
		// 获取 ProjectCard 组件的关注事件回调，收到后更新数据

		receiveRes() {
			{
				this.props.fetchProjectList(
					this.State_App.currGroup._id,
					this.props.currPage
				);
			}
		}
	},
	render() {
		let projectData = this.state.projectData;
		let noFollow = [];
		let followProject = [];
		for (var i in projectData) {
			if (projectData[i].follow) {
				followProject.push(projectData[i]);
			} else {
				noFollow.push(projectData[i]);
			}
		}
		followProject = followProject.sort((a, b) => {
			return b.up_time - a.up_time;
		});
		noFollow = noFollow.sort((a, b) => {
			return b.up_time - a.up_time;
		});
		projectData = [...followProject, ...noFollow];

		const Follow = () => {
			return followProject.length ? (
				<aRow>
					<h3 class="owner-type">我的关注</h3>
					{followProject.map((item, index) => {
						return (
							<aCol xs={8} lg={6} xxl={4} key={index}>
								<ProjectCard
									projectData={item}
									callbackResult={this.receiveRes}
								/>
							</aCol>
						);
					})}
				</aRow>
			) : null;
		};
		const NoFollow = () => {
			return noFollow.length ? (
				<aRow style={{ borderBottom: "1px solid #eee", marginBottom: "15px" }}>
					<h3 class="owner-type">我的项目</h3>
					{noFollow.map((item, index) => {
						return (
							<aCol xs={8} lg={6} xxl={4} key={index}>
								<ProjectCard
									projectData={item}
									callbackResult={this.receiveRes}
									isShow={this.isShow}
								/>
							</aCol>
						);
					})}
				</aRow>
			) : null;
		};

		const OwnerSpace = () => {
			return projectData.length ? (
				<div>
					<NoFollow />
					<Follow />
				</div>
			) : (
				<ErrMsg type="noProject" />
			);
		};

		return (
			<div
				style={{ paddingTop: "24px" }}
				class="m-panel card-panel card-panel-s project-list">
				<aRow class="project-list-header">
					<aCol span={16} style={{ textAlign: "left" }}>
						{this.State_App.currGroup.group_name} 分组共 ({projectData.length})
						个项目{" "}
						{/* {this.isShow ? JSON.stringify(this.State_App.currGroup, null, 2) : ""} */}
					</aCol>
					<aCol span={8} class="flex end">
						{this.isShow ? (
							<RouterLink to="/add-project">
								<aButton type="primary">添加项目</aButton>{" "}
							</RouterLink>
						) : (
							<aTooltip title="您没有权限,请联系该分组组长或管理员">
								<aButton type="primary" disabled>
									添加项目
								</aButton>
							</aTooltip>
						)}
					</aCol>
				</aRow>
				<aRow>
					{this.State_App.currGroup.type === "private" ? (
						<OwnerSpace />
					) : projectData.length ? (
						projectData.map((item, index) => {
							return (
								<aCol xs={8} lg={6} xxl={4} key={index}>
									<ProjectCard
										projectData={item}
										callbackResult={this.receiveRes}
										isShow={this.isShow}
									/>
								</aCol>
							);
						})
					) : (
						<div class="flex center width100">
							<ErrMsg type="noProject" />
						</div>
					)}
				</aRow>
			</div>
		);
	}
});
