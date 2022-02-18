import { _ } from "@ventose/ui";

interface i_success_or_fail {
	/*请求函数*/
	promise?: () => any;

	/*请求函数*/
	request?: () => any;

	/*处理成功响应*/
	success?: (data: any) => any;

	/*处理错误响应*/
	fail?: (info: t_error_info) => any;
}

type t_error_info = {
	error: any;
	response: any;
};

export const result = {
	success(res) {
		return {
			status: 200,
			result: res
		};
	}
};

const doNothing = (data: any) => data;
const logError = ({ error, response }: t_error_info) => {
	console.log("error: ", error, "response: ", response);
};

export const SuccessOrFail = async (options: i_success_or_fail) => {
	const promise = options.promise || false;
	const request = options.request || false;
	const success = options.success || doNothing;
	const fail = options.fail || logError;
	let error: any = false;
	let resSuccess;
	try {
		if (_.isFunction(request)) {
			const response: any = await request();
			await (async () => {
				if (response.mainTitle) {
					/* 没有常规的code信息 */
					await success(response);
					return;
				}
				const isCodeOk = ["200"].includes(String(response?.code));
				if (isCodeOk) {
					resSuccess = await success(response);
					return;
				}
				error = { error: null, response };
				await fail(error);
			})();
		} else if (promise) {
			resSuccess = await success(await promise());
		} else {
			console.error(
				"SuccessOrFail 未提供 request 或者 promise 或者不是可运行回调"
			);
		}
	} catch (e) {
		error = { error: e, response: null };
		await fail(error);
	}
	if (error) {
		throw error;
	}
	return [resSuccess];
};

export const addQuery = (url, query) => {
	return (
		`${url}?` +
		_.map(query, (value, key) => {
			return `${key}=${value}`;
		}).join("&")
	);
};
