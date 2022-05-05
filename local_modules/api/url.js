import { _ } from "@ventose/ui";

window.URL_API_VERSION = "/v1";
window.URL_BASE = "www.singlone.work";
window.URL_API_BASE = `https://${window.URL_BASE}/s/api`;
window.URL_WS_BASE = `wss://www.singlone.work/ws`;

const auth = "/auth";
const version = window.URL_API_VERSION;

const prefixAuth = `${version}${auth}`;
const prefixVersion = `${version}`;
export const URL = {
	test: () => `${window.URL_API_BASE}/`,
	regster: () => `${prefixVersion}/reg`,
	Login: () => `${prefixVersion}/login`,
	VerifyEmail: () => `${prefixVersion}/verify_email`,
	/*  */
	Logout: () => `${prefixAuth}/logout`,
	User: () => `${prefixAuth}/user`,
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
