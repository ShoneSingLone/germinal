<script setup lang="jsx">
import { Table } from "ant-design-vue";
import { computed } from "vue";
import { _ } from "../loadCommonUtil";

const props = defineProps({
	configs: {
		type: Object,
		default() {
			return {};
		}
	}
});

const cptColumnsOrder = computed(() => {
	if (props.configs.columns_order) {
		return props.configs.columns_order;
	} else {
		return _.map(props.configs.columns, (i, prop) => prop);
	}
});

const cptColumns = computed(() => {
	return _.map(cptColumnsOrder.value, prop => props.configs.columns[prop]);
});

const cptRenderOptions = computed(() => {
	if (props.configs.renderOptions) {
		return props.configs.renderOptions;
	} else {
		return null;
	}
});
</script>

<template>
	<xRender :render="cptRenderOptions" />
	<Table :dataSource="props.configs.dataSource" :columns="cptColumns" />
</template>

<style>
.table-options {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	padding: 10px 0;
}
</style>
