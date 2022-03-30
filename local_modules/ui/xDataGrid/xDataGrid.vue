<script lang="jsx">
import { Table } from "ant-design-vue";
import { computed, defineComponent, onMounted, reactive } from "vue";
import { _ } from "../loadCommonUtil";
import xColFilter from "./xColFilter.vue";
import { filterColIsShow } from "./common";
import xPagination from "./xPagination.vue";

export default defineComponent({
	name: "xDataGrid",
	props: {
		configs: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data() {
		return {
			State: { id: _.genId("xDataGrid") }
		};
	},
	mounted() {
		if (this.configs.onMounted) {
			this.configs.onMounted({ id: this.State.id });
		}
	},
	methods: {
		async handlePaginationChange(pagination) {
			this.configs.isLoading = true;
			await this.configs.onPaginationChange(pagination);
			this.configs.isLoading = false;
		}
	},
	computed: {
		/*表格按钮选项*/
		Cpt_RenderOptions() {
			const leftOptions = (() => {
				if (this.configs.renderOptions) {
					return this.configs.renderOptions(this.configs);
				} else {
					return null;
				}
			})();

			const rightOptions = (() => {
				if (this.configs.isHideFilter || this.configs.isGroupingColumns) {
					return null;
				}
				/* tableConfigs */
				return <xColFilter configs={this.configs} />;
			})();
			return () => (
				<div class="table-options">
					<div className="table-option-left flex flex1">{leftOptions}</div>
					<div className="table-filter">{rightOptions}</div>
				</div>
			);
		},
		/*列*/
		Cpt_Columns() {
			/*如果分组，默认的filter无效，需要自己实现*/
			if (this.configs.isGroupingColumns) {
				return this.configs.columns;
			}
			let columns = null;
			columns = _.map(this.Cpt_ColumnsOrder.value, prop =>
				_.find(this.configs.columns, { prop })
			);
			columns = _.filter(columns, i => filterColIsShow(i?.isShow, i?.prop));
			return columns;
		},
		/*列顺序 TODO:如果有排序的需求 */
		Cpt_ColumnsOrder() {
			const order = (() => {
				if (this.configs.columns_order) {
					return this.configs.columns_order;
				} else {
					return _.map(this.configs.columns, i => i.prop);
				}
			})();
			return _.filter(order, i => !!i);
		},

		Cpt_AntTableProperty() {
			if (this.configs.antTableProperty) {
				return this.configs.antTableProperty;
			} else {
				return {};
			}
		},
		/*表格*/
		Cpt_RenderTable() {
			if (this.configs.renderTable) {
				return this.configs.renderTable;
			} else {
				return () => (
					<Table
						loading={this.configs.isLoading}
						dataSource={this.configs.dataSource}
						columns={this.Cpt_Columns.value}
						scroll={{ x: 1500 }}
						pagination={false}
						{...this.Cpt_AntTableProperty.value}
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
		}
	}
});
</script>

<template>
	<div :id="State.id">
		<xRender :render="Cpt_RenderOptions" />
		<xRender :render="Cpt_RenderTable" />
		<xPagination
			v-if="!configs.isHidePagination"
			class="table-pagination"
			:pagination="configs.pagination"
			:on-pagination-change="handlePaginationChange" />
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
