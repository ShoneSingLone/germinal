import { reactive, watch } from "vue";
import {
	_,
	UI,
	defItem,
	EVENT_TYPE,
	validateForm,
	AllWasWell,
	lStorage,
	State_UI
} from "@ventose/ui";
import FormRules, { RegexFn } from "lsrc/components/FormRules";
import { getColor, Actions_App, State_App } from "lsrc/state/State_App";
import { API } from "germinal_api";
import { router, routeNames } from "lsrc/router/router";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
const { $t } = State_UI;

function handleLoginSuccess(res) {
	// 延迟 1 秒显示欢迎信息
	function timeFix() {
		const time = new Date();
		const hour = time.getHours();
		return hour < 9
			? "早上好"
			: hour <= 11
			? "上午好"
			: hour <= 13
			? "中午好"
			: hour < 20
			? "下午好"
			: "晚上好";
	}

	UI.notification.success({
		message: $t("welcome").label,
		description: `${timeFix()}，${$t("welcome.back").label}`
	});
	setTimeout(() => {
		window.location.reload();
	}, 1000);
}

function handleLoginFail(error) {
	if (_.isString(error)) {
		State_Login.alertTips = error;
	} else {
		State_Login.alertTips = "";
	}
}

const styles = {
	icon: { color: getColor("disabledColor"), width: "16px", height: "16px" }
};

/* 根据不同的Tab 检验不同的form 提交不同的内容 */
const TAB_KEYS_MAP = {
	credentials: "configsForm"
};

const LOGIN_TYPE = {
	email: "email"
};
export const State_Login = reactive({
	alertTips: "",
	captchaCount: 0,
	loginType: LOGIN_TYPE.email,
	activeTabKey: Object.keys(TAB_KEYS_MAP)[0],
	rememberMe: true,
	data: {
		email: lStorage.email || "",
		password: lStorage.password || ""
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
			slots: { prefix: () => <UserOutlined style={styles.icon} /> }
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
					[EVENT_TYPE.blur]
				)
			],
			slots: {
				prefix: () => <LockOutlined style={styles.icon} />
			}
		})
	},
	/* 提交按钮 */
	configsSubmit: {
		size: "large",
		type: "primary",
		class: "login-button flex center",
		text: () => $t("user.login.login").label,
		onClick: onSubmitClick
	}
});

async function onSubmitClick() {
	try {
		const activeTabKey = State_Login.activeTabKey;
		if (!activeTabKey) {
			throw new Error("miss activeTabKey");
		}
		const currentFormProp = TAB_KEYS_MAP[activeTabKey];
		console.log(State_Login);
		console.log(State_Login.activeTabKey);
		const currentFormConfigs = State_Login[currentFormProp];
		const validateResults = await validateForm(currentFormConfigs);
		if (AllWasWell(validateResults)) {
			await Actions_App.Login(State_Login.data);
			handleLoginSuccess();
		} else {
			throw new Error("未通过验证");
		}
	} catch (e) {
		handleLoginFail(e);
		console.error(e);
	}
}

/*获取验证码*/
export async function getCaptcha(params) {
	try {
		UI.message.success(await API.user.getVerifyEmail({ email: params.email }));
	} catch (e) {
		console.error(e);
	}
}
