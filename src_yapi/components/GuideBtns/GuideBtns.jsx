import { Button } from "ant-design-vue";
import { defineComponent } from "vue";

export default defineComponent({
	props: ["changeStudyTip", "finishStudy", "isLast"],

	methods: {
		// 点击下一步
		nextStep() {
			this.props.changeStudyTip();
			if (this.props.isLast) {
				this.props.finishStudy();
			}
		},

		// 点击退出指引
		exitGuide() {
			this.props.finishStudy();
		}
	},
	render() {
		return (
			<div class="btn-container">
				<aButton class="btn" type="primary" onClick={this.nextStep}>
					{this.props.isLast ? "完 成" : "下一步"}
				</aButton>
				<aButton class="btn" type="dashed" onClick={this.exitGuide}>
					退出指引
				</aButton>
			</div>
		);
	}
});
