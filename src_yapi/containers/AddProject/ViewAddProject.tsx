import constants from "ysrc/utils/variable";
import { handlePath, pickRandomProperty } from "ysrc/utils/common";

import "./Addproject.scss";
import { defineComponent } from "vue";
import {
	AllWasWell,
	defItem,
	FormRules,
	pickValueFrom,
	UI,
	validateForm,
	_
} from "@ventose/ui";
import LazySvg from "ysrc/components/LazySvg/LazySvg";
import { State_App } from "ysrc/state/State_App.jsx";
import { Methods_App } from "ysrc/state/State_App";
import { API } from "../../api/index";

const formItemLayout = {
	labelCol: {
		lg: { span: 3 },
		xs: { span: 24 },
		sm: { span: 6 }
	},
	wrapperCol: {
		lg: { span: 21 },
		xs: { span: 24 },
		sm: { span: 14 }
	},
	className: "form-item"
};

export default defineComponent({
	props: {
		/* Dialog 默认传入参数 */
		options: {
			type: Object,
			default() {
				return { __elId: false };
			}
		}
	},
	setup() {
		return { State_App };
	},
	data() {
		const vm = this;
		return {
			dataXItem: {
				...defItem({
					value: vm.options.groupId || "",
					prop: "group_id",
					label: "所属分组",
					placeholder: "请选择项目所属的分组",
					itemType: "Select",
					options: [],
					rules: [FormRules.required("请选择项目所属的分组!")],
					once() {
						vm.$watch(
							"State_App.groupList",
							groupList => {
								vm.dataXItem.group_id.options = _.map(groupList, i => {
									return {
										label: i.group_name,
										value: String(i._id),
										disabled: !["dev", "owner", "admin"].includes(i.role)
									};
								});
							},
							{ immediate: true }
						);
					}
				}),
				...defItem({
					itemType: "Input",
					label: "项目名称",
					prop: "name",
					value: "",
					rules: [
						FormRules.required("请输入项目名称"),
						FormRules.custom({
							msg: "",
							name: "",
							trigger: "",
							/* 可以根据校验修改提示信息 */
							validator(value, { configs, rule }) {
								const type = "项目";
								// 返回字符串长度，汉字计数为2
								const strLength = str => {
									let length = 0;
									for (let i = 0; i < str.length; i++) {
										str.charCodeAt(i) > 255 ? (length += 2) : length++;
									}
									return length;
								};

								const len = value ? strLength(value) : 0;
								if (len > constants.NAME_LIMIT) {
									rule.msg =
										"请输入" +
										type +
										"名称，长度不超过" +
										constants.NAME_LIMIT +
										"字符(中文算作2字符)!";
									return FormRules.FAIL;
								} else if (len === 0) {
									rule.msg =
										"请输入" +
										type +
										"名称，长度不超过" +
										constants.NAME_LIMIT +
										"字符(中文算作2字符)!";
									return FormRules.FAIL;
								} else {
									return FormRules.SUCCESS;
								}
							}
						})
					]
				}),
				...defItem({
					value: "",
					prop: "basepath",
					label: defItem.labelWithTips({
						label: "基本路径",
						tips: "接口基本路径，为空是根路径",
						icon: <LazySvg icon="question" />
					}),
					placeholder: "接口基本路径，为空是根路径",
					rules: [FormRules.required("请输入项目基本路径!")]
				}),
				...defItem({
					value: "",
					prop: "desc",
					label: "描述",
					isTextarea: true,
					placeholder: "描述不超过144字!",
					showCount: true,
					maxlength: 144
				}),
				...defItem({
					itemType: "RadioGroup",
					value: "private",
					prop: "project_type",
					label: "权限",
					options: [
						{
							label: (
								<span class="flex">
									<LazySvg icon="lockStrok" />
									<span>私有</span>
								</span>
							),
							value: "private"
						},
						{
							label: (
								<span class="flex">
									<LazySvg icon="unlock" />
									<span>公开</span>
								</span>
							),
							value: "public"
						}
					]
				})
			},
			configs: {
				btn_addProject: {
					text: "创建项目",
					type: "primary",
					icon: <LazySvg icon="add" />,
					async onClick() {}
				}
			},
			state: {
				groupList: []
			}
		};
	},
	mounted() {
		this.options.vm = this;
		this.init();
	},

	methods: {
		async init() {
			Methods_App.setBreadcrumb([{ name: "新建项目" }]);
			if (!State_App.currGroup._id) {
				await Methods_App.fetchGroupList();
			}
			if (State_App.groupList.length === 0) {
				return null;
			}
		},
		async submit() {
			const vm = this;
			// 确认添加项目
			try {
				const validateResults = await validateForm(vm.dataXItem);
				if (AllWasWell(validateResults)) {
					const formData = pickValueFrom(vm.dataXItem);
					formData.icon = constants.PROJECT_ICON[0];
					formData.color = pickRandomProperty(constants.PROJECT_COLOR);
					const { data } = await API.project.addProject(formData);
					UI.notification.success("创建成功! ");
					return true;
				} else {
					throw new Error("未通过验证");
				}
			} catch (e) {
				console.error(e);
			}
		},
		handlePath(e) {
			let val = e.target.value;
			this.props.form.setFieldsValue({
				basepath: handlePath(val)
			});
		}
	},
	render() {
		return (
			<div class="g-row flex1 height100">
				<div class="g-row m-container">
					<xForm
						class="flex vertical"
						labelStyle={{ "min-width": "120px", width: "unset" }}>
						{_.map(this.dataXItem, (configs, prop) => {
							return (
								<>
									<xGap t="10" />
									<xItem configs={configs} />
								</>
							);
						})}
					</xForm>
				</div>
			</div>
		);
	}
});
