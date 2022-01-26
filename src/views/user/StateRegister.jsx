import { reactive, computed, watch } from "vue";
import { $t } from "lsrc/language";
import { UI } from "@ventose/ui";
import { ITEM_TYPE, defineXItem } from "@ventose/ui/common";
import { EVENT_TYPE, validateForm } from "@ventose/ui/tools/validate";
import FormRules, { RegexFn } from "lsrc/components/FormRules";
import SvgRender from "lsrc/components/SvgRender/SvgRender";
import { getColor, StateApp } from "lsrc/state/StateApp";
import { API } from "germinal_api";
import { pickValueFrom } from "@ventose/ui/tools/form";
// import { getCaptcha } from "./StateLogin";
debugger;
const styles = {
	icon: { color: getColor("disabledColor"), width: "16px", height: "16px" }
};

const getConfigsSubmitText = () => () =>
	$t("user.register.get-verification-code").label;

export const StateRegister = reactive({
	isShowCheckPasswordPopover: false,
	statePassword: {
		level: 0,
		passwordLevel: 0,
		percent: 0
	},
	captchaCount: 0,
	data: {
		username: "",
		password: "",
		password: "",
		mobile: "",
		verification: ""
	},
	configsForm: {
		...defineXItem({
			prop: "username",
			size: "large",
			/* render的时候重新获取 */
			placeholder: () => $t("user.login.username.placeholder").label,
			rules: [
				FormRules.required(
					() => $t("user.username.required").label,
					[EVENT_TYPE.blur]
				)
			],
			slots: { prefix: () => <UserOutlined style={styles.icon} /> }
		}),
		...defineXItem({
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
				FormRules.validator({
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
		...defineXItem({
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
				FormRules.validator({
					msg: () => $t("user.password.twice.msg").label,
					validator: async passwordConfirm =>
						StateRegister.configsForm.password.value !== passwordConfirm,
					trigger: [EVENT_TYPE.update]
				})
			],
			slots: {
				prefix: () => <LockOutlined style={styles.icon} />
			}
		}),

		...defineXItem({
			prop: "mobile",
			size: "large",
			/* render的时候重新获取 */
			placeholder: () => $t("user.login.mobile.placeholder").label,
			rules: [
				FormRules.required(
					() => $t("user.login.mobile.placeholder").label,
					[EVENT_TYPE.blur]
				),
				FormRules.validator({
					msg: () => $t("user.login.mobile.placeholder").label,
					validator: async mobile => !RegexFn.mobile().test(mobile),
					trigger: [EVENT_TYPE.update]
				})
			],
			slots: {
				prefix: () => <MobileOutlined style={styles.icon} />
			}
		}),
		/*验证码*/
		...defineXItem({
			prop: "verificationCode",
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
	configsVerificationCode: {
		countMax: StateApp.configs.countMax,
		text: { normal: () => $t("user.register.get-verification-code").label },
		onClick: async ({ countDown }) => {
			try {
				const results = await validateForm({
					mobile: StateRegister.configsForm.mobile
				});
				if (validateForm.allWasWell(results)) {
					/*开始倒计时*/
					await getCaptcha();
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
		class: "login-button flex1",
		text: () => $t("user.register.register").label,
		onClick: async () => {
			try {
				const currentFormConfigs = StateRegister.configsForm;
				const validateResults = await validateForm(currentFormConfigs);
				if (validateForm.allWasWell(validateResults)) {
					const formData = pickValueFrom(currentFormConfigs);
					console.log("formData", formData);
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
	StateRegister.statePassword.level = (() => {
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

	StateRegister.statePassword.passwordLevel = StateRegister.statePassword.level;
	StateRegister.statePassword.percent = StateRegister.statePassword.level * 33;
	StateRegister.isShowCheckPasswordPopover =
		StateRegister.statePassword.level <= 3;
	return isFail;
}
