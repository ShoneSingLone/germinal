import $ from "jquery";
import { _, UI } from "@ventose/ui";
import axios from "axios";

const CODE_HANDLER_MAP = {
	401: res => {
		logError(401);
	},
	404: () => {
		logError(401);
	},
	0: () => {
		logError(0);
	}
};

const ajax = axios.create({
	timeout: 20000 // request timeout
});

// request interceptor
ajax.interceptors.request.use(
	config => config,
	error => Promise.reject(error)
);

// response interceptor
ajax.interceptors.response.use(
	async response => {
		const { data } = response;
		if (data.code !== 200) {
			return Promise.reject(data);
		}
		return Promise.resolve(data);
	},
	async error => {
		debugger;
		const { response } = error;
		const responseCode = Number(response?.data?.code || 0);
		const handler = CODE_HANDLER_MAP[responseCode];
		handler && handler();
		return Promise.reject(error);
	}
);

export function logError(msg) {
	UI.message.error(msg);
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
