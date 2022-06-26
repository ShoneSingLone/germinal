import { ajax } from "ysrc/api/ajax";

export const user = {
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
