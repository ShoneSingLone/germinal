<template>
	<form>
		<!-- 用户名 -->
		<xItem
			v-model="data.email"
			:configs="configsForm.email"
			autocomplete="email" />
		<xGap t="20" />
		<!-- 密码 -->
		<xItem
			v-model="data.password"
			:configs="configsForm.password"
			autocomplete="current-password" />
		<div class="item-wrapper">
			<xButton :configs="configsSubmit" />
		</div>
	</form>
</template>

<script lang="jsx">
import "./Login.scss";
import { defineComponent } from "vue";
import {
	_,
	UI,
	defItem,
	EVENT_TYPE,
	validateForm,
	AllWasWell,
	lStorage,
	State_UI
} from "@ventose/ui";

import FormRules from "lsrc/components/FormRules";
import { Mutation_App, State_App } from "ysrc/state/State_App";

const { $t } = State_UI;

const formItemStyle = {
	marginBottom: ".16rem"
};

const changeHeight = {
	height: ".42rem"
};

async function onSubmitClick() {
	try {
		const activeTabKey = State_App.loginWrapActiveKey;
		if (!activeTabKey) {
			throw new Error("miss activeTabKey");
		}
		const currentFormProp = TAB_KEYS_MAP[activeTabKey];
		console.log(State_Login);
		console.log(State_Login.activeTabKey);
		const currentFormConfigs = State_Login[currentFormProp];
		const validateResults = await validateForm(currentFormConfigs);
		if (AllWasWell(validateResults)) {
			await Actions_App.Login(State_Login.data);
			handleLoginSuccess();
		} else {
			throw new Error("未通过验证");
		}
	} catch (e) {
		handleLoginFail(e);
		console.error(e);
	}
}

export default defineComponent({
	props: {
		form: { type: Object },
		history: { type: Object },
		isLDAP: { type: Boolean }
	},
	setup() {
		return {
			Mutation_App
		};
	},
	data() {
		return {
			loginType: "ldap",
			data: {
				email: lStorage.email || "",
				password: lStorage.password || ""
			},
			configsForm: {
				...defItem({
					prop: "email",
					size: "large",
					/* render的时候重新获取 */
					placeholder: () => $t("user.login.email.placeholder").label,
					rules: [
						FormRules.required(
							() => $t("user.email.required").label,
							[EVENT_TYPE.blur]
						),
						FormRules.email()
					]
				}),
				...defItem({
					prop: "password",
					isPassword: true,
					size: "large",
					/* render的时候重新获取 */
					placeholder: () => $t("user.login.password.placeholder").label,
					rules: [
						FormRules.required(
							() => $t("user.password.required").label,
							[EVENT_TYPE.blur]
						)
					]
				})
			},
			configsSubmit: {
				size: "large",
				type: "primary",
				class: "login-button flex center",
				text: () => $t("user.login.login").label,
				onClick: onSubmitClick
			}
		};
	},
	methods: {
		handleSubmit(e) {
			e.preventDefault();
			const form = this.form;
			form.validateFields((err, values) => {
				if (!err) {
					if (this.isLDAP && this.loginType === "ldap") {
						this.loginLdapActions(values).then(res => {
							if (res.payload.data.errcode == 0) {
								this.history.replace("/group");
								UI.notification.success("登录成功! ");
							}
						});
					} else {
						this.loginActions(values).then(res => {
							if (res.payload.data.errcode == 0) {
								this.history.replace("/group");
								UI.notification.success("登录成功! ");
							}
						});
					}
				}
			});
		},
		handleFormLayoutChange: e => {
			this.loginType = e.target.value;
		}
	},
	renderasdfasdf() {
		const { getFieldDecorator } = this.form;

		const { isLDAP } = State_App;

		const emailRule =
			this.loginType === "ldap"
				? {}
				: {
						required: true,
						message: "请输入正确的email!",
						pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/
				  };
		return (
			<aForm onSubmit={this.handleSubmit}>
				{/* 登录类型 (普通登录／LDAP登录) */}
				{isLDAP && (
					<FormItem>
						<RadioGroup
							defaultValue="ldap"
							onChange={this.handleFormLayoutChange}>
							<Radio value="ldap">LDAP</Radio>
							<Radio value="normal">普通登录</Radio>
						</RadioGroup>
					</FormItem>
				)}
				{/* 用户名 (Email) */}
				<FormItem style={formItemStyle}>
					{getFieldDecorator("email", { rules: [emailRule] })(
						<Input
							style={changeHeight}
							prefix={<Icon type="user" style={{ fontSize: 13 }} />}
							placeholder="Email"
						/>
					)}
				</FormItem>

				{/* 密码 */}
				<FormItem style={formItemStyle}>
					{getFieldDecorator("password", {
						rules: [{ required: true, message: "请输入密码!" }]
					})(
						<Input
							style={changeHeight}
							prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
							type="password"
							placeholder="Password"
						/>
					)}
				</FormItem>

				{/* 登录按钮 */}
				<FormItem style={formItemStyle}>
					<Button
						style={changeHeight}
						type="primary"
						htmlType="submit"
						className="login-form-button">
						登录
					</Button>
				</FormItem>
			</aForm>
		);
	}
});
</script>

<style></style>
