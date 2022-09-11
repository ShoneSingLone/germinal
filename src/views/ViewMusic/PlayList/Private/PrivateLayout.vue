<template>
	<PrivateMobile v-if="State_App.isCurrentClientMobile" />
	<PrivatePc v-else />
</template>
<script lang="jsx">
import { defineComponent, defineAsyncComponent } from "vue";
import { State_App } from "@ventose/state/State_App";

export default defineComponent({
	components: {
		PrivateMobile: defineAsyncComponent(() => import("./PrivateMobile.vue")),
		PrivatePc: defineAsyncComponent(() => import("./PrivatePc.vue"))
	},
	setup() {
		return {
			State_App
		};
	}
});
</script>
