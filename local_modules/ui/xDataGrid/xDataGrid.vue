<script lang="jsx">
import { Table } from "ant-design-vue";
import { computed, defineComponent, onMounted, reactive } from "vue";
import { _ } from "../loadCommonUtil";
import xColFilter from "./xColFilter.vue";
import { filterColIsShow } from "./common";
import xPagination from "./xPagination.vue";

export default defineComponent({
	name: "XDataGrid",
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
	computed: {
		/*列*/
		Cpt_Columns() {
			/*如果分组，默认的filter无效，需要自己实现*/
			if (this.configs.isGroupingColumns) {
				return this.configs.columns;
			}
			let columns = null;
			columns = _.map(this.Cpt_ColumnsOrder, prop =>
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
		Cpt_VNodeTable() {
			if (this.configs.renderTable) {
				return this.configs.renderTable({ vm: this });
			} else {
				const slots = {
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
				};
				return (
					<Table
						loading={this.configs.isLoading}
						dataSource={this.configs.dataSource}
						columns={this.Cpt_Columns}
						scroll={{ x: 1500 }}
						pagination={false}
						{...this.Cpt_AntTableProperty}
						v-slots={slots}
					/>
				);
			}
		},
		Cpt_VNodePagination() {
			if (this.configs.isHidePagination) {
				return null;
			}
			return (
				<xPagination
					class="table-pagination"
					pagination={this.configs.pagination}
					onPaginationChange={this.handlePaginationChange}
				/>
			);
		}
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
	render() {
		return (
			<div id={this.State.id}>
				{this.Cpt_VNodeTable}
				{this.Cpt_VNodePagination}
			</div>
		);
	}
});
</script>

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
