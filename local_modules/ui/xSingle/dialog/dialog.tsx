import { _ } from "../../loadCommonUtil";
import $ from "jquery";
import layer, { KEY } from "../../xSingle/layer/layer";
import { createApp, defineComponent, reactive, h } from "vue";
import { API, SuccessOrFail } from "../../../api";
import { UI } from "../../index";
import { MutatingProps } from "../../common";

export type t_dialogOptions = {
	vmDialog?: object;
	/* 在component里面将需要的数据放在payload里面，onOK作为options里的参数传入，可以用于表单数据获取 */
	payload?: Object;
	title: string;
	component: object;
	/*关闭方法*/
	close: Function;
	area?: string[];
	/* layer 索引，用于layer close */
	layerIndex?: number;
	/* hook: 完成组件首次加载 */
	afterOpenDialoag: Function;
	onOk: Function;
	beforeCancel?: Function;
	noButtons: boolean;
	renderButtons: Function;
};
export const installUIDialogComponent = (UI, { appPlugins, dependState }) => {
	UI.dialog.component = async (options: t_dialogOptions) =>
		new Promise((resolve, reject) => {
			const { component, title, area } = options;
			const id = `xDialog_${Date.now()}`;
			let $container = $("<div/>", {
				id
			});
			$container.appendTo($("body"));
			let vm;
			const elId = `#${id}`;
			/* FIXED: */
			if (options.yes) {
				options._yes = options.yes;
				delete options.yes;
			}
			let app = null;

			/* 处理按Esc键关闭弹窗 */
			let handleEcsPress = {
				layerIndex: "",
				handler(event) {
					const code = event.keyCode;
					event.preventDefault();
					if (code === KEY.esc) {
						layer.close(handleEcsPress.layerIndex);
					}
				},
				on(layerIndex) {
					handleEcsPress.layerIndex = layerIndex;
					$(document).on(`keyup.${elId}`, handleEcsPress.handler);
				},
				off() {
					$(document).off(`keyup.${elId}`, handleEcsPress.handler);
					handleEcsPress = null;
				}
			};

			layer.open(
				_.merge(
					{
						type: 1,
						title: [title || ""],
						area: area || ["800px", "520px"],
						content: $container,
						// offset: ['600px','600px'],
						btn: [
							/*'确定', '取消'*/
						],
						success(indexPanel, layerIndex) {
							handleEcsPress.on(layerIndex);
							app = createApp(
								defineComponent({
									data() {
										options.vmDialog = this;
										return { elId, options, vm: null };
									},
									methods: {
										async handleClickOk() {
											if (options.onOk) {
												await options.onOk(options);
											} else {
												await this.handleClickCancel();
											}
										},
										async handleClickCancel() {
											let isClose = true;
											if (options.beforeCancel) {
												isClose = await options.beforeCancel();
											}
											if (isClose) {
												layer.close(layerIndex);
												reject();
											} else {
												return false;
											}
										}
									},
									computed: {
										okText() {
											return this.options.okText || "确定";
										},
										cancelText() {
											return this.options.cancelText || "取消";
										},
										/* 主要内容 */
										renderContent() {
											const dialog = this;
											return (
												<component
													dialog={dialog}
													options={options}
													class="flex1"
												/>
											);
										},
										/* 下方按钮 */
										renderButtons() {
											if (this.options.noButtons) {
												return null;
											}
											if (this.options.renderButtons) {
												return (
													<div class="flex middle end ant-modal-footer">
														{this.options.renderButtons(
															this /* 提供 handleClickOk、handleClickCancel*/
														)}
													</div>
												);
											}
											return (
												<div class="flex middle end ant-modal-footer">
													<xButton
														configs={{ onClick: this.handleClickCancel }}>
														{this.cancelText}
													</xButton>
													<xGap l={10} />
													<xButton
														configs={{
															onClick: this.handleClickOk,
															type: "primary"
														}}>
														{this.okText}
													</xButton>
												</div>
											);
										}
									},
									render() {
										return (
											<div class="flex vertical height100">
												{this.renderContent}
												{this.renderButtons}
											</div>
										);
									}
								})
							).use(appPlugins, { dependState });
							app.mount(elId);
							options.layerIndex = layerIndex;
							options.close = () => {
								layer.close(layerIndex);
							};
							options.afterOpenDialoag && options.afterOpenDialoag(app);
						},
						cancel() {
							/*点击右上角的关闭按钮*/
							app._instance.proxy.handleClickCancel();
							return false;
						},
						end() {
							handleEcsPress.off();
							app.unmount();
							$container.remove();
							$container = null;
							app = null;
							options.payload = null;
							options.vmDialog = null;
							options = null;
							resolve(true);
						}
					},
					options
				)
			);
		});
};

type t_normalClickDialogOKOptions = {
	instance: {
		close: Function;
		payload: {
			Methods: {
				verifyForm: Function;
				getParams: Function;
			};
		};
	};
	apiPath: string;
	successText: string;
	successHander: Function;
};

/***
 * 一般情况表单的dialog方法
 * Dialog的组件里必须实现 Methods verifyForm getParams
 * @param options
 */
export async function handleClickDialogOK(
	options: t_normalClickDialogOKOptions
) {
	const { close, payload } = options.instance;
	const { Methods } = payload;
	try {
		if (await Methods.verifyForm()) {
			const params = Methods.getParams();
			const request = MutatingProps(API, options.apiPath);
			await SuccessOrFail({
				request: () => request(params),
				success: async result => {
					UI.message.success(options.successText);
					if (options.successHander) {
						await options.successHander({ params, result });
					}
				}
			});
			close();
		}
	} catch (e) {
		console.log(e);
	}
}
