import { _ } from "@ventose/ui";
export const URL = {
	regster: (prefix = "/v1") => `${prefix}/reg`,
	Login: (prefix = "/v1") => `${prefix}/login`,
	/*  */
	Logout: prefix => `${prefix}/auth/logout`,
	ForgePassword: prefix => `${prefix}/auth/forge-password`,
	Register: prefix => `${prefix}/auth/register`,
	twoStepCode: prefix => `${prefix}/auth/2step-code`,
	SendSms: prefix => `${prefix}/account/sms`,
	SendSmsErr: prefix => `${prefix}/account/sms_err`,
	UserInfo: prefix => `${prefix}/api/user/info`,
	UserMenu: prefix => `${prefix}/api/user/nav`
};
