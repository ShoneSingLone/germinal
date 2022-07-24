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
		"configs",
		"projectData",
		"uid",
		"inFollowPage",
		"callbackResult",
		"history",
		"delFollow",
		"addFollow",
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
		add: _.debounce(function () {
			const { projectData } = this;
			const uid = this.State_App.user.uid;
			const param = {
				uid,
				projectid: projectData._id,
				projectname: projectData.name,
				icon: projectData.icon || constants.PROJECT_ICON[0],
				color: projectData.color || constants.PROJECT_COLOR.blue
			};
			debugger;

			const res = API.project.addFollow(param);
			this.props.addFollow(param).then(res => {
				if (res.payload.data.errcode === 0) {
					this.props.callbackResult();
					// message.success('已添加关注！');  // 星号已做出反馈 无需重复提醒用户
				}
			});
		}, 400),
		del: _.debounce(function () {
			const id = this.props.projectData.projectid || this.props.projectData._id;
			this.props.delFollow(id).then(res => {
				if (res.payload.data.errcode === 0) {
					this.props.callbackResult();
					// message.success('已取消关注！');  // 星号已做出反馈 无需重复提醒用户
				}
			});
		}, 400)
	},
	render() {
		const projectData = this.projectData;
		const inFollowPage = this.inFollowPage;
		const isShow = this.isShow;
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
