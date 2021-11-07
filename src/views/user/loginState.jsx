import {reactive, computed} from "vue";
import {$t} from "@language";
import {ITEM_TYPE, reactiveItemConfigs} from "@ventose/ui/common";
import {EVENT_TYPE, validateForm} from "@ventose/ui/tools/validate";
import FormRules from "../../components/FormRules";
import {getColor} from "../../state/app";

const styles = {
    icon: {color: getColor("disabledColor")},
};

const renderLockStrok = () => {
    return (
        <svg viewBox="64 64 896 896" data-icon="lock" width="1em" height="1em" fill="currentColor" aria-hidden="true"
             focusable="false" class="">
            <path
                d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"></path>
        </svg>
    );
};

export const LoginState = reactive({
    activeKey: "credentials",
    rememberMe: true,
    configsForm: {
        ...reactiveItemConfigs({
            prop: "userName",
            value: "",
            size: "large",
            /* 变化的时候重新获取 */
            placeholder: () => $t("user.login.username.placeholder").label,
            rules: [FormRules.required($t("user.userName.required").label, [EVENT_TYPE.blur])],
            slots: {
                prefix: () => <UserOutlined style={styles.icon}/>,
            },
        }),
        ...reactiveItemConfigs({
            prop: "password",
            isPassword: true,
            value: "",
            size: "large",
            /* 变化的时候重新获取 */
            placeholder: () => $t("user.login.password.placeholder").label,
            rules: [
                FormRules.required($t("user.password.required").label, [EVENT_TYPE.blur]),
                {validator: _.doNothing}],
            slots: {
                prefix: () => <xRender render={renderLockStrok} style={styles.icon}/>,
            },
        }),
    },
    configsSubmit: {
        size: "large",
        type: "primary",
        class: "login-button",
        text: () => $t("user.login.login").label,
        onClick: async () => {
            try {
                const results = await validateForm(LoginState.configsForm);
                console.log(results);
            } catch (e) {
                console.error(e);
            }
        }
    }
});
