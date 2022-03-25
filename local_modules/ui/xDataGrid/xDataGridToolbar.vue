<script setup lang="jsx">
import { computed } from "vue";
import { _ } from "../loadCommonUtil";
import { SettingOutlined } from "@ant-design/icons-vue";
import { filterColIsShow, static_word } from "./common";
import xColFilter from "./xColFilter.vue";

const props = defineProps({
	configs: {
		type: Object,
		default() {
			return {};
		}
	}
});

const Cpt_btn_query = computed(() => {
	return {
		preset: "query",
		async onClick() {
			if (props.configs.queryTableList) {
				await props.configs.queryTableList({
					pagination: { page: 1 }
				});
			}
		}
	};
});
const Cpt_btn_refresh = computed(() => {
	return {
		preset: "refresh",
		async onClick() {
			if (props.configs.queryTableList) {
				await props.configs.queryTableList();
			}
		}
	};
});
</script>

<template>
	<div class="table-options">
		<div class="table-option-left flex flex1">
			<slot></slot>
		</div>
		<div class="table-filter flex">
			<xButton :configs="Cpt_btn_query" />
			<xGap l="4" />
			<xButton :configs="Cpt_btn_refresh" />
			<xGap l="4" />
			<xColFilter :configs="props.configs" />
		</div>
	</div>
</template>
