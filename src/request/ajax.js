import $ from "jquery";
import { _, UI, lStorage } from "@ventose/ui";
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

/*
 * @parseContent：满足`return {}`形式的字符串
 */
export const parseContent = returnSentence => new Function(returnSentence);

/* https://learn.jquery.com/ */
/* https://api.jquery.com/jQuery.ajax/  */

ajax.loadText = url =>
	new Promise((resolve, reject) =>
		$.ajax({
			type: "GET",
			async: true,
			url,
			dataType: "text",
			success: data => resolve(parseContent(data)),
			error: reject
		})
	);
export default ajax;
