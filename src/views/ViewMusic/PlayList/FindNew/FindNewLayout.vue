<template>
	<FindNewMobile v-if="State_App.isCurrentClientMobile" />
	<FindNewPc v-else />
</template>
<script lang="jsx">
import { defineComponent, defineAsyncComponent } from "vue";
import { State_App } from "@ventose/state/State_App";
import { Actions_Music } from "@ventose/state/State_Music";
import { UI, _ } from "@ventose/ui";

(async () => {
	const index = UI.layer.loading();
	try {
		await Actions_Music.updatePersonalizedNewSong();
	} catch (error) {
		console.error(error);
	} finally {
		UI.layer.loading(index);
	}
})();

export default defineComponent({
	components: {
		FindNewMobile: defineAsyncComponent(() => import("./FindNewMobile.vue")),
		FindNewPc: defineAsyncComponent(() => import("./FindNewPc.vue"))
	},
	setup() {
		return {
			State_App
		};
	},
	async mounted() {}
});
</script>
