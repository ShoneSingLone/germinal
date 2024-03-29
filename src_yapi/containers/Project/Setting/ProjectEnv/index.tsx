import React, { Component } from "react";

import "./index.scss";
import {
	Icon,
	Layout,
	Tooltip,
	message,
	Row,
	Popconfirm
} from "ant-design-vue";
const { Content, Sider } = Layout;
import ProjectEnvContent from "./ProjectEnvContent.js";

import {
	updateEnv,
	getProject,
	getEnv
} from "../../../../reducer/modules/project";
import EasyDragSort from "../../../../components/EasyDragSort/EasyDragSort.js";

@connect(
	state => {
		return {
			projectMsg: state.project.currProject
		};
	},
	{
		updateEnv,
		getProject,
		getEnv
	}
)
class ProjectEnv extends Component {
	static propTypes = {
		projectId: PropTypes.number,
		updateEnv: PropTypes.func,
		getProject: PropTypes.func,
		projectMsg: PropTypes.object,
		onOk: PropTypes.func,
		getEnv: PropTypes.func
	};

	constructor(props) {
		super(props);
		this.state = {
			env: [],
			_id: null,
			currentEnvMsg: {},
			delIcon: null,
			currentKey: -2
		};
	}

	initState(curdata, id) {
		let newValue = {};
		newValue["env"] = [].concat(curdata);
		newValue["_id"] = id;
		this.setState({
			...this.state,
			...newValue
		});
	}

	async UNSAFE_componentWillMount() {
		this._isMounted = true;
		await this.props.getProject(this.props.projectId);
		const { env, _id } = this.props.projectMsg;
		this.initState(env, _id);
		this.handleClick(0, env[0]);
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	handleClick = (key, data) => {
		this.setState({
			currentEnvMsg: data,
			currentKey: key
		});
	};

	// 增加环境变量项
	addParams = (name, data) => {
		let newValue = {};
		data = { name: "新环境", domain: "", header: [] };
		newValue[name] = [].concat(data, this.state[name]);
		this.setState(newValue);
		this.handleClick(0, data);
	};

	// 删除提示信息
	showConfirm(key, name) {
		let assignValue = this.delParams(key, name);
		this.onSave(assignValue);
	}

	// 删除环境变量项
	delParams = (key, name) => {
		let curValue = this.state.env;
		let newValue = {};
		newValue[name] = curValue.filter((val, index) => {
			return index !== key;
		});
		this.setState(newValue);
		this.handleClick(0, newValue[name][0]);
		newValue["_id"] = this.state._id;
		return newValue;
	};

	enterItem = key => {
		this.setState({ delIcon: key });
	};

	// 保存设置
	async onSave(assignValue) {
		await this.props
			.updateEnv(assignValue)
			.then(res => {
				if (res.payload.data.errcode == 0) {
					this.props.getProject(this.props.projectId);
					this.props.getEnv(this.props.projectId);
					message.success("修改成功! ");
					if (this._isMounted) {
						this.setState({ ...assignValue });
					}
				}
			})
			.catch(() => {
				message.error("环境设置不成功 ");
			});
	}

	//  提交保存信息
	onSubmit = (value, index) => {
		let assignValue = {};
		assignValue["env"] = [].concat(this.state.env);
		assignValue["env"].splice(index, 1, value["env"]);
		assignValue["_id"] = this.state._id;
		this.onSave(assignValue);
		this.props.onOk && this.props.onOk(assignValue["env"], index);
	};

	// 动态修改环境名称
	handleInputChange = (value, currentKey) => {
		let newValue = [].concat(this.state.env);
		newValue[currentKey].name = value || "新环境";
		this.setState({ env: newValue });
	};

	// 侧边栏拖拽
	handleDragMove = name => {
		return (data, from, to) => {
			let newValue = {
				[name]: data
			};
			this.setState(newValue);
			newValue["_id"] = this.state._id;
			this.handleClick(to, newValue[name][to]);
			this.onSave(newValue);
		};
	};

	render() {
		const { env, currentKey } = this.state;

		const envSettingItems = env.map((item, index) => {
			return (
				<aRow
					key={index}
					class={
						"menu-item " + (index === currentKey ? "menu-item-checked" : "")
					}
					onClick={() => this.handleClick(index, item)}
					onMouseEnter={() => this.enterItem(index)}>
					<span class="env-icon-style">
						<span
							class="env-name"
							style={{ color: item.name === "新环境" && "#2395f1" }}>
							{item.name}
						</span>
						<Popconfirm
							title="您确认删除此环境变量?"
							onConfirm={e => {
								e.stopPropagation();
								this.showConfirm(index, "env");
							}}
							okText="确定"
							cancelText="取消">
							<aIcon
								type="delete"
								class="interface-delete-icon"
								style={{
									display:
										this.state.delIcon == index && env.length - 1 !== 0
											? "block"
											: "none"
								}}
							/>
						</Popconfirm>
					</span>
				</aRow>
			);
		});

		return (
			<div class="m-env-panel">
				<Layout class="project-env">
					<Sider width={195} style={{ background: "#fff" }}>
						<div style={{ height: "100%", borderRight: 0 }}>
							<aRow class="first-menu-item menu-item">
								<div class="env-icon-style">
									<h3>
										环境列表&nbsp;
										<aTooltip placement="top" title="在这里添加项目的环境配置">
											<xIcon icon="question-circle-o" />
										</aTooltip>
									</h3>
									<aTooltip title="添加环境变量">
										<xIcon icon="plus" onClick={() => this.addParams("env")} />
									</aTooltip>
								</div>
							</aRow>
							<EasyDragSort
								data={() => env}
								onChange={this.handleDragMove("env")}>
								{envSettingItems}
							</EasyDragSort>
						</div>
					</Sider>
					<Layout class="env-content">
						<Content
							style={{
								background: "#fff",
								padding: 24,
								margin: 0,
								minHeight: 280
							}}>
							<ProjectEnvContent
								projectMsg={this.state.currentEnvMsg}
								onSubmit={e => this.onSubmit(e, currentKey)}
								handleEnvInput={e => this.handleInputChange(e, currentKey)}
							/>
						</Content>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default ProjectEnv;
