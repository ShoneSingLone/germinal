<template>
	<LayoutMusicMobile v-if="State_App.isCurrentClientMobile" />
	<LayoutMusicPc v-else />
</template>
<script lang="jsx">
import { defineComponent, defineAsyncComponent } from "vue";
import { State_App } from "lsrc/state/State_App";

export default defineComponent({
	components: {
		LayoutMusicMobile: defineAsyncComponent(() =>
			import("./LayoutMusicMobile.vue")
		),
		LayoutMusicPc: defineAsyncComponent(() => import("./LayoutMusicPc.vue"))
	},
	setup() {
		return {
			State_App
		};
	}
});
</script>
