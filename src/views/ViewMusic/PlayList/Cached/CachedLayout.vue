<template>
	<CachedMobile v-if="State_App.isCurrentClientMobile" />
	<CachedPc v-else />
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
	text: "移除所有",
	async onClick() {
		await Actions_Music.delCached(
			_.map(state.configs.items, i => `audio_${i.id}`)
		);
	}
};

export default defineComponent({
	components: {
		CachedMobile: defineAsyncComponent(() => import("./CachedMobile.vue")),
		CachedPc: defineAsyncComponent(() => import("./CachedPc.vue"))
	},
	setup() {
		return {
			State_App
		};
	}
});
</script>
