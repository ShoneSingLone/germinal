(() => {
	const $t = function (prop, payload) {
		const result = { label: prop, prop: prop };
		/!*使用 {变量名} 赋值*!/;
		_.templateSettings.interpolate = /{([\s\S]+?)}/g;
		if ($t.options) {
			const temp = $t.options[prop];
			if (temp) {
				result.label = _.template(temp)(payload);
				if (!result.label) {
					result.label = prop;
					console.error(`i18n:${prop} "NOT_FOUND"`);
				}
			}
		}
		return result;
	};
	window.$t = $t;
})();

(() => {
	window.TEMPLATE_PLACEHOLDER = "";
	const EVENT_TYPE = VentoseUI.EVENT_TYPE;
	const makeFormRules = options => {
		options.trigger = options.trigger || [EVENT_TYPE.update];
		options.msg = options.msg || "";
		return options;
	};

	/* 通过校验，无错 */
	const SUCCESS = false;
	/* 未通过校验 */
	const FAIL = true;

	window.RegexFn = {
		email: () =>
			/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
		mobile: () => /^1[34578]\d{9}$/,
		/*$t(`只能由英文字母(区分大小写)、数字和特殊字符@.\\_-组成；`).label, */
		username0: () => /^[0-9a-zA-Z@\.\\_-]{1,}$/
	};

	window.FormRules = {
		SUCCESS,
		FAIL,
		required(msg, trigger = [EVENT_TYPE.update]) {
			return makeFormRules({
				name: "required",
				msg: msg || $t("必填项").label,
				async validator(value) {
					/*必填的简单验证*/
					if (value) return SUCCESS;
					if (_.isBoolean(value)) return SUCCESS;
					if (_.isNumber(value) && !_.isNaN(value)) return SUCCESS;
					if (_.isArrayFill(value)) return SUCCESS;
					return FAIL;
				},
				trigger
			});
		},
		email() {
			return {
				name: "email",
				msg: $t("请输入正确的邮箱地址").label,
				async validator(value) {
					if (!value) return SUCCESS;
					if (RegexFn.email().test(value)) {
						return SUCCESS;
					}
					return FAIL;
				},
				trigger: [EVENT_TYPE.update]
			};
		},
		mobile() {
			return {
				name: "mobile",
				msg: $t("请输入正确的手机号").label,
				async validator(value) {
					if (!value) return SUCCESS;
					if (RegexFn.mobile().test(value)) {
						return SUCCESS;
					}
					return FAIL;
				},
				trigger: [EVENT_TYPE.update]
			};
		},
		custom({ name, msg, validator, trigger = [EVENT_TYPE.update] }) {
			return makeFormRules({
				name,
				msg,
				validator,
				trigger
			});
		}
	};
})();
