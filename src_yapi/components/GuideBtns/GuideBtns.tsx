import { Button } from "ant-design-vue";
import { defineComponent } from "vue";
import { Methods_App } from "ysrc/state/State_App";

export default defineComponent({
	props: ["isLast"],
	methods: {
		// 点击下一步
		nextStep() {
			Methods_App.changeStudyTip();
			if (this.isLast) {
				Methods_App.finishStudy();
			}
		},

		// 点击退出指引
		exitGuide() {
			Methods_App.finishStudy();
		}
	},
	render() {
		return (
			<div class="btn-container">
				<aButton class="btn" type="primary" onClick={this.nextStep}>
					{this.isLast ? "完 成" : "下一步"}
				</aButton>
				<aButton class="btn" type="dashed" onClick={this.exitGuide}>
					退出指引
				</aButton>
			</div>
		);
	}
});
