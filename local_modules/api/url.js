import { _ } from "@ventose/ui";

let _URL = {
	Login: "/auth/login",
	Logout: "/auth/logout",
	ForgePassword: "/auth/forge-password",
	Register: "/auth/register",
	twoStepCode: "/auth/2step-code",
	SendSms: "/account/sms",
	SendSmsErr: "/account/sms_err",
	UserInfo: "/api/user/info",
	UserMenu: "/api/user/nav"
};

const PREFIX_MAP = {
	User: "/api"
};

if (import.meta.env.MODE === "development") {
	_URL = _.reduce(
		_URL,
		(target, url, prop) => {
			const _url = (() => {
				const prefix = _.find(PREFIX_MAP, (value, prefix) =>
					new RegExp(`^${prefix}`).test(prop)
				);
				return prefix ? `${prefix}${url}` : url;
			})();
			target[prop] = _url;
			return target;
		},
		{}
	);
}

export const URL = _URL;
