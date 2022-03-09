<script setup lang="jsx">
import { computed } from "vue";
import { _ } from "../loadCommonUtil";
import { SettingOutlined } from "@ant-design/icons-vue";
import { filterColIsShow, static_word } from "./common";

const props = defineProps({
	configs: {
		type: Object,
		default() {
			return {};
		}
	}
});

/*列顺序*/
const Cpt_ColumnsOrder = computed(() => {
	const order = (() => {
		if (props.configs.columns_order) {
			return props.configs.columns_order;
		} else {
			return _.map(props.configs.columns, i => i.prop);
		}
	})();
	return _.filter(order, i => !!i);
});

/*列*/
const Cpt_Columns = computed(() => {
	return _.map(Cpt_ColumnsOrder.value, prop =>
		_.find(props.configs.columns, { prop })
	);
});

const checkedList = computed(() => {
	return _.filter(Cpt_ColumnsOrder.value, prop => {
		const { isShow } = props.configs.columns[prop];
		return filterColIsShow(isShow, prop);
	});
});

const handleChecked = col => {
	const target = _.find(props.configs.columns, { key: col.key });
	target.isShow = _.isBoolean(target.isShow) ? !target.isShow : false;
};
</script>

<template>
	<Popover placement="leftBottom" trigger="click">
		<template #content>
			<p v-for="col in Cpt_Columns" :key="col.key">
				<Checkbox
					:checked="checkedList.includes(col.key)"
					@change="handleChecked(col)"
					>{{ col.title }}</Checkbox
				>
			</p>
		</template>
		<Button>
			<template #icon>
				<SettingOutlined />
			</template>
		</Button>
	</Popover>
</template>
