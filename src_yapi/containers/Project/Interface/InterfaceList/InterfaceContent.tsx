import { Tabs, Modal, Button } from "ant-design-vue";
import Edit from "./Edit.js";
import View from "./View.js";
import { Prompt } from "react-router";
import { fetchInterfaceData } from "../../../../reducer/modules/interface.js";

import Run from "./Run/Run.js";
const plugin = require("client/plugin.js");

const TabPane = Tabs.TabPane;
@connect(
	state => {
		return {
			curdata: state.inter.curdata,
			list: state.inter.list,
			editStatus: state.inter.editStatus
		};
	},
	{
		fetchInterfaceData
	}
)
class Content extends Component {
	static propTypes = {
		match: PropTypes.object,
		list: PropTypes.array,
		curdata: PropTypes.object,
		fetchInterfaceData: PropTypes.func,
		history: PropTypes.object,
		editStatus: PropTypes.bool
	};
	constructor(props) {
		super(props);
		this.title = "YApi-高效、易用、功能强大的可视化接口管理平台";
		this.state = {
			curtab: "view",
			visible: false,
			nextTab: ""
		};
	}

	UNSAFE_componentWillMount() {
		const params = this.$route.params;
		this.actionId = params.actionId;
		this.handleRequest(this.props);
	}

	componentWillUnmount() {
		document.getElementsByTagName("title")[0].innerText = this.title;
	}

	componentWillReceiveProps(nextProps) {
		const params = nextProps.match.params;
		if (params.actionId !== this.actionId) {
			this.actionId = params.actionId;
			this.handleRequest(nextProps);
		}
	}

	handleRequest(nextProps) {
		const params = nextProps.match.params;
		this.props.fetchInterfaceData(params.actionId);
		this.setState({
			curtab: "view"
		});
	}

	switchToView = () => {
		this.setState({
			curtab: "view"
		});
	};

	onChange = key => {
		if (this.state.curtab === "edit" && this.props.editStatus) {
			this.showModal();
		} else {
			this.setState({
				curtab: key
			});
		}
		this.setState({
			nextTab: key
		});
	};
	// 确定离开页面
	handleOk = () => {
		this.setState({
			visible: false,
			curtab: this.state.nextTab
		});
	};
	// 离开编辑页面的提示
	showModal = () => {
		this.setState({
			visible: true
		});
	};
	// 取消离开编辑页面
	handleCancel = () => {
		this.setState({
			visible: false
		});
	};
	render() {
		if (this.props.curdata.title) {
			document.getElementsByTagName("title")[0].innerText =
				this.props.curdata.title + "-" + this.title;
		}

		let InterfaceTabs = {
			view: {
				component: View,
				name: "预览"
			},
			edit: {
				component: Edit,
				name: "编辑"
			},
			run: {
				component: Run,
				name: "运行"
			}
		};

		plugin.emitHook("interface_tab", InterfaceTabs);

		const tabs = (
			<Tabs
				class="tabs-large"
				onChange={this.onChange}
				activeKey={this.state.curtab}
				defaultActiveKey="view">
				{Object.keys(InterfaceTabs).map(key => {
					let item = InterfaceTabs[key];
					return <TabPane tab={item.name} key={key} />;
				})}
			</Tabs>
		);
		let tabContent = null;
		if (this.state.curtab) {
			let C = InterfaceTabs[this.state.curtab].component;
			tabContent = <C switchToView={this.switchToView} />;
		}

		return (
			<div class="interface-content">
				<Prompt
					when={
						this.state.curtab === "edit" && this.props.editStatus ? true : false
					}
					message={() => {
						// this.showModal();
						return "离开页面会丢失当前编辑的内容，确定要离开吗？";
					}}
				/>
				{tabs}
				{tabContent}
				{this.state.visible && (
					<aModal
						title="你即将离开编辑页面"
						visible={this.state.visible}
						onCancel={this.handleCancel}
						footer={[
							<aButton key="back" onClick={this.handleCancel}>
								取 消
							</aButton>,
							<aButton key="submit" onClick={this.handleOk}>
								确 定
							</aButton>
						]}>
						<p>离开页面会丢失当前编辑的内容，确定要离开吗？</p>
					</aModal>
				)}
			</div>
		);
	}
}

export default withRouter(Content);
