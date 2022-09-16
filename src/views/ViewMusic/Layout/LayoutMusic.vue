<template>
	<!-- <div :style="State_App.test">
    {{ State_App.count }}
  </div> -->
	<LayoutMusicMobile v-if="State_App.isCurrentClientMobile" class="music-app" />
	<LayoutMusicPc v-else class="music-app" />
</template>
<script lang="jsx">
import { defineComponent, defineAsyncComponent } from "vue";
import { State_App } from "@ventose/state/State_App";

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

<style lang="less">
.music-app {
	.title {
		font-weight: 700;
		text-shadow: 1px 1px rgba(7, 6, 100, 0.1);
		margin-right: 4px;
	}
}
</style>
