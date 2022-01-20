<script setup>
/*https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup*/
import { onMounted, reactive } from "vue";
import { StateAppActions } from "lsrc/state/StateApp";
import { setDocumentTitle } from "@ventose/ui/tools/dom";

const state = reactive({ isLoading: true });
onMounted(async () => {
	/* 做一些初始化的处理，包括进入系统加载对应的字典 */
	const StateApp = await StateAppActions.initAppConfigs();
	setDocumentTitle(StateApp.configs.title);
	state.isLoading = false;
});
</script>
<template>
	<Spin v-if="state.isLoading"> Loading... </Spin>
	<RouterView v-else />
</template>

<style lang="less" src="./styles/App.less"></style>
