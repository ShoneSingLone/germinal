<script lang="jsx">
import { defineComponent } from "vue";
import { _ } from "../loadCommonUtil";

export default defineComponent({
	name: "xButtonCountDown",
	props: ["configs"],
	data() {
		const vm = this;
		return {
			state: { captchaCount: 0 },
			btnConfigs: {
				disabled: false,
				size: "large",
				style: { minWidth: "112px" },
				text: vm.configs.text.normal,
				async onClick() {
					if (_.isFunction(vm.configs.onClick)) {
						await vm.configs.onClick({ countDown });
					}
				}
			}
		};
	},
	watch: {
		"state.captchaCount"(captchaCount) {
			this.handleCaptchaCountChange(captchaCount);
		}
	},
	methods: {
		/* 只是修改倒计时计数 */
		countDown() {
			this.state.captchaCount++;
			/*未达到限制时间则继续增加，间隔一秒*/
			if (this.state.captchaCount <= props.configs.countMax) {
				setTimeout(this.countDown, 1000);
			} else {
				this.state.captchaCount = 0;
			}
		},
		handleCaptchaCountChange(captchaCount) {
			if (captchaCount === 0) {
				/*按钮显示*/
				btnConfigs.text = props.configs.text.normal;
				/*按钮可点击状态*/
				btnConfigs.disabled = false;
				return;
			}

			const setCounDownText = () => {
				return (btnConfigs.text = `${props.configs.countMax - captchaCount} s`);
			};

			if (captchaCount === 1) {
				setCounDownText();
				btnConfigs.disabled = true;
				return;
			}

			if (captchaCount && captchaCount <= props.configs.countMax) {
				setCounDownText();
				return;
			}
		}
	}
});
</script>

<template>
	<xButton :configs="btnConfigs" />
</template>
