import { reactive, computed, watch } from "vue";
import { $t } from "lsrc/language";
import { UI } from "@ventose/ui";
import { ITEM_TYPE, reactiveItemConfigs } from "@ventose/ui/common";
import { EVENT_TYPE, validateForm } from "@ventose/ui/tools/validate";
import FormRules, { RegexFn } from "lsrc/components/FormRules";
import SvgRender from "lsrc/components/SvgRender/SvgRender";
import { getColor } from "lsrc/state/StateApp";
import { API } from "germinal_api";
import { pickValueFrom } from "@ventose/ui/tools/form";

// const styles = {
//   icon: { color: getColor("disabledColor") },
// };

const getConfigsSubmitText = () => () =>
  $t("user.register.get-verification-code").label;

export const StateRegister = reactive({
  isShowCheckPasswordPopover: false,
  statePassword: {
    level: 0,
    passwordLevel: 0,
    percent: 0,
  },
  captchaCount: 0,
  configsForm: {
    ...reactiveItemConfigs({
      prop: "userName",
      value: "",
      size: "large",
      /* render的时候重新获取 */
      placeholder: () => $t("user.login.username.placeholder").label,
      rules: [
        FormRules.required(
          () => $t("user.userName.required").label,
          [EVENT_TYPE.blur]
        ),
      ],
      slots: { prefix: () => <UserOutlined style={styles.icon} /> },
    }),
    ...reactiveItemConfigs({
      prop: "password",
      isPassword: true,
      value: "",
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
          trigger: [EVENT_TYPE.update],
        }),
      ],
      onValidateFial: (thisConfigs) => {
        console.log(thisConfigs.itemTips);
      },
      slots: {
        prefix: () => (
          <xRender render={SvgRender.lockStrok} style={styles.icon} />
        ),
      },
    }),
    ...reactiveItemConfigs({
      prop: "passwordConfirm",
      isPassword: true,
      value: "",
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
          validator: async (passwordConfirm) =>
            StateRegister.configsForm.password.value !== passwordConfirm,
          trigger: [EVENT_TYPE.update],
        }),
      ],
      slots: {
        prefix: () => (
          <xRender render={SvgRender.lockStrok} style={styles.icon} />
        ),
      },
    }),

    ...reactiveItemConfigs({
      prop: "mobile",
      value: "",
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
          validator: async (mobile) => !RegexFn.mobile().test(mobile),
          trigger: [EVENT_TYPE.update],
        }),
      ],
      slots: {
        prefix: () => <MobileOutlined style={styles.icon} />,
      },
    }),
    /*验证码*/
    ...reactiveItemConfigs({
      prop: "verificationCode",
      value: "",
      size: "large",
      itemWrapperClass: "flex1",
      /* render的时候重新获取 */
      placeholder: () =>
        $t("user.login.mobile.verification-code.placeholder").label,
      rules: [
        FormRules.required(
          () => $t("user.verification-code.required").label,
          [EVENT_TYPE.blur]
        ),
      ],
      slots: {
        prefix: () => <xRender render={SvgRender.mail} style={styles.icon} />,
      },
    }),
  },
  /* 获取验证码按钮 */
  configsVerificationCode: {
    disabled: false,
    size: "large",
    style: { minWidth: "112px" },
    text: getConfigsSubmitText(),
    onClick: async () => {
      try {
        const results = await validateForm({
          mobile: StateRegister.configsForm.mobile,
        });
        if (results.length === 0) {
          await getCaptcha();
        }
      } catch (e) {
        console.error(e);
      }
    },
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
        if (validateResults.length === 0) {
          const formData = pickValueFrom(currentFormConfigs);
          console.log("formData", formData);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
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
    nonWords: /\W/.test(pass),
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

/*获取验证码 ：等待时间 秒*/
const CAPTCHA_COUNT = 5;
watch(() => StateRegister.captchaCount, handleCaptchaCountChange);

function handleCaptchaCountChange(captchaCount) {
  if (captchaCount === 0) {
    /*按钮显示*/
    StateRegister.configsVerificationCode.text = getConfigsSubmitText();
    /*按钮可点击状态*/
    StateRegister.configsVerificationCode.disabled = false;
    return;
  }

  const setCounDownText = () =>
    (StateRegister.configsVerificationCode.text = `${
      CAPTCHA_COUNT - captchaCount
    } s`);

  if (captchaCount === 1) {
    setCounDownText();
    StateRegister.configsVerificationCode.disabled = true;
    return;
  }

  if (captchaCount && captchaCount <= CAPTCHA_COUNT) {
    setCounDownText();
    return;
  }
}

/* 只是修改倒计时计数 */
function countDown() {
  StateRegister.captchaCount++;
  /*未达到限制时间则继续增加，间隔一秒*/
  if (StateRegister.captchaCount <= CAPTCHA_COUNT) {
    setTimeout(countDown, 1000);
  } else {
    StateRegister.captchaCount = 0;
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
    ),
  });
  return;
}

/*获取验证码*/
async function getCaptcha() {
  try {
    /*已发送，正在倒计时*/
    if (StateRegister.captchaCount) return;
    /*开始倒计时*/
    countDown();
    /*理论上是发送到手机*/
    const { result } = await API.user.getSmsCaptcha();
    UI.message.success("验证码已发送");
    /*TODO:remove*/
    await mockSmsCaptcha(result);
  } catch (e) {
    console.error(e);
  }
}
