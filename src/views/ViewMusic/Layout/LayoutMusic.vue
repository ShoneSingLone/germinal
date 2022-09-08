<template>
	<!-- <div :style="State_App.test">
    {{ State_App.count }}
  </div> -->
	<LayoutMusicMobile v-if="State_App.isCurrentClientMobile" />
	<LayoutMusicPc v-else />
</template>
<script lang="jsx">
import { defineComponent, defineAsyncComponent } from "vue";
import { State_App } from "@ventose/state/State_App";
/* 
State_App.count = 1;
State_App.test = { position: "fixed", top: 0, "zIndex": 1 };
setInterval(() => {
	console.log(State_App.count++);
	if (State_App.count > 500) {
		State_App.count = 1;
	}
	State_App.test.top = `${State_App.count}px`;
}, 30); */

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
