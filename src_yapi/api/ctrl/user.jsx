import { ajax } from "ysrc/api/ajax";

export const user = {
	getUserStatus() {
		return ajax({
			method: "get",
			url: "/api/user/status"
		});
	},
	searchUser(params) {
		return ajax({
			method: "get",
			url: "/api/user/search",
			params
		});
	},
	loginActions(data) {
		return ajax({
			method: "post",
			url: "/api/user/login",
			data
		});
	},
	regActions(data) {
		return ajax({
			method: "post",
			url: "/api/user/reg",
			data
		});
	}
};
