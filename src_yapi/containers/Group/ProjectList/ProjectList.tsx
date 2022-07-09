import ProjectCard from "ysrc/components/ProjectCard/ProjectCard";
import { ErrMsg } from "ysrc/components/ErrMsg/ErrMsg";

import "./ProjectList.scss";
import { defineComponent } from "vue";

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
	data() {
		return {
			state: {
				visible: false,
				protocol: "http://",
				projectData: []
			}
		};
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
					this.props.currGroup._id,
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

		const isShow = /(admin)|(owner)|(dev)/.test(this.props.currGroup.role);

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
									isShow={isShow}
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
						{this.props.currGroup.group_name} 分组共 ({projectData.length})
						个项目
					</aCol>
					<aCol span={8}>
						{isShow ? (
							<RouterView to="/add-project">
								<aButton type="primary">添加项目</aButton>
							</RouterView>
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
					{this.props.currGroup.type === "private" ? (
						<OwnerSpace />
					) : projectData.length ? (
						projectData.map((item, index) => {
							return (
								<aCol xs={8} lg={6} xxl={4} key={index}>
									<ProjectCard
										projectData={item}
										callbackResult={this.receiveRes}
										isShow={isShow}
									/>
								</aCol>
							);
						})
					) : (
						<ErrMsg type="noProject" />
					)}
				</aRow>
			</div>
		);
	}
});
