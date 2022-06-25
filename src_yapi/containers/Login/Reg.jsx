import { defineComponent } from "vue";
import { Mutation_App } from "ysrc/state/State_App";

const formItemStyle = {
	marginBottom: ".16rem"
};

const changeHeight = {
	height: ".42rem"
};

export const RegForm = defineComponent({
	props: {
		form: {
			type: Object
		},
		history: {
			type: Object
		},
		regActions: {
			type: Function
		}
	},
	setup() {
		return {
			Mutation_App
		};
	},
	data() {
		return {
			confirmDirty: false
		};
	},
	methods: {
		handleSubmit(e) {
			e.preventDefault();
			const form = this.props.form;
			form.validateFieldsAndScroll((err, values) => {
				if (!err) {
					this.props.regActions(values).then(res => {
						if (res.payload.data.errcode == 0) {
							this.props.history.replace("/group");
							UI.message.success("注册成功! ");
						}
					});
				}
			});
		},
		checkPassword(rule, value, callback) {
			const form = this.props.form;
			if (value && value !== form.getFieldValue("password")) {
				callback("两次输入的密码不一致啊!");
			} else {
				callback();
			}
		},
		checkConfirm(rule, value, callback) {
			const form = this.props.form;
			if (value && this.state.confirmDirty) {
				form.validateFields(["confirm"], { force: true });
			}
			callback();
		}
	},
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<aForm onSubmit={this.handleSubmit}>
				{/* 用户名 */}
				<aFormItem style={formItemStyle}>
					{getFieldDecorator("userName", {
						rules: [{ required: true, message: "请输入用户名!" }]
					})(
						<aInput
							style={changeHeight}
							prefix={<aIcon type="user" style={{ fontSize: 13 }} />}
							placeholder="Username"
						/>
					)}
				</aFormItem>

				{/* Emaiil */}
				<aFormItem style={formItemStyle}>
					{getFieldDecorator("email", {
						rules: [
							{
								required: true,
								message: "请输入email!",
								pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/
							}
						]
					})(
						<aInput
							style={changeHeight}
							prefix={<aIcon type="mail" style={{ fontSize: 13 }} />}
							placeholder="Email"
						/>
					)}
				</aFormItem>

				{/* 密码 */}
				<aFormItem style={formItemStyle}>
					{getFieldDecorator("password", {
						rules: [
							{
								required: true,
								message: "请输入密码!"
							},
							{
								validator: this.checkConfirm
							}
						]
					})(
						<aInput
							style={changeHeight}
							prefix={<aIcon type="lock" style={{ fontSize: 13 }} />}
							type="password"
							placeholder="Password"
						/>
					)}
				</aFormItem>

				{/* 密码二次确认 */}
				<aFormItem style={formItemStyle}>
					{getFieldDecorator("confirm", {
						rules: [
							{
								required: true,
								message: "请再次输入密码密码!"
							},
							{
								validator: this.checkPassword
							}
						]
					})(
						<aInput
							style={changeHeight}
							prefix={<aIcon type="lock" style={{ fontSize: 13 }} />}
							type="password"
							placeholder="Confirm Password"
						/>
					)}
				</aFormItem>

				{/* 注册按钮 */}
				<aFormItem style={formItemStyle}>
					<aButton
						style={changeHeight}
						type="primary"
						htmlType="submit"
						className="login-form-button">
						注册
					</aButton>
				</aFormItem>
			</aForm>
		);
	}
});
