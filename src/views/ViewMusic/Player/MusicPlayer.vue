<template>
	<PlayerMobile
		v-if="State_App.isCurrentClientMobile"
		id="MusicPlayerWrapper" />
	<PlayerPc v-else id="MusicPlayerWrapper" />
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

<style lang="less">
#MusicPlayerWrapper {
	width: 100%;

	.ant-slider-handle,
	.ant-slider-track {
		// transition: all 1s ease-in-out;
	}
}
</style>
