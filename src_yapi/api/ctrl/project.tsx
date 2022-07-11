import { ajax } from "ysrc/api/ajax";

export const project = {
	addProject(data) {
		return ajax({
			method: "post",
			url: "/api/project/add",
			data
		});
	}
};
