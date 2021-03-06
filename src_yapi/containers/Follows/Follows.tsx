import "./Follows.scss";

import { Row, Col } from "ant-design-vue";
import { getFollowList } from "../../reducer/modules/follow";
import { setBreadcrumb } from "../../reducer/modules/user";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import ErrMsg from "../../components/ErrMsg/ErrMsg.js";

@connect(
	state => {
		return {
			data: state.follow.data,
			uid: state.user.uid
		};
	},
	{
		getFollowList,
		setBreadcrumb
	}
)
class Follows extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	static propTypes = {
		getFollowList: PropTypes.func,
		setBreadcrumb: PropTypes.func,
		uid: PropTypes.number
	};

	receiveRes = () => {
		this.props.getFollowList(this.props.uid).then(res => {
			if (res.payload.data.errcode === 0) {
				this.setState({
					data: res.payload.data.data.list
				});
			}
		});
	};

	async UNSAFE_componentWillMount() {
		this.props.setBreadcrumb([{ name: "我的关注" }]);
		this.props.getFollowList(this.props.uid).then(res => {
			if (res.payload.data.errcode === 0) {
				this.setState({
					data: res.payload.data.data.list
				});
			}
		});
	}

	render() {
		let data = this.state.data;
		data = data.sort((a, b) => {
			return b.up_time - a.up_time;
		});
		return (
			<div>
				<div
					class="g-row"
					style={{ paddingLeft: "32px", paddingRight: "32px" }}>
					<aRow gutter={16} class="follow-box pannel-without-tab">
						{data.length ? (
							data.map((item, index) => {
								return (
									<aCol xs={6} md={4} xl={3} key={index}>
										<ProjectCard
											projectData={item}
											inFollowPage={true}
											callbackResult={this.receiveRes}
										/>
									</aCol>
								);
							})
						) : (
							<ErrMsg type="noFollow" />
						)}
					</aRow>
				</div>
			</div>
		);
	}
}

export default Follows;
