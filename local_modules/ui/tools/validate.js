import { _ } from "../loadCommonUtil";

export const EVENT_TYPE = {
	validateForm: "validateForm",
	update: "update",
	change: "change",
	input: "input",
	blur: "blur",
	focus: "focus"
};

export const TIPS_TYPE = {
	success: "success",
	error: "error"
};

/**
 * 单独调用校验表单的方法
 * 需要提供 configsForm 包含各个xItem configs
 * 有value 有rules => configs有validate属性（判断有rules就动态添加validate方法）
 * @param {*} configsForm
 * @returns
 */
export async function validateForm(configsForm) {
	let results = await Promise.all(
		_.map(
			configsForm,
			(configs, prop) =>
				new Promise(resolve => {
					if (configs.validate) {
						configs.validate.formCallBack = result => {
							delete configs.validate.formCallBack;
							resolve(result);
						};
						/*触发方式是校验表单，将无视其他trigger规则，权重最大*/
						configs.validate(EVENT_TYPE.validateForm);
					}
				})
		)
	);
	results = results.filter(res => res[0] && res[1]);
	return results;
}

/**
 * 没有错误信息则校验通过
 * @param {*} res
 * @returns
 */
validateForm.allWasWell = res => {
	return _.isArray(res) && res.length === 0;
};

export const checkXItem = async (xItemConfigs, handlerResult) => {
	xItemConfigs.checking = true;
	try {
		const { rules, prop } = xItemConfigs;
		const result = await (async () => {
			let dontCheck = 0;
			for (let i = 0; i < rules.length; i++) {
				const rule = rules[i];
				const trigger = rule.trigger || [];
				/* isFail */
				let isFail = await (async () => {
					/*如果是validateForm 无视 trigger 限定的事件列表，否则根据trigger列表 */
					let trigBy;
					const needValidate = (() => {
						/*is ValidateForm*/
						if (
							xItemConfigs.validate.triggerEventsObj[EVENT_TYPE.validateForm]
						) {
							trigBy = "validateForm";
							return true;
						}
						const isInTrigger = eventName =>
							xItemConfigs.validate.triggerEventsObj[eventName];
						/*some Event In Trigger*/
						if (_.some(trigger, isInTrigger)) {
							trigBy = `triggerEvent ${trigger.toString()}`;
							return true;
						}

						/*trigger Include Update*/
						if (trigger.includes(EVENT_TYPE.update)) {
							const updateTrigger = [
								EVENT_TYPE.change,
								EVENT_TYPE.input,
								EVENT_TYPE.blur
							];
							if (_.some(updateTrigger, isInTrigger)) {
								trigBy = "update";
								return true;
							}
						}
						/* */
						return false;
					})();

					trigBy &&
						console.log(
							`%cValidate trigger off by [${trigBy}]`,
							"color:yellow;background:green;"
						);

					if (needValidate) {
						const validateResult = await rule.validator(xItemConfigs.value);
						if (validateResult) {
							return validateResult;
						}
					} else {
						dontCheck++;
					}
					return false;
				})();

				/* 但凡有一个校验不通过就可以停止循环返回结果了 */
				if (isFail) {
					return [prop, rule.msg, xItemConfigs.FormItemId];
				}
				/*false 继续*/
			}
			/*TODO:*/
			/*没有一个触发校验，则不需要修改tips*/
			if (dontCheck === rules.length) {
				/*不需要修改tips*/
				return [false, false];
			} else {
				return [prop, false];
			}
		})();
		handlerResult(result);
		if (_.isFunction(xItemConfigs.validate.formCallBack)) {
			xItemConfigs.validate.formCallBack(result);
		}
	} catch (error) {
		console.error(error);
	} finally {
		/*校验执行后*/
		xItemConfigs.validate.triggerEventsObj = {};
	}
};
