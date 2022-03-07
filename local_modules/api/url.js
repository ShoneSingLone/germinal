import { _ } from "@ventose/ui";

window.URL_API_VERSION = "/v1";
// window.URL_BASE = "app.ventose.xyz";
window.URL_BASE = "www.ventose.xyz/https/book";
window.URL_API_BASE = `https://${window.URL_BASE}`;
window.URL_WS_BASE = `wss://www.ventose.xyz/ws`;

const auth = "/auth";
const version = window.URL_API_VERSION;
export const URL = {
	regster: () => `${version}/reg`,
	Login: () => `${version}/login`,
	/*  */
	Logout: prefix => `${auth}${prefix}/logout`,
	ForgePassword: prefix => `${auth}${prefix}/forge-password`,
	Register: prefix => `${auth}${prefix}/register`,
	twoStepCode: prefix => `${auth}${prefix}/2step-code`,
	SendSms: prefix => `${prefix}/account/sms`,
	SendSmsErr: prefix => `${prefix}/account/sms_err`,
	UserInfo: prefix => `${prefix}/api/user/info`,
	UserMenu: prefix => `${prefix}/api/user/nav`
};
