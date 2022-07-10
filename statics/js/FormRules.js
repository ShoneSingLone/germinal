import { b as _global__, E as EVENT_TYPE, S as State_UI } from "./each.js";
const {
  $t
} = State_UI;
const SUCCESS = false;
const FAIL = true;
const RegexFn = {
  email: () => /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
  mobile: () => /^1[34578]\d{9}$/
};
const makeFormRules = (options) => {
  options.trigger = options.trigger || [EVENT_TYPE.update];
  options.msg = options.msg || "";
  return options;
};
const FormRules = {
  SUCCESS,
  FAIL,
  required(msg, trigger = [EVENT_TYPE.update]) {
    return makeFormRules({
      name: "required",
      msg: msg || $t("\u5FC5\u586B\u9879").label,
      async validator(value) {
        if (value) {
          if (_global__.isArray(value)) {
            if (value.length > 0) {
              return SUCCESS;
            } else {
              return FAIL;
            }
          }
          return SUCCESS;
        }
        if (_global__.isBoolean(value))
          return SUCCESS;
        if (_global__.isNumber(value) && !_global__.isNaN(value))
          return SUCCESS;
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
        await _global__.sleep(1e3);
        return FAIL;
      },
      trigger: [EVENT_TYPE.update, EVENT_TYPE.input, EVENT_TYPE.change, EVENT_TYPE.blur]
    };
  },
  email() {
    return {
      name: "email",
      msg: () => $t("\u8BF7\u8F93\u5165email").label,
      async validator(value) {
        if (RegexFn.email().test(value)) {
          return SUCCESS;
        }
        return FAIL;
      },
      trigger: [EVENT_TYPE.update, EVENT_TYPE.input, EVENT_TYPE.change, EVENT_TYPE.blur]
    };
  },
  custom({
    name,
    msg,
    validator,
    trigger
  }) {
    return makeFormRules({
      name,
      msg,
      validator,
      trigger
    });
  }
};
export { FormRules as F };
