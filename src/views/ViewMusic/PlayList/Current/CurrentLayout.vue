<template>
	<CurrentMobile v-if="State_App.isCurrentClientMobile" />
	<CurrentPc v-else />
</template>
<script lang="jsx">
import { defineComponent, defineAsyncComponent, reactive } from "vue";
import { State_App } from "@ventose/state/State_App";
import { Actions_Music } from "@ventose/state/State_Music";
import { defItem, _ } from "@ventose/ui";

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

export const btnClear = {
	text: "移除",
	async onClick() {
		if (state.configs.search.value) {
			_.each(state.configs.items, Actions_Music.removeSongFromPlaylist);
		} else {
			Actions_Music.clearPlaylist();
		}
	}
};

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
