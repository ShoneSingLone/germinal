import { _, UI, lStorage, $ } from "@ventose/ui";
import axios from "axios";
import { STATIC_WORD } from "../utils/common.words";
import { State_App } from "./../state/State_App";

const reqInterceptor = config => {
	config.headers.token = lStorage[STATIC_WORD.ACCESS_TOKEN] || "";
	return config;
};

const resInterceptor = async response => {
	const { data } = response;
	return Promise.resolve(data?.data);
};

const resErrorHandler = async error => {
	const { response } = error;
	console.log(response);
	logError(response?.data?.data);

	if (response?.data?.msg === "auth") {
		State_App.token = "";
		await _.sleep(1000);
		window.location.reload();
	}
	return Promise.reject(error);
};

export function genAjax(options = {}) {
	options.baseURL = options.baseURL || "https://www.singlone.work/s/api/";
	options.reqInterceptor = options.reqInterceptor || reqInterceptor;
	options.resInterceptor = options.resInterceptor || resInterceptor;
	options.resErrorHandler = options.resErrorHandler || resErrorHandler;

	const ajax = axios.create({
		baseURL: options.baseURL,
		timeout: 20000 // request timeout
	});

	// request interceptor
	ajax.interceptors.request.use(options.reqInterceptor, error =>
		Promise.reject(error)
	);

	// response interceptor
	ajax.interceptors.response.use(
		options.resInterceptor,
		options.resErrorHandler
	);
	return ajax;
}

export function logError(msg) {
	if (!msg) return;
	UI.notification.error({
		message: msg
	});
	console.error(msg);
}

export default genAjax();
