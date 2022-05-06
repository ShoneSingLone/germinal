import ajax from "lsrc/request/ajax";
import { URL } from "../url";

export const common = {
	async testConnect(params) {
		return await ajax.get(URL.testConnection(), {
			params: {
				test: "isConnect"
			}
		});
	}
};
