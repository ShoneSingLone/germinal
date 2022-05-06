import { _, UI, lStorage, $ } from "@ventose/ui";
import axios from "axios";
import { STATIC_WORD } from "../utils/common.words";

const ajax = axios.create({
	timeout: 20000 // request timeout
});

// request interceptor
ajax.interceptors.request.use(
	config => {
		config.headers.token = lStorage[STATIC_WORD.ACCESS_TOKEN] || "";
		return config;
	},
	error => Promise.reject(error)
);

// response interceptor
ajax.interceptors.response.use(
	async response => {
		const { data } = response;
		return Promise.resolve(data.data);
	},
	async error => {
		const { response } = error;
		logError(response.data.data);
		return Promise.reject(error);
	}
);

export function logError(msg) {
	UI.notification.error({
		message: msg
	});
	console.error(msg);
}

export default ajax;
