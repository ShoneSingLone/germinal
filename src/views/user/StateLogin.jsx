import { reactive, watch } from "vue";
import { $t } from "lsrc/language";
import { UI } from "@ventose/ui";
import { reactiveItemConfigs, timeFix } from "@ventose/ui/common";
import { EVENT_TYPE, validateForm } from "@ventose/ui/tools/validate";
import FormRules, { RegexFn } from "lsrc/components/FormRules";
import { getColor, StateAppActions, StateApp } from "lsrc/state/StateApp";
import { API } from "germinal_api";
import { router, routeNames } from "lsrc/router/router";

function handleLoginSuccess(res) {
	router.push({ name: routeNames.shell });
	// 延迟 1 秒显示欢迎信息
	setTimeout(() => {
		UI.notification.success({
			message: $t("welcome").label,
			description: `${timeFix()}，${$t("welcome.back").label}`
		});
	}, 1000);
}

function handleLoginFail(error) {
	if (_.isString(error)) {
		StateLogin.alertTips = error;
	} else {
		StateLogin.alertTips = "";
	}
}

const styles = {
	icon: { color: getColor("disabledColor"), width: "16px", height: "16px" }
};

/* 根据不同的Tab 检验不同的form 提交不同的内容 */
const TAB_KEYS_MAP = {
	credentials: "configsForm",
	mobile: "configsFormMobile"
};

const LOGIN_TYPE = {
	username: "username",
	email: "email",
	mobile: "mobile"
};

export const StateLogin = reactive({
	alertTips: "",
	captchaCount: 0,
	loginType: LOGIN_TYPE.username,
	activeTabKey: Object.keys(TAB_KEYS_MAP)[0],
	rememberMe: true,
	data: {
		username: "admin",
		password: "admin",
		mobile: "",
		verificationCode: ""
	},
	configsForm: {
		...reactiveItemConfigs({
			prop: "username",
			size: "large",
			/* render的时候重新获取 */
			placeholder: () => $t("user.login.username.placeholder").label,
			rules: [
				FormRules.required(
					() => $t("请输入帐户名或邮箱地址").label,
					[EVENT_TYPE.blur]
				)
			],
			slots: { prefix: () => <UserOutlined style={styles.icon} /> }
		}),
		...reactiveItemConfigs({
			prop: "password",
			isPassword: true,
			size: "large",
			/* render的时候重新获取 */
			placeholder: () => $t("user.login.password.placeholder").label,
			rules: [
				FormRules.required(
					() => $t("user.password.required").label,
					[EVENT_TYPE.blur]
				)
			],
			slots: {
				prefix: () => <LockOutlined style={styles.icon} />
			}
		})
	},
	/*手机*/
	configsFormMobile: {
		...reactiveItemConfigs({
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
		...reactiveItemConfigs({
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
				prefix: () => <LockOutlined style={styles.icon} />
			}
		})
	},
	/* 获取验证码按钮 */
	configsVerificationCode: {
		countMax: StateApp.configs.countMax,
		text: {
			normal: () => $t("user.register.get-verification-code").label
		},
		onClick: async ({ countDown }) => {
			try {
				const results = await validateForm({
					mobile: StateLogin.configsFormMobile.mobile
				});
				if (validateForm.allWasWell(results)) {
					/*开始倒计时*/
					countDown();
					await getCaptcha();
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
		class: "login-button",
		text: () => $t("user.login.login").label,
		onClick: async () => {
			try {
				const currentFormProp = TAB_KEYS_MAP[StateLogin.activeTabKey];
				const currentFormConfigs = StateLogin[currentFormProp];
				const validateResults = await validateForm(currentFormConfigs);
				if (!_.isArrayFill(validateResults)) {
					const res = await StateAppActions.Login(StateLogin.data);
					/* 验证错误 */
					/* 网络错误 */
					handleLoginSuccess(res);
				} else {
					throw new Error("未通过验证");
				}
			} catch (e) {
				handleLoginFail(e);
				console.error(e);
			}
		}
	}
});

/*检查userName的类型*/
watch(() => StateLogin.configsForm.username.value, checkUserNameType);

function checkUserNameType(username) {
	if (RegexFn.email().test(username)) {
		StateLogin.loginType = LOGIN_TYPE.email;
	} else {
		StateLogin.loginType = LOGIN_TYPE.username;
	}
}

async function mockSmsCaptcha(result = {}) {
	const captchaCode = result?.code;
	await _.sleep(2000);
	await navigator.clipboard.writeText(captchaCode);
	UI.notification.success({
		message: "理论上是发送短信到手机",
		description: (
			<div>
				<span>
					<h2>{captchaCode}</h2>已复制到粘贴板，可以直接 Ctrl+V
				</span>
			</div>
		)
	});
	return;
}

/*获取验证码*/
export async function getCaptcha() {
	try {
		/*理论上是发送到手机*/
		const { result } = await API.user.getSmsCaptcha();
		UI.message.success("验证码已发送");
		/*TODO:remove*/
		await mockSmsCaptcha(result);
	} catch (e) {
		console.error(e);
	}
}
