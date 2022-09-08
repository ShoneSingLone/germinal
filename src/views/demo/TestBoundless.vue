<script>
import { defineComponent, markRaw } from "vue";
import { _ } from "lsrc/ui";

export default defineComponent({
	data() {
		const vm = this;
		return {
			currentComponent: "div",
			configs_btn: {
				preset: "query",
				async onClick() {
					const component = await _.asyncImportSFC(
						`/boundless/business/App/demo/demo.vue`
					);
					vm.currentComponent = markRaw(component);
				}
			}
		};
	}
});
</script>

<template>
	<xButton :configs="configs_btn" />
	<component :is="currentComponent" />
</template>
