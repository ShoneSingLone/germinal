export type t_col = {
	prop: string;
	label: string;
};

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
