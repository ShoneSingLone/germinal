<script lang="jsx">
import GroupList from "./GroupList/GroupList";
/*
import ProjectList from "./ProjectList/ProjectList";
import MemberList from "./MemberList/MemberList";
import GroupLog from "./GroupLog/GroupLog";
import GroupSetting from "./GroupSetting/GroupSetting.vue"; */
import "./Group.scss";
import { API } from "ysrc/api";
import { defineComponent } from "vue";
import { Mutations_App, State_App } from "ysrc/state/State_App";

export default defineComponent({
	setup() {
		return {
			State_App
		};
	},
	data() {
		const groupId = this.$route.params.groupId || false;
		return {
			state: {
				groupId
			}
		};
	},
	mounted() {
		this.ifUrlNoGroupIdGetAddAddIdToUrl();
	},
	methods: {
		async ifUrlNoGroupIdGetAddAddIdToUrl() {
			try {
				let jump = () => null;
				if (!this.state.groupId) {
					let { data: group } = await API.group.getMyGroup();
					this.state.groupId = group._id;
					jump = () =>
						this.$router.push({ path: `/group/${this.state.groupId}` });
				}
				await Mutations_App.setCurrGroup(this.state.groupId);
				jump();
			} catch (e) {
				console.error(e);
			}
		}
	},
	render() {
		if (!this.state.groupId) {
			return <aSpin />;
		}

		return (
			<aLayout
				style={{
					marginLeft: "24px",
					marginTop: "24px"
				}}>
				<aLayoutSider style={{ height: "100%" }} width={300}>
					<div class="logo">Logo</div>
					<GroupList />
				</aLayoutSider>
			</aLayout>
		);
		return (
			<aLayout
				style={{
					minHeight: "calc(100vh - 100px)",
					marginLeft: "24px",
					marginTop: "24px"
				}}>
				<aLayoutSider style={{ height: "100%" }} width={300}>
					<div class="logo" />
					<GroupList />
				</aLayoutSider>
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
							{this.State_App.currGroup.type === "public" ? (
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
							this.State_App.currGroup.type !== "private" ? (
								<aTabPane tab="分组设置" key="4">
									<GroupSetting />
								</aTabPane>
							) : null}
						</aTabs>
					</aContent>
				</aLayout>
			</aLayout>
		);
	}
});
</script>

<style></style>
