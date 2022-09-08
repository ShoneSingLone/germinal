import { _ } from "lsrc/ui";

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
const logError = ({ error, response }: t_error_info) => {
	/* @ts-ignore */
	_.doNothing("error: ", error, "response: ", response);
};

export const SuccessOrFail = async (options: i_success_or_fail) => {
	const promise = options.promise || false;
	const request = options.request || false;
	/* @ts-ignore */
	const success = options.success || _.doNothing;
	const fail = options.fail || logError;
	let error: any = false;
	let resSuccess, resError;
	try {
		if (_.isFunction(request)) {
			resSuccess = await success(await request());
		} else if (promise) {
			resSuccess = await success(await promise());
		} else {
			console.error(
				"SuccessOrFail 未提供 request 或者 promise 或者不是可运行回调"
			);
		}
	} catch (error) {
		await fail(error);
		resError = error;
	}

	if (resError) {
		throw resError;
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
