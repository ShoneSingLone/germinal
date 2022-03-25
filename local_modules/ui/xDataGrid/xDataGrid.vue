<script setup lang="jsx">
import { Table } from "ant-design-vue";
import { computed, onMounted, reactive } from "vue";
import { _ } from "../loadCommonUtil";
import xColFilter from "./xColFilter.vue";
import { filterColIsShow } from "./common";
import xPagination from "./xPagination.vue";

const props = defineProps({
	configs: {
		type: Object,
		default() {
			return {};
		}
	}
});

const State = reactive({ id: _.genId("xDataGrid") });

onMounted(() => {
	if (props.configs.onMounted) {
		props.configs.onMounted({ id: State.id });
	}
});

/*列顺序*/
/* 如果有排序的需求 */
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
	/*如果分组，默认的filter无效，需要自己实现*/
	if (props.configs.isGroupingColumns) {
		return props.configs.columns;
	}
	let columns = null;
	columns = _.map(Cpt_ColumnsOrder.value, prop =>
		_.find(props.configs.columns, { prop })
	);
	columns = _.filter(columns, i => filterColIsShow(i?.isShow, i?.prop));
	return columns;
});

/*表格按钮选项*/
const Cpt_RenderOptions = computed(() => {
	const leftOptions = (() => {
		if (props.configs.renderOptions) {
			return props.configs.renderOptions(props.configs);
		} else {
			return null;
		}
	})();

	const rightOptions = (() => {
		if (props.configs.isHideFilter || props.configs.isGroupingColumns) {
			return null;
		}
		return <xColFilter configs={props.configs} />;
	})();
	return () => (
		<div class="table-options">
			<div className="table-option-left flex flex1">{leftOptions}</div>
			<div className="table-filter">{rightOptions}</div>
		</div>
	);
});

const Cpt_AntTableProperty = computed(() => {
	if (props.configs.antTableProperty) {
		return props.configs.antTableProperty;
	} else {
		return {};
	}
});

/*表格*/
const Cpt_RenderTable = computed(() => {
	if (props.configs.renderTable) {
		return props.configs.renderTable;
	} else {
		return () => (
			<Table
				loading={props.configs.isLoading}
				dataSource={props.configs.dataSource}
				columns={Cpt_Columns.value}
				scroll={{ x: 1500 }}
				pagination={false}
				{...Cpt_AntTableProperty.value}
				v-slots={{
					bodyCell: args => {
						const { column } = args;
						if (column && column.renderCell) {
							/* column index record text value */
							const vNode = column.renderCell(args);
							/*fix:返回null会判断为没有renderCell处理，直接取prop字段的数据*/
							if (_.isNull(vNode) || _.isUndefined(vNode)) {
								return "";
							}
							return vNode;
						}
					}
				}}
			/>
		);
	}
});

const Methods = {
	handlePaginationChange: async pagination => {
		props.configs.isLoading = true;
		await props.configs.onPaginationChange(pagination);
		props.configs.isLoading = false;
	}
};
</script>

<template>
	<div :id="State.id">
		<xRender :render="Cpt_RenderOptions" />
		<xRender :render="Cpt_RenderTable" />
		<xPagination
			v-if="!props.configs.isHidePagination"
			class="table-pagination"
			:pagination="props.configs.pagination"
			:on-pagination-change="Methods.handlePaginationChange" />
	</div>
</template>

<style>
.table-options {
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	padding: 10px 0;
}

.table-filter {
	margin-left: 4px;
}

.table-pagination {
	padding: 10px 0;
}
</style>
