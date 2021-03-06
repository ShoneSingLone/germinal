import {
	Form,
	Input,
	Switch,
	Select,
	Icon,
	Tooltip,
	Button,
	Row,
	Col,
	message,
	Card,
	Radio,
	Alert,
	Modal,
	Popover
} from "ant-design-vue";

import {
	updateProject,
	delProject,
	getProject,
	upsetProject
} from "../../../../reducer/modules/project";
import { setCurrGroup } from "../../../../reducer/modules/group";
import { fetchGroupList } from "../../../../reducer/modules/group.js";
import { setBreadcrumb } from "../../../../reducer/modules/user";

const { TextArea } = Input;

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
import constants from "ysrc/utils/variable";
const confirm = Modal.confirm;
import { nameLengthLimit, entries, trim, htmlFilter } from "../../../../common";
import "../Setting.scss";
import { _ } from "@ventose/ui";
import ProjectTag from "./ProjectTag.js";
// layout
const formItemLayout = {
	labelCol: {
		lg: { offset: 1, span: 3 },
		xs: { span: 24 },
		sm: { span: 6 }
	},
	wrapperCol: {
		lg: { span: 19 },
		xs: { span: 24 },
		sm: { span: 14 }
	},
	className: "form-item"
};

const Option = Select.Option;

@connect(
	state => {
		return {
			projectList: state.project.projectList,
			groupList: state.group.groupList,
			projectMsg: state.project.currProject,
			currGroup: state.group.currGroup
		};
	},
	{
		updateProject,
		delProject,
		getProject,
		setCurrGroup,
		upsetProject,
		fetchGroupList,
		setBreadcrumb
	}
)
@withRouter
class ProjectMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			protocol: "http://",
			projectMsg: {},
			showDangerOptions: false
		};
	}
	static propTypes = {
		projectId: PropTypes.number,
		form: PropTypes.object,
		updateProject: PropTypes.func,
		delProject: PropTypes.func,
		getProject: PropTypes.func,
		history: PropTypes.object,
		setCurrGroup: PropTypes.func,
		upsetProject: PropTypes.func,
		groupList: PropTypes.array,
		projectList: PropTypes.array,
		projectMsg: PropTypes.object,
		fetchGroupList: PropTypes.func,
		currGroup: PropTypes.object,
		setBreadcrumb: PropTypes.func
	};

	// ????????????
	handleOk = e => {
		e.preventDefault();
		const { form, updateProject, projectMsg, groupList } = this.props;
		form.validateFields((err, values) => {
			if (!err) {
				let { tag } = this.tag.state;
				// let tag = this.refs.tag;
				tag = tag.filter(val => {
					return val.name !== "";
				});
				let assignValue = Object.assign(projectMsg, values, { tag });

				values.protocol = this.state.protocol.split(":")[0];
				const group_id = assignValue.group_id;
				const selectGroup = _.find(groupList, item => {
					return item._id == group_id;
				});

				updateProject(assignValue)
					.then(res => {
						if (res.payload.data.errcode == 0) {
							this.props.getProject(this.props.projectId);
							message.success("????????????! ");

							// ???????????????????????????????????????????????????
							this.props.setCurrGroup(group_id);
							// this.$router.push({path:'/group'});
							let projectName = htmlFilter(assignValue.name);
							this.props.setBreadcrumb([
								{
									name: selectGroup.group_name,
									href: "/group/" + group_id
								},
								{
									name: projectName
								}
							]);
						}
					})
					.catch(() => {});
				form.resetFields();
			}
		});
	};

	tagSubmit = tag => {
		this.tag = tag;
	};

	showConfirm = () => {
		let that = this;
		confirm({
			title: "???????????? " + that.props.projectMsg.name + " ????????????",
			content: (
				<div
					style={{ marginTop: "10px", fontSize: "13px", lineHeight: "25px" }}>
					<Alert
						message="??????????????????????????????,?????????????????????????????????????????????????????????!"
						type="warning"
						banner
					/>
					<div style={{ marginTop: "16px" }}>
						<p style={{ marginBottom: "8px" }}>
							<b>????????????????????????????????????:</b>
						</p>
						<aInput id="project_name" size="large" />
					</div>
				</div>
			),
			onOk() {
				let groupName = trim(document.getElementById("project_name").value);
				if (that.props.projectMsg.name !== groupName) {
					message.error("??????????????????");
					return new Promise((resolve, reject) => {
						reject("error");
					});
				} else {
					that.props.delProject(that.props.projectId).then(res => {
						if (res.payload.data.errcode == 0) {
							message.success("????????????!");
							that.props.history.push(
								"/group/" + that.props.projectMsg.group_id
							);
						}
					});
				}
			},
			iconType: "delete",
			onCancel() {}
		});
	};

	// ?????????????????????????????????
	changeProjectColor = e => {
		const { _id, color, icon } = this.props.projectMsg;
		this.props
			.upsetProject({ id: _id, color: e.target.value || color, icon })
			.then(res => {
				if (res.payload.data.errcode === 0) {
					this.props.getProject(this.props.projectId);
				}
			});
	};
	// ???????????????????????????
	changeProjectIcon = e => {
		const { _id, color, icon } = this.props.projectMsg;
		this.props
			.upsetProject({ id: _id, color, icon: e.target.value || icon })
			.then(res => {
				if (res.payload.data.errcode === 0) {
					this.props.getProject(this.props.projectId);
				}
			});
	};

	// ????????????????????????????????????
	toggleDangerOptions = () => {
		// console.log(this.state.showDangerOptions);
		this.setState({
			showDangerOptions: !this.state.showDangerOptions
		});
	};

	async UNSAFE_componentWillMount() {
		await this.props.fetchGroupList();
		await Methods_App.setCurrGroup(this.props.projectMsg.group_id);
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { projectMsg, currGroup } = this.props;
		const mockUrl =
			location.protocol +
			"//" +
			location.hostname +
			(location.port !== "" ? ":" + location.port : "") +
			`/mock/${projectMsg._id}${projectMsg.basepath}+$??????????????????`;
		let initFormValues = {};
		const {
			name,
			basepath,
			desc,
			project_type,
			group_id,
			switch_notice,
			strice,
			is_json5,
			tag
		} = projectMsg;
		initFormValues = {
			name,
			basepath,
			desc,
			project_type,
			group_id,
			switch_notice,
			strice,
			is_json5,
			tag
		};

		const colorArr = entries(constants.PROJECT_COLOR);
		const colorSelector = (
			<RadioGroup
				onChange={this.changeProjectColor}
				value={projectMsg.color}
				class="color">
				{colorArr.map((item, index) => {
					return (
						<RadioButton
							key={index}
							value={item[0]}
							style={{
								backgroundColor: item[1],
								color: "#fff",
								fontWeight: "bold"
							}}>
							{item[0] === projectMsg.color ? <LazySvg icon="check" /> : null}
						</RadioButton>
					);
				})}
			</RadioGroup>
		);
		const iconSelector = (
			<RadioGroup
				onChange={this.changeProjectIcon}
				value={projectMsg.icon}
				class="icon">
				{constants.PROJECT_ICON.map(item => {
					return (
						<RadioButton key={item} value={item} style={{ fontWeight: "bold" }}>
							<aIcon type={item} />
						</RadioButton>
					);
				})}
			</RadioGroup>
		);
		const selectDisbaled =
			projectMsg.role === "owner" || projectMsg.role === "admin";
		return (
			<div>
				<div class="m-panel">
					<aRow class="project-setting">
						<aCol xs={6} lg={{ offset: 1, span: 3 }} class="setting-logo">
							<Popover
								placement="bottom"
								title={colorSelector}
								content={iconSelector}
								trigger="click"
								overlayClassName="change-project-container">
								<aIcon
									type={projectMsg.icon || "star-o"}
									class="ui-logo"
									style={{
										backgroundColor:
											constants.PROJECT_COLOR[projectMsg.color] ||
											constants.PROJECT_COLOR.blue
									}}
								/>
							</Popover>
						</aCol>
						<aCol xs={18} sm={15} lg={19} class="setting-intro">
							<h2 class="ui-title">
								{(currGroup.group_name || "") + " / " + (projectMsg.name || "")}
							</h2>
							{/* <p class="ui-desc">{projectMsg.desc}</p> */}
						</aCol>
					</aRow>
					<hr class="breakline" />
					<Form>
						<FormItem {...formItemLayout} label="??????ID">
							<span>{this.props.projectMsg._id}</span>
						</FormItem>
						<FormItem {...formItemLayout} label="????????????">
							{getFieldDecorator("name", {
								initialValue: initFormValues.name,
								rules: nameLengthLimit("??????")
							})(<aInput />)}
						</FormItem>
						<FormItem {...formItemLayout} label="????????????">
							{getFieldDecorator("group_id", {
								initialValue: initFormValues.group_id + "",
								rules: [
									{
										required: true,
										message: "??????????????????????????????!"
									}
								]
							})(
								<Select disabled={!selectDisbaled}>
									{this.props.groupList.map((item, index) => (
										<Option value={item._id.toString()} key={index}>
											{item.group_name}
										</Option>
									))}
								</Select>
							)}
						</FormItem>

						<FormItem
							{...formItemLayout}
							label={
								<span>
									??????????????????&nbsp;
									<aTooltip title="?????????????????????????????????">
										<LazySvg icon="question-circle-o" />
									</aTooltip>
								</span>
							}>
							{getFieldDecorator("basepath", {
								initialValue: initFormValues.basepath,
								rules: [
									{
										required: false,
										message: "?????????????????????! "
									}
								]
							})(<aInput />)}
						</FormItem>

						<FormItem
							{...formItemLayout}
							label={
								<span>
									MOCK??????&nbsp;
									<aTooltip title="?????????????????????????????????">
										<LazySvg icon="question-circle-o" />
									</aTooltip>
								</span>
							}>
							<aInput disabled value={mockUrl} onChange={() => {}} />
						</FormItem>

						<FormItem {...formItemLayout} label="??????">
							{getFieldDecorator("desc", {
								initialValue: initFormValues.desc,
								rules: [
									{
										required: false
									}
								]
							})(<TextArea rows={8} />)}
						</FormItem>

						<FormItem
							{...formItemLayout}
							label={
								<span>
									tag ??????&nbsp;
									<aTooltip title="?????? tag ?????????????????????">
										<LazySvg icon="question-circle-o" />
									</aTooltip>
								</span>
							}>
							<ProjectTag tagMsg={tag} ref={this.tagSubmit} />
							{/* <Tag tagMsg={tag} ref={this.tagSubmit} /> */}
						</FormItem>
						<FormItem
							{...formItemLayout}
							label={
								<span>
									mock????????????&nbsp;
									<aTooltip title="????????? mock ???????????? query???body form ?????????????????? json schema ????????????">
										<LazySvg icon="question-circle-o" />
									</aTooltip>
								</span>
							}>
							{getFieldDecorator("strice", {
								valuePropName: "checked",
								initialValue: initFormValues.strice
							})(<Switch checkedChildren="???" unCheckedChildren="???" />)}
						</FormItem>
						<FormItem
							{...formItemLayout}
							label={
								<span>
									??????json5&nbsp;
									<aTooltip title="????????????????????? body ?????????????????? json ??????">
										<LazySvg icon="question-circle-o" />
									</aTooltip>
								</span>
							}>
							{getFieldDecorator("is_json5", {
								valuePropName: "checked",
								initialValue: initFormValues.is_json5
							})(<Switch checkedChildren="???" unCheckedChildren="???" />)}
						</FormItem>
						<FormItem {...formItemLayout} label="????????????????????????">
							{getFieldDecorator("switch_notice", {
								valuePropName: "checked",
								initialValue: initFormValues.switch_notice
							})(<Switch checkedChildren="???" unCheckedChildren="???" />)}
						</FormItem>

						<FormItem {...formItemLayout} label="??????">
							{getFieldDecorator("project_type", {
								rules: [
									{
										required: true
									}
								],
								initialValue: initFormValues.project_type
							})(
								<RadioGroup>
									<Radio value="private" class="radio">
										<LazySvg icon="lock" />
										??????
										<br />
										<span class="radio-desc">
											???????????????????????????????????????????????????????????????
										</span>
									</Radio>
									<br />
									{projectMsg.role === "admin" && (
										<Radio value="public" class="radio">
											<LazySvg icon="unlock" />
											??????
											<br />
											<span class="radio-desc">
												?????????????????????????????????????????????
											</span>
										</Radio>
									)}
								</RadioGroup>
							)}
						</FormItem>
					</Form>

					<div class="btnwrap-changeproject">
						<aButton
							class="m-btn btn-save"
							icon="save"
							type="primary"
							size="large"
							onClick={this.handleOk}>
							??? ???
						</aButton>
					</div>

					{/* ????????????????????????????????????????????? */}
					{projectMsg.role === "owner" || projectMsg.role === "admin" ? (
						<div class="danger-container">
							<div class="title">
								<h2 class="content">
									<LazySvg icon="exclamation-circle-o" /> ????????????
								</h2>
								<aButton onClick={this.toggleDangerOptions}>
									??? ???
									<aIcon type={this.state.showDangerOptions ? "up" : "down"} />
								</aButton>
							</div>
							{this.state.showDangerOptions ? (
								<Card hoverable={true} class="card-danger">
									<div class="card-danger-content">
										<h3>????????????</h3>
										<p>???????????????????????????????????????????????????????????????</p>
										<p>????????????????????????????????????????????????</p>
									</div>
									<aButton
										type="danger"
										ghost
										class="card-danger-btn"
										onClick={this.showConfirm}>
										??????
									</aButton>
								</Card>
							) : null}
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default Form.create()(ProjectMessage);
