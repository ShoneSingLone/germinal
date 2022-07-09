import "./ProjectCard.scss";
import { Card, Tooltip, Modal, Alert, Input, message } from "ant-design-vue";
import constants from "ysrc/utils/variable";
import produce from "immer";
import { defineComponent } from "vue";
import { _ } from "@ventose/ui";
const confirm = Modal.confirm;

export default defineComponent({
	props: [
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
	mounted() {
		this.add = _.debounce(this.add, 400);
		this.del = _.debounce(this.del, 400);
	},
	methods: {},
	render() {
		const { projectData, inFollowPage, isShow } = this.props;
		return (
			<div class="card-container">
				<Card
					bordered={false}
					class="m-card"
					onClick={() =>
						this.props.history.push(
							"/project/" + (projectData.projectid || projectData._id)
						)
					}>
					<aIcon
						type={projectData.icon || "star-o"}
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
				</Card>
				<div
					class="card-btns"
					onClick={projectData.follow || inFollowPage ? this.del : this.add}>
					<aTooltip
						placement="rightTop"
						title={
							projectData.follow || inFollowPage ? "取消关注" : "添加关注"
						}>
						<aIcon
							type={projectData.follow || inFollowPage ? "star" : "star-o"}
							class={
								"icon " + (projectData.follow || inFollowPage ? "active" : "")
							}
						/>
					</aTooltip>
				</div>
				{isShow && (
					<div class="copy-btns" onClick={this.showConfirm}>
						<aTooltip placement="rightTop" title="复制项目">
							<LazySvg icon="copy" class="icon" />
						</aTooltip>
					</div>
				)}
			</div>
		);
	}
});
