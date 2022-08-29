/* makeLanguage */
function m(zhCN, enUS) {
	return [zhCN, enUS];
}
module.exports = {
	logout: m("退出", "logout"),
	"tips.0": m("未知错误", "unknown"),
	"tips.404": m("请求的资源不存在", "not found"),
	/* tips */
	welcome: m("欢迎", "welcome"),
	"welcome.back": m("欢迎回来", "welcome back"),
	"login.title": m("Toolbox", "Toolbox"),
	/* system */
	BackHome: m("回到主页", "Back Home"),
	notFoundTips: m(
		"对不起，没有找到您要访问的页面",
		"Sorry, you don't have access to this page."
	),
	"layouts.usermenu.dialog.title": m("信息", "Message"),
	"layouts.usermenu.dialog.content": m(
		"您确定要注销吗？",
		"Are you sure you would like to logout?"
	),
	"layouts.userLayout.title": m(
		"个人项目，仅供交流学习",
		"Individual project for exchange study only"
	),
	/*  */
	"user.login.username": m("用户名", "username"),
	"user.login.password": m("密码", "password"),
	"user.login.email.placeholder": m("邮箱", "Email"),
	"user.login.password.placeholder": m("密码", "password"),
	"user.login.message-invalid-credentials": m(
		"邮箱或密码错误",
		"Invalid email or password"
	),
	"user.login.message-invalid-verification-code": m(
		"验证码错误",
		"Invalid verification code"
	),
	"user.login.tab-login-credentials": m("账户密码登录", "Credentials"),
	"user.login.tab-login-mobile": m("手机号登录", "Mobile number"),
	"user.login.mobile.placeholder": m("请输入手机号", "Mobile number"),
	"user.login.mobile.verification-code.placeholder": m(
		"验证码",
		"Verification code"
	),
	"user.login.remember-me": m("自动登录", "Remember me"),
	"user.login.forgot-password": m("忘记密码", "Forgot your password?"),
	"user.login.sign-in-with": m("其他登录方式", "Sign in with"),
	"user.login.signup": m("注册账户", "Sign up"),
	"user.login.login": m("登录", "Login"),
	/* user.register */
	"user.register.register": m("注册", "Register"),
	"user.register.email.placeholder": m("邮箱", "Email"),
	"user.register.password.placeholder": m(
		"请至少输入 6 个字符。请不要使用容易被猜到的密码。",
		"Please enter at least 6 characters. Please do not use passwords that are easy to guess.  "
	),
	"user.register.password.popover-message": m(
		"请至少输入 6 个字符。请不要使用容易被猜到的密码。",
		"Please enter at least 6 characters. Please do not use passwords that are easy to guess. "
	),
	"user.register.confirm-password.placeholder": m(
		"确认密码",
		"Confirm password"
	),
	"user.register.get-verification-code": m("获取验证码", "Get code"),
	"user.register.sign-in": m("使用已有账户登录", "Already have an account?"),
	"user.register-result.msg": m(
		"你的账户：{email} 注册成功",
		"Account：registered at {email}"
	),
	"user.register-result.activation-email": m(
		"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",
		"The activation email has been sent to your email address and is valid for 24 hours. Please log in to the email in time and click on the link in the email to activate the account."
	),
	"user.register-result.back-home": m("返回首页", "Back to home"),
	"user.register-result.view-mailbox": m("查看邮箱", "View mailbox"),
	"user.email.required": m("请输入邮箱地址！", "Please enter your email!"),
	"user.email.wrong-format": m(
		"邮箱地址格式错误！",
		"The email address is in the wrong format!"
	),
	"user.email.required": m("请输入邮箱地址", "Please enter email address"),
	"user.password.required": m("请输入密码！", "Please enter your password!"),
	"user.password.twice.msg": m(
		"两次输入的密码不匹配!",
		"The passwords entered twice do not match!"
	),
	"user.password.strength.msg": m(
		"密码强度不够 ",
		"The password is not strong enough"
	),
	"user.password.strength.strong": m("强度：强", "Strength: strong"),
	"user.password.strength.medium": m("强度：中", "Strength: medium"),
	"user.password.strength.low": m("强度：低", "Strength: low"),
	"user.password.strength.short": m("强度：太短", "Strength: too short"),
	"user.confirm-password.required": m(
		"请确认密码！",
		"Please confirm your password!"
	),
	"user.phone-number.required": m(
		"请输入正确的手机号",
		"Please enter your phone number!"
	),
	"user.phone-number.wrong-format": m(
		"手机号格式错误！",
		"Please enter a valid phone number"
	),
	"user.verification-code.required": m(
		"请输入验证码！",
		"Please enter the verification code!"
	)
};
