<script setup>
/*https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup*/
import { onMounted, reactive } from "vue";
import { _ } from "@ventose/ui";
import { StateAppActions } from "lsrc/state/StateApp";
import { setDocumentTitle } from "@ventose/ui";

const state = reactive({ isLoading: true });

onMounted(async () => {
	/* 做一些初始化的处理，包括进入系统加载对应的字典 */
	const StateApp = await StateAppActions.initAppConfigs();
	/* HTML title */
	setDocumentTitle(StateApp.configs.title);
	/* 菜单可以从API获取 */
	const { menuTree } = await import("lsrc/router/routes");
	StateApp.menuTree = menuTree;
	state.isLoading = false;
});
</script>
<template>
	<Spin v-if="state.isLoading"> Loading... </Spin>
	<RouterView v-else />
</template>

<style lang="less" src="./styles/App.less"></style>
