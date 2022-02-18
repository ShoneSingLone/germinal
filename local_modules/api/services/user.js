import ajax from "lsrc/request/ajax";
import { URL } from "../url";

function genSmsCaptcha() {
	return (Math.random() * 1000000).toFixed(0);
}

export const apiUser = {
	async login(params) {
		return await ajax.post(URL.Login, { params });
	},
	async logout() {
		return await ajax.post(URL.Logout);
	},
	async getSmsCaptcha() {
		return {
			result: { code: genSmsCaptcha() }
		};
	},
	async getInfo() {
		return await ajax.get(URL.UserInfo);
	}
};
