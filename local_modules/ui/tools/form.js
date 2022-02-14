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

/*����reactive����*/
export const resetStateValue = (state, initState) => {
	_.each(initState, (value, prop) => {
		state[prop] = value;
	});
	return state;
};
