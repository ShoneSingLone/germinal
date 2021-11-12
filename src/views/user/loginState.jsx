import {reactive, computed, watch} from "vue";
import {$t} from "@language";
import {UI} from "@ventose/ui";
import {ITEM_TYPE, reactiveItemConfigs} from "@ventose/ui/common";
import {EVENT_TYPE, validateForm} from "@ventose/ui/tools/validate";
import FormRules from "../../components/FormRules";
import {getColor} from "../../state/app";
import API from "germinal_api";
import {pickValueFrom} from "@ventose/ui/tools/form";

const styles = {
    icon: {color: getColor("disabledColor")},
};

/* 根据不同的Tab 检验不同的form 提交不同的内容 */
const FORM_NAME = {
    credentials: "configsForm",
    mobile: "configsFormMobile"
};

const renderLockStrok = () => {
    return (
        <svg viewBox="64 64 896 896" data-icon="lock" width="1em" height="1em" fill="currentColor" aria-hidden="true"
             focusable="false">
            <path
                d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"></path>
        </svg>
    );
};
const renderMail = () => {
    return (
        <svg viewBox="64 64 896 896" data-icon="mail" width="1em" height="1em" fill="currentColor" aria-hidden="true"
             focusable="false">
            <path
                d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
        </svg>
    );
};

const LOGIN_TYPE = {
    username: "username",
    email: "email",
    mobile: "mobile",
};

const getConfigsSubmitText = () => () => $t("user.register.get-verification-code").label;

export const LoginState = reactive({
    captchaCount: 0,
    loginType: LOGIN_TYPE.username,
    activeKey: Object.keys(FORM_NAME)[0],
    // activeKey: "credentials",
    rememberMe: true,
    configsForm: {
        ...reactiveItemConfigs({
            prop: "userName",
            value: "",
            size: "large",
            /* 变化的时候重新获取 */
            placeholder: () => $t("user.login.username.placeholder").label,
            rules: [FormRules.required(() => $t("user.userName.required").label, [EVENT_TYPE.blur])],
            slots: {prefix: () => <UserOutlined style={styles.icon}/>},
        }),
        ...reactiveItemConfigs({
            prop: "password",
            isPassword: true,
            value: "",
            size: "large",
            /* 变化的时候重新获取 */
            placeholder: () => $t("user.login.password.placeholder").label,
            rules: [FormRules.required(() => $t("user.password.required").label, [EVENT_TYPE.blur]), {validator: _.doNothing}],
            slots: {prefix: () => <xRender render={renderLockStrok} style={styles.icon}/>},
        }),
    },
    configsFormMobile: {
        ...reactiveItemConfigs({
            prop: "mobile",
            value: "",
            size: "large",
            /* 变化的时候重新获取 */
            placeholder: () => $t("user.login.mobile.placeholder").label,
            rules: [FormRules.required(() => $t("user.login.mobile.placeholder").label, [EVENT_TYPE.blur])],
            slots: {
                prefix: () => <MobileOutlined style={styles.icon}/>,
            },
        }),
        ...reactiveItemConfigs({
            prop: "verificationCode",
            value: "",
            size: "large",
            itemWrapperClass: "flex1",
            /* 变化的时候重新获取 */
            placeholder: () => $t("user.login.mobile.verification-code.placeholder").label,
            rules: [
                FormRules.required(() => $t("user.verification-code.required").label, [EVENT_TYPE.blur]),
                {validator: _.doNothing}],
            slots: {
                prefix: () => <xRender render={renderMail} style={styles.icon}/>,
            },
        }),
    },
    /* 获取验证码按钮 */
    configsVerificationCode: {
        disabled: false,
        size: "large",
        style: {minWidth: "112px"},
        text: getConfigsSubmitText(),
        async onClick() {
            try {
                const results = await validateForm({mobile: LoginState.configsFormMobile.mobile});
                if (results.length === 0) {
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
                const currentFormProp = FORM_NAME[LoginState.activeKey];
                const currentFormConfigs = LoginState[currentFormProp];
                const validateResults = await validateForm(currentFormConfigs);
                if (validateResults.length === 0) {
                    const formData = pickValueFrom(currentFormConfigs);
                    console.log("formData", formData);
                }
            } catch (e) {
                console.error(e);
            }
        }
    },
});

/*等待时间 秒*/
const CAPTCHA_COUNT = 5;

watch(() => LoginState.captchaCount, handleCaptchaCountChange);

function handleCaptchaCountChange(captchaCount) {
    if (captchaCount === 0) {
        /*按钮显示*/
        LoginState.configsVerificationCode.text = getConfigsSubmitText();
        /*按钮可点击状态*/
        LoginState.configsVerificationCode.disabled = false;
        return;
    }

    const setCounDownText = () => LoginState.configsVerificationCode.text = `${CAPTCHA_COUNT - captchaCount} s`;

    if (captchaCount === 1) {
        setCounDownText();
        LoginState.configsVerificationCode.disabled = true;
        return;
    }

    if (captchaCount && captchaCount <= CAPTCHA_COUNT) {
        setCounDownText();
        return;
    }
}

function countDown() {
    LoginState.captchaCount++;
    /*未达到限制时间则继续增加，间隔一秒*/
    if (LoginState.captchaCount <= CAPTCHA_COUNT) {
        setTimeout(countDown, 1000);
    } else {
        LoginState.captchaCount = 0;
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
                <span><h2>{captchaCode}</h2>已复制到粘贴板，可以直接 Ctrl+V</span>
            </div>
        ),
    });
    return;
}

/*获取验证码*/
async function getCaptcha() {
    try {
        /*已发送，正在倒计时*/
        if (LoginState.captchaCount) return;
        /*开始倒计时*/
        countDown();
        /*理论上是发送到手机*/
        const {result} = await API.user.getSmsCaptcha();
        UI.message.success("验证码已发送");
        /*TODO:remove*/
        await mockSmsCaptcha(result);
    } catch (e) {
        console.error(e);
    }
}
