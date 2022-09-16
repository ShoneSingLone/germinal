<template>
	<FindNewMobile v-if="State_App.isCurrentClientMobile" />
	<FindNewPc v-else />
</template>
<script lang="jsx">
import { defineComponent, reactive, defineAsyncComponent } from "vue";
import { State_App } from "@ventose/state/State_App";
import { Actions_Music } from "@ventose/state/State_Music";
import { UI, _, defItem } from "@ventose/ui";

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

export const state = reactive({
	configs: {
		...defItem({
			value: "",
			prop: "search",
			placeholder: "标题、歌手、所属专辑",
			allowClear: true
		}),
		items: []
	}
});

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
