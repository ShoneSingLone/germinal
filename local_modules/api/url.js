import { _ } from "@ventose/ui";

window.URL_API_VERSION = "/v1";
window.URL_BASE = "www.singlone.work/https/book";
window.URL_API_BASE = `https://${window.URL_BASE}`;
window.URL_WS_BASE = `wss://www.singlone.work/ws`;

const auth = "/auth";
const version = window.URL_API_VERSION;
export const URL = {
	test: () => `${window.URL_API_BASE}/`,
	regster: () => `${window.URL_API_BASE}${version}/reg`,
	Login: () => `${window.URL_API_BASE}${version}/login`,
	VerifyEmail: () => `${window.URL_API_BASE}${version}/verify_email`,
	/*  */
	Logout: () => `${window.URL_API_BASE}${auth}${version}/logout`,
	User: () => `${window.URL_API_BASE}${auth}${version}/user`,
	/*  */
	/*  */
	/*  */
	/*  */
	/*  */
	ForgePassword: prefix => `${auth}${prefix}/forge-password`,
	Register: prefix => `${auth}${prefix}/register`,
	twoStepCode: prefix => `${auth}${prefix}/2step-code`,
	SendSms: prefix => `${prefix}/account/sms`,
	SendSmsErr: prefix => `${prefix}/account/sms_err`,
	UserInfo: prefix => `${prefix}/api/user/info`,
	UserMenu: prefix => `${prefix}/api/user/nav`
};
