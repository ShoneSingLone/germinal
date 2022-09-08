import { reactive } from "vue";
import {
	EVENT_TYPE,
	validateForm,
	defItem,
	pickValueFrom,
	AllWasWell,
	lStorage,
	State_UI,
	FormRules,
	RegexFn
} from "@ventose/ui";
import {
	Actions_App,
	getColor,
	Mutations_App,
	State_App
} from "@ventose/state/State_App";
import { getCaptcha } from "./State_Login";
import { LockOutlined, MailOutlined } from "@ant-design/icons-vue";
const { $t } = State_UI;

const styles = {
	icon: {
		color: getColor("disabledColor"),
		width: "16px",
		height: "16px"
	}
};

const getConfigsSubmitText = () => () =>
	$t("user.register.get-verification-code").label;

export const State_Register = reactive({
	isShowCheckPasswordPopover: false,
	statePassword: {
		level: 0,
		passwordLevel: 0,
		percent: 0
	},
	captchaCount: 0,
	data: {
		email: lStorage.email || "",
		password: lStorage.password || "",
		passwordConfirm: lStorage.password || "",
		verifyCode: ""
	},
	configsForm: {
		...defItem({
			prop: "email",
			size: "large",
			/* render的时候重新获取 */
			placeholder: () => $t("user.login.email.placeholder").label,
			rules: [
				FormRules.required(
					() => $t("user.email.required").label,
					[EVENT_TYPE.blur]
				),
				FormRules.email()
			],
			slots: {
				prefix: () => <MailOutlined style={styles.icon} />
			}
		}),
		...defItem({
			prop: "password",
			isPassword: true,
			size: "large",
			/* render的时候重新获取 */
			placeholder: () => $t("user.login.password.placeholder").label,
			rules: [
				FormRules.required(
					() => $t("user.password.required").label,
					[EVENT_TYPE.update]
				),
				FormRules.custom({
					msg: () => $t("user.password.strength.msg").label,
					validator: checkPasswordLevel,
					trigger: [EVENT_TYPE.update]
				})
			],
			onValidateFial: thisConfigs => {
				console.log(thisConfigs.itemTips);
			},
			slots: {
				prefix: () => <LockOutlined style={styles.icon} />
			}
		}),
		...defItem({
			prop: "passwordConfirm",
			isPassword: true,
			size: "large",
			/* render的时候重新获取 */
			placeholder: () => $t("user.register.confirm-password.placeholder").label,
			rules: [
				FormRules.required(
					() => $t("user.password.required").label,
					[EVENT_TYPE.blur]
				),
				FormRules.custom({
					msg: () => $t("user.password.twice.msg").label,
					validator: async passwordConfirm =>
						State_Register.configsForm.password.value !== passwordConfirm,
					trigger: [EVENT_TYPE.update]
				})
			],
			slots: {
				prefix: () => <LockOutlined style={styles.icon} />
			}
		}),

		/*验证码*/
		...defItem({
			prop: "verifyCode",
			size: "large",
			itemWrapperClass: "flex1",
			/* render的时候重新获取 */
			placeholder: () =>
				$t("user.login.mobile.verification-code.placeholder").label,
			rules: [
				FormRules.required(
					() => $t("user.verification-code.required").label,
					[EVENT_TYPE.blur]
				)
			],
			slots: {
				prefix: () => <MailOutlined style={styles.icon} />
			}
		})
	},
	/* 获取验证码按钮 */
	configsverifyCode: {
		countMax: State_App.configs.countMax,
		text: {
			normal: () => $t("user.register.get-verification-code").label
		},
		onClick: async ({ countDown }) => {
			try {
				const results = await validateForm({
					email: State_Register.configsForm.email
				});
				if (AllWasWell(results)) {
					/*开始倒计时*/
					await getCaptcha(State_Register.data);
					countDown();
				}
			} catch (e) {
				console.error(e);
			}
		}
	},
	/* 提交按钮 */
	configsSubmit: {
		size: "large",
		type: "primary",
		class: "login-button flex1 center flex",
		text: () => $t("user.register.register").label,
		onClick: async () => {
			try {
				const currentFormConfigs = State_Register.configsForm;
				const validateResults = await validateForm(currentFormConfigs);
				if (AllWasWell(validateResults)) {
					const formData = pickValueFrom(currentFormConfigs);
					await Actions_App.register(formData);
				}
			} catch (e) {
				console.error(e);
			}
		}
	}
});

export function scorePassword(pass) {
	let score = 0;
	if (!pass) {
		return score;
	}
	// award every unique letter until 5 repetitions
	const letters = {};
	for (let i = 0; i < pass.length; i++) {
		letters[pass[i]] = (letters[pass[i]] || 0) + 1;
		score += 5.0 / letters[pass[i]];
	}

	// bonus points for mixing it up
	const variations = {
		digits: /\d/.test(pass),
		lower: /[a-z]/.test(pass),
		upper: /[A-Z]/.test(pass),
		nonWords: /\W/.test(pass)
	};

	let variationCount = 0;
	for (var check in variations) {
		variationCount += variations[check] === true ? 1 : 0;
	}
	score += (variationCount - 1) * 10;

	return parseInt(score);
}

/* 校验密码强度 */
function checkPasswordLevel(value) {
	let isFail = false;
	State_Register.statePassword.level = (() => {
		if (value.length >= 6) {
			if (scorePassword(value) >= 80) {
				return 3;
			}
			if (scorePassword(value) >= 60) {
				return 2;
			}
			if (scorePassword(value) >= 30) {
				return 1;
			}
			return 0;
		} else {
			/* 少于6个字符不通过校验 */
			isFail = true;
			return 0;
		}
	})();

	State_Register.statePassword.passwordLevel =
		State_Register.statePassword.level;
	State_Register.statePassword.percent =
		State_Register.statePassword.level * 33;
	State_Register.isShowCheckPasswordPopover =
		State_Register.statePassword.level <= 3;
	return isFail;
}
