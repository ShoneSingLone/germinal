<script setup lang="jsx">
import { Table } from "ant-design-vue";

const props = defineProps({
	configs: {
		type: Object,
		default() {
			return {};
		}
	}
});
</script>

<template>
	<Table :dataSource="props.dataSource" :columns="props.columns" />
</template>
