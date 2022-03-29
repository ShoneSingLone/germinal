import { EVENT_TYPE, _ } from "@ventose/ui";
import { $t } from "lsrc/language";

/* 通过校验，无错 */
const SUCCESS = false;
/* 未通过校验 */
const FAIL = true;

export const RegexFn = {
	email: () =>
		/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
	mobile: () => /^1[34578]\d{9}$/
};

/**
 *  暂时没想好，之前是msg根据i18n变化
 Object.defineProperty(options,"msg",{ get(){
		return msg();
	} });
 */
const makeFormRules = options => {
	options.trigger = options.trigger || [EVENT_TYPE.update];
	options.msg = options.msg || "";
	return options;
};

export default {
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
	demo() {
		return {
			name: "Demo",
			msg: "Demo",
			async validator(value) {
				await _.sleep(1000);
				return FAIL;
			},
			trigger: [
				EVENT_TYPE.update,
				EVENT_TYPE.input,
				EVENT_TYPE.change,
				EVENT_TYPE.blur
			]
		};
	},
	email() {
		return {
			name: "email",
			msg: $t("user.email.wrong-format").label,
			async validator(value) {
				if (RegexFn.email().test(value)) {
					return SUCCESS;
				}
				return FAIL;
			},
			trigger: [
				EVENT_TYPE.update,
				EVENT_TYPE.input,
				EVENT_TYPE.change,
				EVENT_TYPE.blur
			]
		};
	},
	custom({ name, msg, validator, trigger }) {
		return makeFormRules({
			name,
			msg,
			validator,
			trigger
		});
	}
};
