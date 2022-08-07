import "./ProjectCard.scss";
import { Card, Tooltip, Modal, Alert, Input, message } from "ant-design-vue";
import constants from "ysrc/utils/variable";
import produce from "immer";
import { defineComponent } from "vue";
import { _ } from "@ventose/ui";
import LazySvg from "ysrc/components/LazySvg/LazySvg";
import { State_App } from "ysrc/state/State_App";
import { API } from "ysrc/api";

const confirm = Modal.confirm;

export default defineComponent({
	props: [
		"projectData",
		"uid",
		"inFollowPage",
		"callbackResult",
		"isShow",
		"getProject",
		"checkProjectName",
		"copyProjectMsg",
		"currPage"
	],
	setup() {
		return { State_App };
	},
	mounted() {},
	methods: {
		add: _.debounce(async function () {
			const { projectData } = this;
			const uid = this.State_App.user.uid;
			const param = {
				uid,
				projectid: projectData._id,
				projectname: projectData.name,
				icon: projectData.icon || constants.PROJECT_ICON[0],
				color: projectData.color || constants.PROJECT_COLOR.blue
			};
			const { data } = await API.project.addFollow(param);
			if (data) {
				debugger;
				this.callbackResult();
			}
		}, 400),
		del: _.debounce(async function () {
			const id = this.projectData.projectid || this.projectData._id;
			const { data } = await API.project.delFollow(id);
			if (data) {
				debugger;
				this.callbackResult();
			}
		}, 400)
	},
	render() {
		const projectData = this.projectData;
		const inFollowPage = this.inFollowPage;
		const isShow = this.isShow;
		debugger;

		return (
			<div class="card-container">
				<aCard
					bordered={false}
					class="m-card"
					onClick={() =>
						this.$router.push({
							path: "/project/" + (projectData.projectid || projectData._id)
						})
					}>
					<LazySvg
						icon={projectData.icon || "star-o"}
						class="ui-logo"
						style={{
							backgroundColor:
								constants.PROJECT_COLOR[projectData.color] ||
								constants.PROJECT_COLOR.blue
						}}
					/>
					<h4 class="ui-title">
						{projectData.name || projectData.projectname}
					</h4>
				</aCard>
				<div class="card-btns flex">
					{isShow && (
						<span class="pointer" onClick={this.showConfirm}>
							<aTooltip placement="rightTop" title="复制项目">
								<LazySvg icon="copy" />
							</aTooltip>
						</span>
					)}
					<span
						class="pointer"
						onClick={projectData.follow || inFollowPage ? this.del : this.add}>
						<aTooltip
							placement="rightTop"
							title={
								projectData.follow || inFollowPage ? "取消关注" : "添加关注"
							}>
							<LazySvg
								icon={
									projectData.follow || inFollowPage ? "follow" : "unfollow"
								}
								onClick={this.showConfirm}
							/>
						</aTooltip>
					</span>
				</div>
			</div>
		);
	}
});
