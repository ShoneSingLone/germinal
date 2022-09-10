<template>
	<CachedMobile v-if="State_App.isCurrentClientMobile" />
	<CachedPc v-else />
</template>
<script lang="jsx">
import { defineComponent, defineAsyncComponent } from "vue";
import { State_App } from "@ventose/state/State_App";

export default defineComponent({
	components: {
		CachedMobile: defineAsyncComponent(() => import("./CachedMobile.vue")),
		CachedPc: defineAsyncComponent(() => import("./CachedPc.vue"))
	},
	setup() {
		return {
			State_App
		};
	}
});
</script>
