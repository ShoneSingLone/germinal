import ajax from "lsrc/request/ajax";
import { URL } from "../url";
import { getInfo } from "../mock/user";

function genSmsCaptcha() {
	return (Math.random() * 1000000).toFixed(0);
}

export const user = {
	async login(params) {
		return await ajax.post(URL.Login, params);
	},
	async logout() {
		return await ajax.post(URL.Logout);
	},
	getSmsCaptcha: async () => {
		return {
			result: { code: genSmsCaptcha() }
		};
	},
	getInfo: async () => {
		// return await ajax.get(url.UserInfo);
		return {
			result: getInfo
		};
	}
};
