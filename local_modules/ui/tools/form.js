import { _ } from "../loadCommonUtil";

export const pickValueFrom = configs => {
	return _.reduce(
		configs,
		(target, config, prop) => {
			target[prop] = config.value;
			return target;
		},
		{}
	);
};

/*重置reactive数据*/
export const resetState_Value = (state, initState) => {
	_.each(initState, (value, prop) => {
		state[prop] = value;
	});
	return state;
};
