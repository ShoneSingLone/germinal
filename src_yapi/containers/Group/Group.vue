<template />

<script lang="jsx">
/* import GroupList from "./GroupList/GroupList";
import ProjectList from "./ProjectList/ProjectList";
import MemberList from "./MemberList/MemberList";
import GroupLog from "./GroupLog/GroupLog";
import GroupSetting from "./GroupSetting/GroupSetting.vue"; */
import "./Group.scss";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			groupId: -1
		};
	},
	async mounted() {
		let r = await axios.get("/api/group/get_mygroup");
		try {
			let group = r.data.data;
			this.groupId = group._id;
			this.setCurrGroup(group);
		} catch (e) {
			console.error(e);
		}
	},
	render(h) {
		return <h1>asdf</h1>;
	},
	rendeasdfr() {
		if (this.state.groupId === -1) return <Spin />;
		const GroupContent = (
			<aLayout
				style={{
					minHeight: "calc(100vh - 100px)",
					marginLeft: "24px",
					marginTop: "24px"
				}}>
				<aSider style={{ height: "100%" }} width={300}>
					<div class="logo" />
					<GroupList />
				</aSider>
				<aLayout>
					<aContent
						style={{
							height: "100%",
							margin: "0 24px 0 16px",
							overflow: "initial",
							backgroundColor: "#fff"
						}}>
						<aTabs
							type="card"
							className="m-tab tabs-large"
							style={{ height: "100%" }}>
							<aTabPane tab="项目列表" key="1">
								<ProjectList />
							</aTabPane>
							{this.props.currGroup.type === "public" ? (
								<aTabPane tab="成员列表" key="2">
									<MemberList />
								</aTabPane>
							) : null}
							{["admin", "owner", "guest", "dev"].indexOf(
								this.props.curUserRoleInGroup
							) > -1 || this.props.curUserRole === "admin" ? (
								<aTabPane tab="分组动态" key="3">
									<GroupLog />
								</aTabPane>
							) : (
								""
							)}
							{(this.props.curUserRole === "admin" ||
								this.props.curUserRoleInGroup === "owner") &&
							this.props.currGroup.type !== "private" ? (
								<aTabPane tab="分组设置" key="4">
									<GroupSetting />
								</aTabPane>
							) : null}
						</aTabs>
					</aContent>
				</aLayout>
			</aLayout>
		);
		return (
			<div class="projectGround">
				<aSwitch>
					<Redirect exact from="/group" to={"/group/" + this.state.groupId} />
					<Route path="/group/:groupId" render={() => GroupContent} />
				</aSwitch>
			</div>
		);
	}
});
</script>

<style></style>
