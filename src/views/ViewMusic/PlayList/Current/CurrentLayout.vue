<template>
	<CurrentMobile v-if="State_App.isCurrentClientMobile" />
	<CurrentPc v-else />
</template>
<script lang="jsx">
import { defineComponent, defineAsyncComponent, reactive, watch } from "vue";
import { State_App } from "@ventose/state/State_App";
import { Actions_Music, State_Music } from "@ventose/state/State_Music";
import { defItem, _ } from "@ventose/ui";
import { preprocessRecord } from "@ventose/utils/common";

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

export const setItems = _.debounce(function (search) {
	let allItems = _.map(State_Music.playlist, preprocessRecord);
	if (search) {
		allItems = _.filter(allItems, record => {
			const isOk = prop => String(record[prop]).includes(search);
			return isOk("title") || isOk("artist") || isOk("album");
		});
	}
	state.configs.items = allItems;
}, 600);

/* 播放列表长度变化 */
watch(
	() => State_Music.playlist.length,
	() => {
		setItems(state.configs.search.value);
	},
	{ immediate: true }
);
/*  */
watch(() => state.configs.search.value, setItems, { immediate: true });

export const btnClear = {
	text: "移除所有",
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
