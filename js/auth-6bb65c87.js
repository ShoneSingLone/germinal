import { M as Mock } from "./index-413439dd.js";
import { b as builder } from "./util-93ba83bc.js";
import "./index-ec590ee9.js";
import "./vendor-81fcf740.js";
const login = (options) => {
  if (options.body !== "username=admin&password=21232f297a57a5a743894a0e4a801fc3") {
    return builder({
      isLogin: true
    }, "\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF", 401);
  }
  const result = builder({
    id: Mock.mock("@guid"),
    name: Mock.mock("@name"),
    username: "admin",
    password: "",
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png",
    status: 1,
    telephone: "",
    lastLoginIp: "27.154.74.117",
    lastLoginTime: 1534837621348,
    creatorId: "admin",
    createTime: 1497160610259,
    deleted: 0,
    roleId: "admin",
    lang: "zh-CN",
    token: "4291d7da9005377ec9aec4a71ea837f"
  }, "", 200, {
    "Custom-Header": Mock.mock("@guid")
  });
  console.log("result", result);
  return result;
};
const logout = () => {
  return builder({}, "[\u6D4B\u8BD5\u63A5\u53E3] \u6CE8\u9500\u6210\u529F");
};
const smsCaptcha = () => {
  return builder({
    captcha: Mock.mock("@integer(10000, 99999)")
  });
};
const twofactor = () => {
  return builder({
    stepCode: Mock.mock("@integer(0, 1)")
  });
};
Mock.mock(/\/auth\/login/, "post", login);
Mock.mock(/\/auth\/logout/, "post", logout);
Mock.mock(/\/account\/sms/, "post", smsCaptcha);
Mock.mock(/\/auth\/2step-code/, "post", twofactor);
