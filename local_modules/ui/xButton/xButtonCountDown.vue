<script setup lang="jsx">
import { reactive, watch } from "vue";
import { State_UI } from "../State_UI";
import { _ } from "../loadCommonUtil";
const $t = State_UI.$t;

const props = defineProps({
	configs: {
		type: Object,
		default() {
			return {};
		}
	}
});

/* 只是修改倒计时计数 */
function countDown() {
	state.captchaCount++;
	/*未达到限制时间则继续增加，间隔一秒*/
	if (state.captchaCount <= props.configs.countMax) {
		setTimeout(countDown, 1000);
	} else {
		state.captchaCount = 0;
	}
}

const state = reactive({ captchaCount: 0 });
const btnConfigs = reactive({
	disabled: false,
	size: "large",
	style: { minWidth: "112px" },
	text: props.configs.text.normal,
	async onClick() {
		if (_.isFunction(props.configs.onClick)) {
			await props.configs.onClick({ countDown });
		}
	}
});

watch(() => state.captchaCount, handleCaptchaCountChange);

function handleCaptchaCountChange(captchaCount) {
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
</script>

<template>
	<xButton :configs="btnConfigs" />
</template>
