export const EVENT_TYPE = {
	update: "update",
	change: "change",
	input: "input",
	blur: "blur",
	focus: "focus",
};
export const checkXItem = async (xItemConfigs, handlerResult) => {
	try {
		const {
			rules,
			prop
		} = xItemConfigs;
		for (let i = 0; i < rules.length; i++) {
			const rule = rules[i];
			const trigger = rule.trigger;
			/* isFail */
			let isFail = await (async () => {
				await _.sleep(1000);
				const needValidate = _.some(trigger, eventName => xItemConfigs.validate.triggerEventsObj[eventName]);
				if (needValidate) {
					return await rule.validator(xItemConfigs.value);
				}
				return false;
			})();
			/* 但凡有一个校验不通过就可以停止循环返回结果了 */
			if (isFail) {
				handlerResult({
					[prop]: rule.msg
				});
				return;
			}
		}
		handlerResult({
			[prop]: ""
		});
		return;
	} catch (error) {
		console.error(error);
	} finally {
		xItemConfigs.validate.triggerEventsObj = {};
	}
};