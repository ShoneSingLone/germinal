import {reactive, computed, watch} from "vue";
import {$t} from "@language";
import {UI} from "@ventose/ui";
import {ITEM_TYPE, reactiveItemConfigs} from "@ventose/ui/common";
import {EVENT_TYPE, validateForm} from "@ventose/ui/tools/validate";
import FormRules, {RegexFn} from "@components/FormRules";
import SvgRender from "@components/SvgRender/SvgRender";
import {getColor} from "@state/app";
import API from "germinal_api";
import {pickValueFrom} from "@ventose/ui/tools/form";

const styles = {
    icon: {color: getColor("disabledColor")},
};

/* 根据不同的Tab 检验不同的form 提交不同的内容 */
const TAB_KEYS_MAP = {
    credentials: "configsForm",
    mobile: "configsFormMobile"
};

const LOGIN_TYPE = {
    username: "username",
    email: "email",
    mobile: "mobile",
};

const getConfigsSubmitText = () => () => $t("user.register.get-verification-code").label;

export const StateLogin = reactive({
    captchaCount: 0,
    loginType: LOGIN_TYPE.username,
    activeTabKey: Object.keys(TAB_KEYS_MAP)[0],
    rememberMe: true,
    configsForm: {
        ...reactiveItemConfigs({
            prop: "userName",
            value: "",
            size: "large",
            /* render的时候重新获取 */
            placeholder: () => $t("user.login.username.placeholder").label,
            rules: [FormRules.required(() => $t("user.userName.required").label, [EVENT_TYPE.blur])],
            slots: {prefix: () => <UserOutlined style={styles.icon}/>},
        }),
        ...reactiveItemConfigs({
            prop: "password",
            isPassword: true,
            value: "",
            size: "large",
            /* render的时候重新获取 */
            placeholder: () => $t("user.login.password.placeholder").label,
            rules: [FormRules.required(() => $t("user.password.required").label, [EVENT_TYPE.blur])],
            slots: {prefix: () => <xRender render={SvgRender.lockStrok} style={styles.icon}/>},
        }),
    },
    /*手机*/
    configsFormMobile: {
        ...reactiveItemConfigs({
            prop: "mobile",
            value: "",
            size: "large",
            /* render的时候重新获取 */
            placeholder: () => $t("user.login.mobile.placeholder").label,
            rules: [
                FormRules.required(() => $t("user.login.mobile.placeholder").label, [EVENT_TYPE.blur]),
                FormRules.validator({
                    msg: () => $t("user.login.mobile.placeholder").label,
                    validator: async (mobile) => !RegexFn.mobile().test(mobile),
                    trigger: [EVENT_TYPE.update]
                })],
            slots: {
                prefix: () => <MobileOutlined style={styles.icon}/>,
            },
        }),
        /*验证码*/
        ...reactiveItemConfigs({
            prop: "verificationCode",
            value: "",
            size: "large",
            itemWrapperClass: "flex1",
            /* render的时候重新获取 */
            placeholder: () => $t("user.login.mobile.verification-code.placeholder").label,
            rules: [
                FormRules.required(() => $t("user.verification-code.required").label, [EVENT_TYPE.blur])],
            slots: {
                prefix: () => <xRender render={SvgRender.mail} style={styles.icon}/>,
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
                const results = await validateForm({mobile: StateLogin.configsFormMobile.mobile});
                if (results.length === 0) {
                    await getCaptcha();
                }
            } catch (e) {

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

/*检查userName的类型*/
watch(() => StateLogin.configsForm.userName.value, checkUserNameType);

function checkUserNameType(userName) {
    if (RegexFn.email().test(userName)) {
        StateLogin.loginType = LOGIN_TYPE.email;
    } else {
        StateLogin.loginType = LOGIN_TYPE.username;
    }
}

/*获取验证码 ：等待时间 秒*/
const CAPTCHA_COUNT = 5;
watch(() => StateLogin.captchaCount, handleCaptchaCountChange);

function handleCaptchaCountChange(captchaCount) {
    if (captchaCount === 0) {
        /*按钮显示*/
        StateLogin.configsVerificationCode.text = getConfigsSubmitText();
        /*按钮可点击状态*/
        StateLogin.configsVerificationCode.disabled = false;
        return;
    }

    const setCounDownText = () => StateLogin.configsVerificationCode.text = `${CAPTCHA_COUNT - captchaCount} s`;

    if (captchaCount === 1) {
        setCounDownText();
        StateLogin.configsVerificationCode.disabled = true;
        return;
    }

    if (captchaCount && captchaCount <= CAPTCHA_COUNT) {
        setCounDownText();
        return;
    }
}

/* 只是修改倒计时计数 */
function countDown() {
    StateLogin.captchaCount++;
    /*未达到限制时间则继续增加，间隔一秒*/
    if (StateLogin.captchaCount <= CAPTCHA_COUNT) {
        setTimeout(countDown, 1000);
    } else {
        StateLogin.captchaCount = 0;
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
        if (StateLogin.captchaCount) return;
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
