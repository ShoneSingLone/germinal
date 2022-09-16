<template>
	<PrivateMobile v-if="State_App.isCurrentClientMobile" />
	<PrivatePc v-else />
</template>
<script lang="jsx">
import { defineComponent, defineAsyncComponent, reactive } from "vue";
import { State_App } from "@ventose/state/State_App";
import { defItem } from "@ventose/ui";

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
		PrivateMobile: defineAsyncComponent(() => import("./PrivateMobile.vue")),
		PrivatePc: defineAsyncComponent(() => import("./PrivatePc.vue"))
	},
	setup() {
		return {
			State_App
		};
	}
});
</script>
