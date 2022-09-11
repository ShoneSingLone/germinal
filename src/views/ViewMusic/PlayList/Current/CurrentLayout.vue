<template>
	<CurrentMobile v-if="State_App.isCurrentClientMobile" />
	<CurrentPc v-else />
</template>
<script lang="jsx">
import { defineComponent, defineAsyncComponent } from "vue";
import { State_App } from "@ventose/state/State_App";

export default defineComponent({
	components: {
		CurrentMobile: defineAsyncComponent(() => import("./CurrentMobile.vue")),
		CurrentPc: defineAsyncComponent(() => import("./CurrentPc.vue"))
	},
	setup() {
		return {
			State_App
		};
	}
});
</script>
