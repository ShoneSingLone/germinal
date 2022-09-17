<script>
/*https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup*/
import { defineComponent } from "vue";
import { _ } from "@ventose/ui";
import { Actions_App } from "@ventose/state/State_App";
import { setDocumentTitle } from "@ventose/ui";

export default defineComponent({
	data() {
		return {
			userAgent: navigator.userAgent,
			isLoading: true,
			State_App: {}
		};
	},
	async mounted() {
		/* 做一些初始化的处理，包括进入系统加载对应的字典 */
		const State_App = await Actions_App.initAppConfigs();
		this.State_App = State_App;
		/* HTML title */
		setDocumentTitle(State_App.configs.title);
		/* 菜单可以从API获取 */
		const { MENUS_ALL_DEFAULT_ROUTES } = await import("@ventose/router/routes");
		State_App.menuTree = MENUS_ALL_DEFAULT_ROUTES;
		this.isLoading = false;
	}
});
</script>
<template>
	<aSpin v-if="isLoading"> Loading... </aSpin>
	<RouterView v-else />
</template>

<style lang="less" src="./styles/App.less"></style>
