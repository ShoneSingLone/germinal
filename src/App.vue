<script setup>
/*https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup*/
import { onMounted, reactive } from "vue";
import { _ } from "@ventose/ui";
import { Actions_App } from "lsrc/state/State_App";
import { setDocumentTitle } from "@ventose/ui";

const state = reactive({ isLoading: true });

onMounted(async () => {
	/* 做一些初始化的处理，包括进入系统加载对应的字典 */
	const State_App = await Actions_App.initAppConfigs();
	/* HTML title */
	setDocumentTitle(State_App.configs.title);
	/* 菜单可以从API获取 */
	const { menuTree } = await import("lsrc/router/routes");
	const { menuRoutesDelay } = await import("lsrc/router/router");
	State_App.menuTree = menuRoutesDelay;
	state.isLoading = false;
});
</script>
<template>
	<Spin v-if="state.isLoading"> Loading... </Spin>
	<RouterView v-else />
</template>

<style lang="less" src="./styles/App.less"></style>
