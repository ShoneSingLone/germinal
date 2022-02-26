import Mock from "mockjs";
import { builder, getBody } from "../util";
import { URL } from "../../url";

const username = ["admin", "super"];
// 强硬要求 ant.design 相同密码
// '21232f297a57a5a743894a0e4a801fc3',
const password = [
	"8914de686ab28dc22f30d3d8e107ff6c",
	"21232f297a57a5a743894a0e4a801fc3"
]; // admin, ant.design

const login = options => {
	const bodyString = String(options.body);
	if (
		bodyString !==
		`{"username":"admin","password":"21232f297a57a5a743894a0e4a801fc3"}`
	) {
		return builder({ isLogin: true }, "账户或密码错误", 401);
	}
	const result = builder(
		{
			id: Mock.mock("@guid"),
			name: Mock.mock("@name"),
			username: "admin",
			password: "",
			avatar:
				"https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png",
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
		},
		"",
		200,
		{ "Custom-Header": Mock.mock("@guid") }
	);
	return result;
};

const logout = () => {
	return builder({}, "[测试接口] 注销成功", 200);
};

const smsCaptcha = () => {
	return builder({ captcha: Mock.mock("@integer(10000, 99999)") });
};

const twofactor = () => {
	return builder({ stepCode: Mock.mock("@integer(0, 1)") });
};

Mock.mock(URL.Login, "post", login);
Mock.mock(URL.Logout, "post", logout);
Mock.mock(/\/account\/sms/, "post", smsCaptcha);
Mock.mock(/\/auth\/2step-code/, "post", twofactor);
Mock.mock(`/admin/license/api/list/page/10/1`, "post", twofactor => {
	debugger;
	return builder({ captcha: Mock.mock("@integer(10000, 99999)") });
});
