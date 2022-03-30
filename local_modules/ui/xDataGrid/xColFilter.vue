<script lang="jsx">
import { defineComponent } from "vue";
import { _ } from "../loadCommonUtil";
import { SettingOutlined } from "@ant-design/icons-vue";
import { filterColIsShow } from "./common";

export default defineComponent({
	name: "xColFilter",
	components: {
		SettingOutlined
	},
	props: {
		configs: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	methods: {
		handleChecked(col) {
			const target = _.find(props.configs.columns, { key: col.key });
			target.isShow = _.isBoolean(target.isShow) ? !target.isShow : false;
		}
	},
	computed: {
		/*列顺序*/
		Cpt_ColumnsOrder() {
			const order = (() => {
				if (props.configs.columns_order) {
					return props.configs.columns_order;
				} else {
					return _.map(props.configs.columns, i => i.prop);
				}
			})();
			return _.filter(order, i => !!i);
		},

		/*列*/
		Cpt_Columns() {
			return _.map(Cpt_ColumnsOrder.value, prop =>
				_.find(props.configs.columns, { prop })
			);
		},

		checkedList() {
			return _.filter(Cpt_ColumnsOrder.value, prop => {
				const { isShow } = props.configs.columns[prop];
				return filterColIsShow(isShow, prop);
			});
		}
	}
});
</script>

<template>
	<Popover placement="leftTop" trigger="click">
		<template #content>
			<p v-for="col in Cpt_Columns" :key="col.key">
				<Checkbox
					:checked="checkedList.includes(col.key)"
					@change="handleChecked(col)"
					>{{ col.title }}</Checkbox
				>
			</p>
		</template>
		<aButton>
			<template #icon>
				<SettingOutlined />
			</template>
		</aButton>
	</Popover>
</template>
