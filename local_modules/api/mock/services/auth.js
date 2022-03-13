import Mock from "mockjs";
import _ from "lodash";
import { builder, getBody } from "../util";
import { URL } from "../../url";

const MOCK_MAP = [
	[
		"https://www.singlone.work/https/book/v1/login",
		"post",
		{
			msg: "ok",
			data: {
				id: 8,
				username: "ShoneSingLone",
				nickname: "ShoneSingLone",
				email: "SingLone@foxmail.com",
				avatar: "https://avatars.githubusercontent.com/u/15919400?s=40&v=4",
				phone: null,
				sex: "",
				status: 1,
				sign: "",
				area: "",
				token: "mock"
			}
		}
	],
	[
		"https://www.singlone.work/https/book/auth/v1/user",
		"post",
		{
			msg: "ok",
			data: {
				id: 8,
				username: "ShoneSingLone",
				nickname: "ShoneSingLone",
				email: "SingLone@foxmail.com",
				avatar: "https://avatars.githubusercontent.com/u/15919400?s=40&v=4",
				phone: null,
				sex: "",
				status: 1,
				sign: "",
				area: "",
				created_at: "2022-03-13T10:46:38.000Z",
				updated_at: "2022-03-13T10:46:38.000Z",
				token: "token"
			}
		}
	],
	[
		"https://www.singlone.work/https/book/auth/v1/logout",
		"post",
		{
			msg: "ok",
			data: "退出成功"
		}
	],
	[
		"https://www.singlone.work/https/book/auth/v1/logout",
		"post",
		{
			msg: "ok",
			data: "退出成功"
		}
	]
];

Mock.mock(/https/, "post", ({ url }) => {
	return MOCK_MAP[url] || url;
});
