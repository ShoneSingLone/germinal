import "./Breadcrumb.scss";

import { Breadcrumb } from "ant-design-vue";

@connect(state => {
	return {
		breadcrumb: state.user.breadcrumb
	};
})
@withRouter
export default class BreadcrumbNavigation extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		breadcrumb: PropTypes.array
	};

	render() {
		const getItem = this.props.breadcrumb.map((item, index) => {
			if (item.href) {
				return (
					<Breadcrumb.Item key={index}>
						<RouterLink to={item.href}>{item.name}</RouterLink>
					</Breadcrumb.Item>
				);
			} else {
				return <Breadcrumb.Item key={index}>{item.name}</Breadcrumb.Item>;
			}
		});
		return (
			<div class="breadcrumb-container">
				<Breadcrumb>{getItem}</Breadcrumb>
			</div>
		);
	}
}
