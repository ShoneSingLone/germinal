import {
	Button,
	Form,
	Input,
	Icon,
	Tooltip,
	Select,
	message,
	Row,
	Col,
	Radio
} from "ant-design-vue";
import { addProject } from "../../reducer/modules/project.js";
import { fetchGroupList } from "../../reducer/modules/group.js";

import { setBreadcrumb } from "../../reducer/modules/user";
const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
import { pickRandomProperty, handlePath, nameLengthLimit } from "../../common";
import constants from "ysrc/utils/variable";

import "./Addproject.scss";

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

@connect(
	state => {
		return {
			groupList: state.group.groupList,
			currGroup: state.group.currGroup
		};
	},
	{
		fetchGroupList,
		addProject,
		setBreadcrumb
	}
)
@withRouter
class ProjectList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			groupList: [],
			currGroupId: null
		};
	}
	static propTypes = {
		groupList: PropTypes.array,
		form: PropTypes.object,
		currGroup: PropTypes.object,
		addProject: PropTypes.func,
		history: PropTypes.object,
		setBreadcrumb: PropTypes.func,
		fetchGroupList: PropTypes.func
	};

	handlePath = e => {
		let val = e.target.value;
		this.props.form.setFieldsValue({
			basepath: handlePath(val)
		});
	};

	// 确认添加项目
	@autobind
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
						message.success("创建成功! ");
						this.props.history.push(
							"/project/" + res.payload.data.data._id + "/interface/api"
						);
					}
				});
			}
		});
	}

	async UNSAFE_componentWillMount() {
		this.props.setBreadcrumb([{ name: "新建项目" }]);
		if (!this.props.currGroup._id) {
			await this.props.fetchGroupList();
		}
		if (this.props.groupList.length === 0) {
			return null;
		}
		this.setState({
			currGroupId: this.props.currGroup._id
				? this.props.currGroup._id
				: this.props.groupList[0]._id
		});
		this.setState({ groupList: this.props.groupList });
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div class="g-row">
				<div class="g-row m-container">
					<Form>
						<FormItem {...formItemLayout} label="项目名称">
							{getFieldDecorator("name", {
								rules: nameLengthLimit("项目")
							})(<aInput />)}
						</FormItem>

						<FormItem {...formItemLayout} label="所属分组">
							{getFieldDecorator("group", {
								initialValue: this.state.currGroupId + "",
								rules: [
									{
										required: true,
										message: "请选择项目所属的分组!"
									}
								]
							})(
								<Select>
									{this.state.groupList.map((item, index) => (
										<Option
											disabled={
												!(
													item.role === "dev" ||
													item.role === "owner" ||
													item.role === "admin"
												)
											}
											value={item._id.toString()}
											key={index}>
											{item.group_name}
										</Option>
									))}
								</Select>
							)}
						</FormItem>

						<hr class="breakline" />

						<FormItem
							{...formItemLayout}
							label={
								<span>
									基本路径&nbsp;
									<aTooltip title="接口基本路径，为空是根路径">
										<LazySvg icon="question-circle-o" />
									</aTooltip>
								</span>
							}>
							{getFieldDecorator("basepath", {
								rules: [
									{
										required: false,
										message: "请输入项目基本路径"
									}
								]
							})(<aInput onBlur={this.handlePath} />)}
						</FormItem>

						<FormItem {...formItemLayout} label="描述">
							{getFieldDecorator("desc", {
								rules: [
									{
										required: false,
										message: "描述不超过144字!",
										max: 144
									}
								]
							})(<TextArea rows={4} />)}
						</FormItem>

						<FormItem {...formItemLayout} label="权限">
							{getFieldDecorator("project_type", {
								rules: [
									{
										required: true
									}
								],
								initialValue: "private"
							})(
								<RadioGroup>
									<Radio value="private" class="radio">
										<LazySvg icon="lock" />
										私有
										<br />
										<span class="radio-desc">
											只有组长和项目开发者可以索引并查看项目信息
										</span>
									</Radio>
									<br />
									{/* <Radio value="public" class="radio">
                    <LazySvg icon="unlock" />公开<br />
                    <span class="radio-desc">任何人都可以索引并查看项目信息</span>
                  </Radio> */}
								</RadioGroup>
							)}
						</FormItem>
					</Form>
					<aRow>
						<aCol sm={{ offset: 6 }} lg={{ offset: 3 }}>
							<aButton
								class="m-btn"
								icon="plus"
								type="primary"
								onClick={this.handleOk}>
								创建项目
							</aButton>
						</aCol>
					</aRow>
				</div>
			</div>
		);
	}
}

export default Form.create()(ProjectList);
