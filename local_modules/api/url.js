import { _ } from "@ventose/ui";
import $ from "jquery";

const auth = "/auth";
const version = __URL_API_VERSION;

const prefixAuth = `${version}${auth}`;
const prefixVersion = `${version}`;
export const URL = {
	test: () => `${__URL_API_BASE}/`,
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
