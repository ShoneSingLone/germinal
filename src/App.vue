<script setup>
/*https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup*/
import { onMounted, reactive } from "vue";
import { _ } from "@ventose/ui";
import { Actions_App } from "lsrc/state/State_App";
import { setDocumentTitle, Cpt_UI_locale } from "@ventose/ui";

const state = reactive({ isLoading: true });

onMounted(async () => {
	/* 做一些初始化的处理，包括进入系统加载对应的字典 */
	const State_App = await Actions_App.initAppConfigs();
	/* HTML title */
	setDocumentTitle(State_App.configs.title);
	/* 菜单可以从API获取 */
	const { MENUS_ALL_DEFAULT_ROUTES } = await import("lsrc/router/routes");
	State_App.menuTree = MENUS_ALL_DEFAULT_ROUTES;
	state.isLoading = false;
});
</script>
<template>
	<aSpin v-if="state.isLoading">Loading...</aSpin>
	<aConfigProvider v-else :locale="Cpt_UI_locale.value">
		<RouterView />
	</aConfigProvider>
</template>

<style lang="less" src="./styles/App.less"></style>
