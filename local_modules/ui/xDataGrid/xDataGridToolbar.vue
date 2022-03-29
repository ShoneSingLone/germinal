<script lang="jsx">
import { defineComponent } from "vue";
import { _ } from "../loadCommonUtil";
import xColFilter from "./xColFilter.vue";

export default defineComponent({
	components: { xColFilter },
	props: ["configs"],
	computed: {
		Cpt_btn_query() {
			return {
				preset: "query",
				async onClick() {
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
				async onClick() {
					if (props.configs.queryTableList) {
						await props.configs.queryTableList();
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
			return !this.configs.isHideFilter;
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
			<xColFilter :configs="props.configs" v-if="Cpt_isShowFilter" />
		</div>
	</div>
</template>
