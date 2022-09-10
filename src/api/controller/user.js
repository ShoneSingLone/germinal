import ajax from "@ventose/request/ajax";
import { URL } from "../url";

function genSmsCaptcha() {
	return (Math.random() * 1000000).toFixed(0);
}

export const user = {
	async login(params) {
		return await ajax.post(URL.Login(), params);
	},
	async regster(params) {
		return await ajax.post(URL.regster(), params);
	},
	async logout() {
		return await ajax.post(URL.Logout());
	},
	async getVerifyEmail(params) {
		return await ajax.post(URL.VerifyEmail(), params);
	},
	async info(params) {
		return await ajax.post(URL.User(), params);
	}
};
