<template>
	<PlayerMobile v-if="State_App.isCurrentClientMobile" />
	<PlayerPc v-else />
</template>
<script lang="jsx">
import { defineComponent, defineAsyncComponent } from "vue";
import { State_App } from "lsrc/state/State_App";

export default defineComponent({
	components: {
		PlayerMobile: defineAsyncComponent(() =>
			import("./PlayerMobile/PlayerMobile.vue")
		),
		PlayerPc: defineAsyncComponent(() => import("./PlayerPc/PlayerPc.vue"))
	},
	setup() {
		return {
			State_App
		};
	}
});
</script>
;
