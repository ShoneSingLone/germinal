import React, { Component } from "react";

import { Icon, Row, Col, Input } from "ant-design-vue";
import "./ProjectTag.scss";

class ProjectTag extends Component {
	static propTypes = {
		tagMsg: PropTypes.array,
		tagSubmit: PropTypes.func
	};
	constructor(props) {
		super(props);
		this.state = {
			tag: [{ name: "", desc: "" }]
		};
	}

	initState(curdata) {
		let tag = [
			{
				name: "",
				desc: ""
			}
		];
		if (curdata && curdata.length !== 0) {
			curdata.forEach(item => {
				tag.unshift(item);
			});
		}

		return { tag };
	}
	componentDidMount() {
		this.handleInit(this.props.tagMsg);
	}

	handleInit(data) {
		let newValue = this.initState(data);
		this.setState({ ...newValue });
	}

	addHeader = (val, index, name, label) => {
		let newValue = {};
		newValue[name] = [].concat(this.state[name]);
		newValue[name][index][label] = val;
		let nextData = this.state[name][index + 1];
		if (!(nextData && typeof nextData === "object")) {
			let data = { name: "", desc: "" };
			newValue[name] = [].concat(this.state[name], data);
		}
		this.setState(newValue);
	};

	delHeader = (key, name) => {
		let curValue = this.state[name];
		let newValue = {};
		newValue[name] = curValue.filter((val, index) => {
			return index !== key;
		});
		this.setState(newValue);
	};

	handleChange = (val, index, name, label) => {
		let newValue = this.state;
		newValue[name][index][label] = val;
		this.setState(newValue);
	};

	render() {
		const commonTpl = (item, index, name) => {
			const length = this.state[name].length - 1;
			return (
				<aRow key={index} class="tag-item">
					<aCol span={6} class="item-name">
						<aInput
							placeholder={`请输入 ${name} 名称`}
							// style={{ width: '200px' }}
							value={item.name || ""}
							onChange={e =>
								this.addHeader(e.target.value, index, name, "name")
							}
						/>
					</aCol>
					<aCol span={12}>
						<aInput
							placeholder="请输入tag 描述信息"
							style={{ width: "90%", marginRight: 8 }}
							onChange={e =>
								this.handleChange(e.target.value, index, name, "desc")
							}
							value={item.desc || ""}
						/>
					</aCol>
					<aCol span={2} class={index === length ? " tag-last-row" : null}>
						{/* 新增的项中，只有最后一项没有有删除按钮 */}
						<aIcon
							class="dynamic-delete-button delete"
							type="delete"
							onClick={e => {
								e.stopPropagation();
								this.delHeader(index, name);
							}}
						/>
					</aCol>
				</aRow>
			);
		};

		return (
			<div class="project-tag">
				{this.state.tag.map((item, index) => {
					return commonTpl(item, index, "tag");
				})}
			</div>
		);
	}
}

export default ProjectTag;
