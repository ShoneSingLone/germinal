import React from "react";

import "./Loading.scss";

export default class Loading extends React.PureComponent {
	static defaultProps = {
		visible: false
	};
	static propTypes = {
		visible: PropTypes.bool
	};
	constructor(props) {
		super(props);
		this.state = { show: props.visible };
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ show: nextProps.visible });
	}
	render() {
		return (
			<div
				class="loading-box"
				style={{ display: this.state.show ? "flex" : "none" }}>
				<div class="loading-box-bg" />
				<div class="loading-box-inner">
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
		);
	}
}
