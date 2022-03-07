import { _ } from "@ventose/ui";

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
