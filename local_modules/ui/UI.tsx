import { t_dialogOptions } from "./xSingle/dialog/dialog";
import { State_UI } from "./State_UI";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import layer from "./xSingle/layer/layer";
import {
	Modal,
	/* global */
	message,
	notification
} from "ant-design-vue";
import _ from "lodash";

/* 静态方法，与APP实例无关，引用有直接可用 */

const useModel = type => {
	return ({ title = "", content = "" }) => {
		return new Promise((resolve, reject) => {
			title = (isDefault => {
				if (isDefault) {
					const title_map = {
						success: State_UI.$t("成功").label,
						info: State_UI.$t("提示").label,
						error: State_UI.$t("错误").label,
						warning: State_UI.$t("警告").label
					};
					return title_map[type];
				} else {
					return title;
				}
			})(!title);
			Modal[type]({
				title,
				icon: <ExclamationCircleOutlined />,
				content: content,
				onOk() {
					resolve("ok");
				},
				onCancel() {
					reject();
				},
				okText: State_UI.$t("确定").label,
				class: "test"
			});
		});
	};
};
export const UI = {
	dialog: {
		component: async (options: t_dialogOptions) => null,
		success: useModel("success"),
		info: useModel("info"),
		error: useModel("error"),
		warning: useModel("warning"),
		confirm({ title = "", content = "" }) {
			return new Promise((resolve, reject) => {
				Modal.confirm({
					title,
					icon: <ExclamationCircleOutlined />,
					content: <div>{content}</div>,
					onOk() {
						resolve("ok");
					},
					onCancel() {
						reject();
					},
					okText: State_UI.$t("确定").label,
					cancelText: State_UI.$t("取消").label,
					class: "test"
				});
			});
		},
		delete({ title, content } = {}) {
			title = title || State_UI.$t("删除").label;
			content = content || State_UI.$t("删除确认提示").label;
			return new Promise((resolve, reject) => {
				Modal.confirm({
					title,
					icon: <ExclamationCircleOutlined style={"color:red"} />,
					content,
					okType: "danger",
					okText: State_UI.$t("确定").label,
					cancelText: State_UI.$t("取消").label,
					onOk() {
						resolve("ok");
					},
					onCancel() {
						reject();
					}
				});
			});
		}
	},
	message: new Proxy(notification, {
		get(target, p, receiver) {
			const m = target[p];

			return new Proxy(m, {
				apply(target, thisArg, argArray) {
					if (typeof argArray[0] === "string") {
						argArray[0] = _.merge({ message: argArray[0] }, argArray[1] || {});
					}
					return target.apply(thisArg, argArray);
				}
			});
		}
	}),
	notification: new Proxy(notification, {
		get(target, p, receiver) {
			const m = target[p];

			return new Proxy(m, {
				apply(target, thisArg, argArray) {
					if (typeof argArray[0] === "string") {
						argArray[0] = _.merge({ message: argArray[0] }, argArray[1] || {});
					}
					return target.apply(thisArg, argArray);
				}
			});
		}
	}),
	layer
};
