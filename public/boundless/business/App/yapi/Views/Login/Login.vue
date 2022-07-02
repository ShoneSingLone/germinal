<template>
	<div class="background" />
	<div id="demo-wrapper">
		<aCard class="content-wrapper">
			<xForm
				class="flex vertical"
				:label-style="{ 'min-width': '100px', width: 'unset' }">
				<template v-for="prop in Object.keys(formData)" :key="prop">
					<xGap t="10" />
					<xItem v-model="formData[prop]" :configs="formItems[prop]" />
				</template>
				<xGap t="20" />
				<xButton :configs="configs_submitBtn" class="center" />
			</xForm>
		</aCard>
	</div>
</template>

<script>
async function sfc({
	UI,
	defCol,
	defColActions,
	defColActionsBtnlist,
	defDataGridOption,
	defineComponent,
	VNodeRender,
	defItem,
	setCSSVariables,
	AllWasWell,
	validateForm,
	compileHtmlAndGetVNode,
	setDocumentTitle,
	_,
	hooks,
	h
}) {
	const { useCSS } = hooks;
	return defineComponent({
		TEMPLATE_PLACEHOLDER,
		setup() {},
		data() {
			const vm = this;
			return {
				isShowTable: false,
				formItems: {
					...defItem({
						labelVNodeRender(configs, className) {
							return VNodeRender.labelTips({
								label: $t("用户名").label,
								prop: configs.prop,
								className,
								popContent: h(
									"ul",
									null,
									[
										$t(`只能由英文字母(区分大小写)、数字和特殊字符@.\\_-组成`)
											.label,
										$t(`不能以"op_svc"、"paas_op"或\\开头`).label,
										$t(`不能以\\结尾`).label,
										$t(`不能命名为"admin"、"power_user"或"guest"`).label,
										$t(`长度范围是4到32位`).label
									].map(content => h("li", null, content))
								)
							});
						},
						prop: "username",
						rules: [
							FormRules.required(),
							FormRules.custom({
								validator(value, { rule }) {
									if (!RegexFn.username0().test(value)) {
										rule.msg = $t(
											`只能由英文字母(区分大小写)、数字和特殊字符@.\\_-组成`
										).label;
										return FormRules.FAIL;
									}
									if (/^(op_svc|paas_op|\\)/.test(value)) {
										rule.msg = $t(`不能以"op_svc"、"paas_op"或\\开头`).label;
										return FormRules.FAIL;
									}
									if (/(\\)$/.test(value)) {
										rule.msg = $t(`不能以\\结尾`).label;
										return FormRules.FAIL;
									}
									if (/(admin|power_user|guest)/.test(value)) {
										rule.msg = $t(`不能命名为 admin、power_user或guest`).label;
										return FormRules.FAIL;
									}
									const valueLength = String(value).length;
									if (valueLength < 4 || valueLength > 32) {
										rule.msg = $t(`长度范围是4到32位`).label;
										return FormRules.FAIL;
									}
									return FormRules.SUCCESS;
								}
							})
						]
					}),
					...defItem({
						labelVNodeRender(configs, className) {
							return VNodeRender.labelTips({
								label: $t("密码").label,
								prop: configs.prop,
								className,
								popContent: compileHtmlAndGetVNode(
									`<ul>${[
										$t(`8~32个字符`).label,
										$t(
											`至少包含以下字符中的3种:大写字母、小写字母、数字、特殊字符\`~!@#\$%\^\&\*\(\)-_=+\[\{\]\}\|;: \'\\\",\.\/\?`
										).label,
										$t(`必须包含特殊字符`).label,
										$t(`不允许包含正序或逆序用户名`).label
									]
										.map(content => `<li>${content}</li>`)
										.join("")}</ul>`,
									{}
								)
							});
						},
						prop: "password",
						isPassword: true,
						rules: [
							FormRules.required(),
							FormRules.custom({
								validator(value, { rule }) {
									/*
          8~32个字符
          至少包含以下字符中的3种:大写字母、小写字母、数字、特殊字符`~!@#$%^&*()-_=+[{]}|;:'\",./?
          必须包含特殊字符
          不允许包含正序或逆序用户名
          */
									const valueLength = String(value).length;
									if (valueLength < 8 || valueLength > 32) {
										rule.msg = $t(`8~32个字符`).label;
										return FormRules.FAIL;
									}

									const regChart = () =>
										/[}{*`~!@\#\$\&\(\)\-\_\=\+\[\]\|;:'\",\.\/\?%\^]/;

									function isAtLeast3Type() {
										let countType = 0;

										if (/[A-Z]/.test(value)) {
											countType++;
										}
										if (/[a-z]/.test(value)) {
											countType++;
										}
										if (/\d/.test(value)) {
											countType++;
										}

										if (regChart().test(value)) {
											countType++;
										}
										return countType > 2;
									}

									if (!isAtLeast3Type()) {
										rule.msg = $t(
											`至少包含以下字符中的3种:大写字母、小写字母、数字、特殊字符\`~!@#\$%\^\&\*\(\)-_=+\(\[\{\]\}\)\|;: \'\\\",\.\/\?`
										).label;
										return FormRules.FAIL;
									}
									if (!regChart().test(value)) {
										rule.msg = $t(`必须包含特殊字符`).label;
										return FormRules.FAIL;
									}

									const username = vm.formData.username;
									const usernameReverse = _.reverse(username.split("")).join(
										""
									);
									if (
										new RegExp(`(${username}|${usernameReverse})`).test(value)
									) {
										rule.msg = $t(`不允许包含正序或逆序用户名`).label;
										return FormRules.FAIL;
									}
									return FormRules.SUCCESS;
								}
							})
						]
					}),
					...defItem({
						label: $t("确认密码").label,
						prop: "passwordConfirm",
						isPassword: true,
						rules: [
							FormRules.required(),
							FormRules.custom({
								msg: $t("两次密码输入不一致").label,
								async validator() {
									if (vm.formData.password !== vm.formData.passwordConfirm) {
										return FormRules.FAIL;
									} else {
										return FormRules.SUCCESS;
									}
								}
							})
						]
					})
				},
				formData: {
					username: "",
					password: "",
					passwordConfirm: ""
				},
				configs_submitBtn: {
					type: "primary",
					text: $t("注册").label,
					async onClick() {
						try {
							const validateResults = await validateForm(vm.formItems);
							if (AllWasWell(validateResults)) {
								await vm.handleLoginSuccess();
							} else {
								throw new Error("未通过验证");
							}
						} catch (e) {
							console.error(e);
						}
					}
				},

				configs_query: {
					data: {
						username: "",
						type: [],
						timeStartEnd: [],
						endTime: "",
						startTime: ""
					},
					dataXItem: {
						...defItem({
							prop: "type",
							label: $t("审批类型").label,
							itemType: "Select",
							options: [],
							mode: "multiple",
							maxTagCount: 1,
							maxTagTextLength: 10,
							style: { width: "200px" }
						}),
						...defItem({
							prop: "username",
							label: $t("用户名").label,
							placeholder: $t("请输入待查询的用户名").label
						})
					}
				},
				configs_table: defDataGridOption({
					async queryTableList() {
						await _.sleep(1000);
					},
					// dataSource: [ { foo: "a", bar: "b" }, { foo: "a", bar: "c" }, { foo: "d", bar: "c" } ],
					dataSource: new Array(10).fill({ foo: "a", bar: "b" }),
					columns: {
						...defCol({ label: $t("foo").label, prop: "foo" }),
						...defCol({ label: $t("bar").label, prop: "bar" }),
						...defColActions({
							renderCell({ record, index }) {
								return defColActionsBtnlist({
									fold: 2,
									btns: [
										{
											text: $t("bbbbb").label,
											onClick: async () => {
												await _.sleep(1000);
											}
										},
										{
											text: $t("ccccc").label,
											onClick: async () => {
												await _.sleep(1000);
											}
										},
										{
											text: $t("ddddd").label,
											onClick: async () => {
												await _.sleep(1000);
											}
										}
									]
								});
							}
						})
					}
				})
			};
		},
		async mounted() {
			/* 背景图地址需要路径参数 */
			this.setQuerySelectOptions();
			await _.sleep(1000 * 1);
			this.isShowTable = true;
		},
		methods: {
			async handleLoginSuccess() {
				this.handleLoginSuccess.count = this.handleLoginSuccess.count || 1;

				try {
					if (this.handleLoginSuccess.count++ % 2 === 0) {
						throw new Error(this.handleLoginSuccess.count);
					}
					UI.notification.success({ message: $t("成功").label });
				} catch (e) {
					UI.notification.error({ message: $t("失败").label });
				}
			},
			async setQuerySelectOptions() {
				this.configs_query.dataXItem.type.options = [
					{
						label: $t("AAA").label,
						value: "AAA"
					},
					{
						label: $t("BBB").label,
						value: "BBB"
					}
				];
			}
		}
	});
}
</script>
