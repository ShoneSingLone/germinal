<script setup lang="jsx">
import { computed } from "vue";
import { _ } from "../loadCommonUtil";
import { Pagination } from "ant-design-vue";
import { setPagination } from "./common";
import { lStorage } from "../tools/storage";

const props = defineProps({
	onPaginationChange: {
		type: Function,
		default: false
	},
	pagination: {
		type: Object,
		default() {
			return {};
		}
	}
});

const pageSizeOptions = ["10", "20", "30"];
const onShowSizeChange = _.debounce(function (page, size) {
	setPagination(props, { page, size });
	if (props.onPaginationChange) {
		props.onPaginationChange(props.pagination);
	}
}, 30);
const { page, size, total } = lStorage.appConfigs.pagination;
</script>

<template>
	<Pagination
		v-model:current="props.pagination[page]"
		:page-size-options="pageSizeOptions"
		:total="props.pagination[total]"
		:page-size="props.pagination[size]"
		show-size-changer
		:show-total="total => `总共 ${total} 条`"
		@showSizeChange="onShowSizeChange"
		@change="onShowSizeChange">
		<template #buildOptionText="props">
			<span>{{ props.value }}条/页</span>
		</template>
	</Pagination>
</template>
