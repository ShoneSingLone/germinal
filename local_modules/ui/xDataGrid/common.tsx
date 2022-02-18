import { t_buttonOptions } from "../xButton/xButton";
import { _ } from "../loadCommonUtil";
import { ColumnProps } from "ant-design-vue/es/table";
import { lStorage } from "../tools/storage.js";

/*ui 内部使用*/
export const static_word = {
	operation: "operation"
};
export type t_col = {
	prop: string;
	label: string;
	children?: t_col[];
};

export type t_dataGridOptions = {
	/*ant的table属性*/
	antTableProperty: object;
	/*是否隐藏列过滤器*/
	isHideFilter: boolean;
	/*是否隐藏分页*/
	isHidePagination: boolean;
	pagination: {
		page: number;
		size: number;
		total: number;
	};
	/*分页page size 改变之后的回调，参数是pagination*/
	onPaginationChange: Function;
	/*里面查询区域的配置信息，可以在renderOptions作为参数传入*/
	optionsConfigs: {
		/*xItem value 集合*/
		data: object;
		/*xItem form 配置项*/
		dataXItem: object;
	};
	/**/
	renderOptions: (options: t_dataGridOptions) => JSX.Element;
	dataSource: any[];
	/*如果是分组，filter无效
	 * columns作为数组，与antdv官方文档参数保持一致
	 * */
	isGroupingColumns: boolean;
	/*列信息*/
	columns: { [p: string]: t_col };
};

export function defDataGridOption(options: t_dataGridOptions) {
	return options;
}

export function defPagination(pageNum = 1, pageSize = 10, pageTotal = 0) {
	const { page, size, total } = lStorage.appConfigs.pagination;
	return {
		[page]: pageNum || 1,
		[size]: pageSize || 10,
		[total]: pageTotal || 0
	};
}

export function defCol(options: t_col) {
	return {
		[options.prop]: {
			...options,
			key: options.prop,
			title: options.label,
			dataIndex: options.prop
		}
	};
}

/*antd 的配置项*/
export function defColAnt(options: ColumnProps) {
	return {
		...options,
		prop: options.key,
		dataIndex: options.key
	};
}

export function defColActions(options: {
	renderCell: (args: {
		column: object;
		index: number;
		record: any;
		text: any;
		value: any;
	}) => JSX.Element;
}) {
	return {
		[static_word.operation]: _.merge(
			{
				title: "操作",
				key: static_word.operation,
				prop: static_word.operation,
				fixed: "right"
			},
			options
		)
	};
}

export function defColActionsBtnlist(options: {
	fold: number;
	btns: t_buttonOptions[];
}) {
	const { fold = 3, btns = [] } = options;
	const [always, more] = (() => {
		if (btns.length > fold) {
			return [btns.slice(0, fold - 1), btns.slice(fold - 1)];
		} else {
			return [btns, []];
		}
	})();
	return (
		<div class="flex middle">
			<xGap l={4} />
			{_.map(always, btn => {
				const configs = _.merge({ type: "link", size: "small" }, btn);
				return (
					<>
						<xButton configs={configs} />
						<xGap l={4} />
					</>
				);
			})}
			{(() => {
				if (more.length === 0) {
					return null;
				}
				return (
					<>
						<Dropdown
							v-slots={{
								default: () => {
									return <xButton configs={{ type: "link" }}>更多</xButton>;
								},
								overlay: () => {
									return (
										<>
											<Menu>
												{_.map(more, btn => {
													const configs = _.merge(
														{ type: "link", size: "small" },
														btn
													);
													return (
														<MenuItem key={btn.text}>
															<xButton configs={configs} />
														</MenuItem>
													);
												})}
											</Menu>
										</>
									);
								}
							}}
						/>
						<xGap l={4} />
					</>
				);
			})()}
		</div>
	);
}

export function filterColIsShow(isShow, prop) {
	if (_.isBoolean(isShow)) {
		return isShow;
	} else {
		return true;
	}
}

/***
 * 设置xDataGrid的列表数据和总数
 * @param StateBind
 * @param data
 * @param total
 */
export function setDataGridInfo(StateBind, data, total) {
	StateBind.dataSource = data;
	setPagination(StateBind, { total });
}

export function setPagination(StateTable, pagination /*{page, size, total}*/) {
	const PAGINATION_MAP = lStorage.appConfigs.pagination;
	_.each(pagination, (value, prop) => {
		StateTable.pagination[PAGINATION_MAP[prop]] = value;
	});
}
