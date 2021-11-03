export const EVENT_TYPE = {
	update: "update",
	change: "change",
	input: "input",
	blur: "blur",
	focus: "focus",
};
export const checkXItem = async (xItemConfigs) => {
	const {
		value,
		rules,
		prop
	} = xItemConfigs;

	for (let i = 0; i < rules.length; i++) {
		const rule = rules[i];
		const trigger = rule.trigger;
		let isFail = await (async () => {
			await _.sleep(1000);
			try {
				const needValidate = _.some(trigger, event => xItemConfigs.validate.queue.includes(event));
				if (needValidate) {
					return await rule.validator(value);
				}
				debugger;
				return false;
			} catch (error) {
				console.error(error);
			} finally {
				debugger;
				xItemConfigs.validate.queue = [];
			}
		})();

		if (isFail) {
			return {
				[prop]: rule.msg
			};
		}
	}

	console.timeEnd("checkXItem");
	return {
		[prop]: ""
	};

};