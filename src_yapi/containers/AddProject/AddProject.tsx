import { addProject } from "../../reducer/modules/project.js";
import { fetchGroupList } from "../../reducer/modules/group.js";

import constants from "ysrc/utils/variable";
import { handlePath, pickRandomProperty } from "ysrc/utils/common";

import "./Addproject.scss";
import { defineComponent } from "vue";
import { defItem, FormRules, UI, _ } from "@ventose/ui";
import LazySvg from "../../components/LazySvg/LazySvg.jsx";
import { State_App } from "ysrc/state/State_App.jsx";
import { Methods_App } from "ysrc/state/State_App";

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
	setup() {
		return { State_App };
	},
	data() {
		const vm = this;
		return {
			dataXItem: {
				...defItem({
					value: "",
					itemType: "Input",
					prop: "name",
					label: "项目名称",
					rules: [
						FormRules.required("请输入项目名称"),
						FormRules.custom({
							msg() {
								return "old tips";
							},
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
					prop: "group",
					label: "所属分组",
					placeholder: "请选择项目所属的分组",
					itemType: "Select",
					options: [],
					rules: [FormRules.required("请选择项目所属的分组!")],
					once() {
						vm.$watch(
							"State_App.groupList",
							groupList => {
								vm.dataXItem.group.options = _.map(groupList, i => {
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
					max: 144
				})
			},
			configs: {
				btn_addProject: {
					text: "创建项目",
					type: "primary",
					icon: <LazySvg icon="add" />,
					async onClick() {
						await _.sleep(3000);
						vm.handleOk();
					}
				}
			},
			state: {
				groupList: []
			}
		};
	},
	mounted() {
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
		handlePath(e) {
			let val = e.target.value;
			this.props.form.setFieldsValue({
				basepath: handlePath(val)
			});
		},
		// 确认添加项目
		handleOk(e) {
			const { form, addProject } = this.props;
			e.preventDefault();
			form.validateFields((err, values) => {
				if (!err) {
					values.group_id = values.group;
					values.icon = constants.PROJECT_ICON[0];
					values.color = pickRandomProperty(constants.PROJECT_COLOR);
					addProject(values).then(res => {
						if (res.payload.data.errcode == 0) {
							form.resetFields();
							UI.notification.success("创建成功! ");
							this.props.history.push(
								"/project/" + res.payload.data.data._id + "/interface/api"
							);
						}
					});
				}
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
					<aRow class="mt20">
						<aCol sm={{ offset: 6 }} lg={{ offset: 3 }}>
							<xButton configs={this.configs.btn_addProject} />
						</aCol>
					</aRow>
				</div>
			</div>
		);
	}
});
