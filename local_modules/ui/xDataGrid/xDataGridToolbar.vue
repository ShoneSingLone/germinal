<script lang="jsx">
import { defineComponent } from "vue";
import { _ } from "../loadCommonUtil";
import xColFilter from "./xColFilter.vue";

export default defineComponent({
	name: "xDataGridToolbar",
	components: { xColFilter },
	props: ["configs"],
	computed: {
		Cpt_btn_query() {
			return {
				preset: "query",
				onClick: async () => {
					if (this.configs.queryTableList) {
						await this.configs.queryTableList({
							pagination: { page: 1 }
						});
					}
				}
			};
		},
		Cpt_btn_refresh() {
			return {
				preset: "refresh",
				onClick: async () => {
					if (this.configs.queryTableList) {
						await this.configs.queryTableList();
					}
				}
			};
		},
		Cpt_isShowQuery() {
			return !this.configs.isHideQuery;
		},
		Cpt_isShowRefresh() {
			return !this.configs.isHideRefresh;
		},
		Cpt_isShowFilter() {
			if (this.configs.isGroupingColumns) {
				return false;
			}
			if (this.configs.isHideFilter) {
				return false;
			}
			return true;
		}
	}
});
</script>

<template>
	<div class="table-options">
		<div class="table-option-left flex flex1">
			<slot />
		</div>
		<div class="table-filter flex">
			<xButton :configs="Cpt_btn_query" v-if="Cpt_isShowQuery" />
			<xGap l="4" />
			<xButton :configs="Cpt_btn_refresh" v-if="Cpt_isShowRefresh" />
			<xGap l="4" />
			<xColFilter :configs="configs" v-if="Cpt_isShowFilter" />
		</div>
	</div>
</template>
