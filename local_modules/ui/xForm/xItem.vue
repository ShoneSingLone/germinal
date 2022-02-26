<script lang="jsx">
import { defineComponent, useAttrs, h, mergeProps, computed } from "vue";
import renders from "./itemRenders";
import { MutatingProps } from "../common";
import { checkXItem, EVENT_TYPE, TIPS_TYPE } from "../tools/validate";
import { _ } from "../loadCommonUtil";

const domClass = {
	tipsError: "ant-form-item-explain ant-form-item-explain-error"
};

/* itemWrapperClass */

export default defineComponent({
	props: {
		/* 绑定的值 */
		modelValue: {
			type: [Object, String, Number, Boolean]
		},
		configs: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	emits: ["update:modelValue"],
	data() {
		return {
			/* validateInfo */
			isRequired: false
			/* validateInfo */
		};
	},

	computed: {
		isChecking() {
			return Boolean(this.configs.checking);
		},
		/* 组件唯一标识 */
		FormItemId() {
			return `xItem_${this._.uid}`;
		},
		/* 提示信息的类型及提示信息 */
		itemTips() {
			const _itemTips = { type: "", msg: "" };
			if (this.configs.itemTips.type) {
				return {
					type: this.configs.itemTips.type,
					msg: _.isFunction(this.configs.itemTips.msg)
						? this.configs.itemTips.msg()
						: this.configs.itemTips.msg
				};
			} else {
				return _itemTips;
			}
		},
		itemWrapperClass() {
			return [
				this.configs.itemWrapperClass,
				/*flex 一般与从简在同一行*/
				"ant-form-item ant-form-item-with-help x-item flex",
				this.itemTips.type === TIPS_TYPE.error ? "ant-form-item-has-error" : ""
			].join(" ");
		},
		componentSettings() {
			const configs = this.configs;
			configs.value = this.modelValue;
			const property = {};
			const listeners = {};
			let slots = {};
			let vm = this;

			const pickAttrs = properties => {
				_.each(properties, (value, prop) => {
					if ("slots" === prop) {
						slots = value;
						return;
					}

					if (["placeholder"].includes(prop) && _.isFunction(value)) {
						property[prop] = value(this);
						return;
					}

					/* 用于xForm 控件，以下配置信息跟UI库控件相关，用不上，遂删除 */
					if (["itemTips", "rules"].includes(prop)) {
						return;
					}

					/* FIX: 监听函数单独出来。listener不知道在哪里被覆盖了，inputPassword  被 pop 包裹，childListener被修改了,UI库？？*/
					if (_.isListener(prop)) {
						if (listeners[prop]) {
							listeners[prop].queue.push(value);
							return;
						} else {
							listeners[prop] = function (...args) {
								listeners[prop].queue.forEach(listener => listener(...args));
							};
							listeners[prop].queue = [value];
							return;
						}
					}
					property[prop] = value;
					return;
				});
			};

			const handleConfigsValidate = eventType => {
				configs.validate && configs.validate(eventType);
			};

			/* 后面的属性覆盖前面的属性 */
			pickAttrs({
				"onUpdate:value": (val, ...args) => {
					this.$emit("update:modelValue", val);
					if (_.isFunction(configs.onAfterValueChang)) {
						configs.onAfterValueChange(configs);
					}
					/* TODO: rule检测*/
					handleConfigsValidate(EVENT_TYPE.update);
				},
				onChange: () => {
					handleConfigsValidate(EVENT_TYPE.change);
				},
				onInput: () => {
					handleConfigsValidate(EVENT_TYPE.input);
				},
				onBlur: () => {
					handleConfigsValidate(EVENT_TYPE.blur);
				},
				onFocus: () => {
					handleConfigsValidate(EVENT_TYPE.focus);
				}
			});
			pickAttrs(this.configs);
			pickAttrs(this.$attrs);
			return { property, slots, listeners };
		},
		/* VNode */
		tipsVNode() {
			if (this.isChecking) {
				return (
					<div>
						<div data-type="checking">checking...</div>
					</div>
				);
			}

			if (this.configs.tipsVNodeRender) {
				return this.configs.tipsVNodeRender({
					xItem: this,
					configs: this.configs,
					itemTips: this.itemTips
				});
			}

			if (this.itemTips.msg) {
				if (this.itemTips.type === TIPS_TYPE.error) {
					return (
						<div class={domClass.tipsError}>
							<div data-type="error">{this.itemTips.msg}</div>
						</div>
					);
				}
			}
			return null;
		},
		/* 表单label 如果有提供String类型，就显示 */
		labelVNode() {
			if (this.configs.labelVNodeRender) {
				return this.configs.labelVNodeRender(this.configs);
			}

			let label = (() => {
				const _label = this.configs.label;
				if (_.isFunction(_label)) {
					return _label();
				}

				if (_.isString(_label)) {
					return _label;
				}
				return false;
			})();

			if (label === false) {
				return null;
			}
			const classString = this.isRequired ? "ant-form-item-required" : "";
			return (
				<div class="ant-form-item-label">
					<label for={this.configs.prop} class={classString}>
						{label}
					</label>
				</div>
			);
		}
		/* VNode */
	},
	watch: {
		/* 修改rules Array 要求全量替换 */
		"configs.rules": {
			immediate: true,
			deep: true,
			handler(rules) {
				this.setValidateInfo(rules);
			}
		}
	},
	created() {
		/* domID */
		MutatingProps(this, "configs.FormItemId", this.FormItemId);
	},
	methods: {
		setTips(type = "", msg = "") {
			MutatingProps(this, "configs.itemTips", { type, msg });
		},
		/* 如果有可用rules，为当前item配置校验函数 */
		setValidateInfo(rules) {
			/* 修改rules Array 要求全量替换 */
			let isRequired = false;
			if (_.isArrayFill(rules)) {
				/* 如果有必填项 */
				isRequired = _.some(rules, { name: "required" });
				/* 检测完成之后的回调 */
				const handleAfterCheck = ([prop, msg]) => {
					MutatingProps(this, "configs.checking", false);
					if (prop) {
						if (msg) {
							this.setTips(TIPS_TYPE.error, msg);
							/*校验未通过，如果有其他操作，可以提供一个onValidateFail的回调函数*/
							if (_.isFunction(this.configs.onValidateFail)) {
								this.configs.onValidateFail(this.configs);
							}
						} else {
							this.setTips();
						}
					}
				};
				const debounceCheckXItem = _.debounce(checkXItem, 300);
				/* 如果有检验规则，添加可执行校验方法 */
				MutatingProps(this, "configs.validate", eventType => {
					/* 短时间内，多个事件触发统一校验，使用队列，任一一个触发 */
					const prop = `configs.validate.triggerEventsObj.${eventType}`;
					MutatingProps(this, prop, true);
					/*  */
					debounceCheckXItem(this.configs, handleAfterCheck /* 异步回调 */);
				});
				/* init */
				MutatingProps(this, "configs.validate.triggerEventsObj", {});
			} else {
				if (_.isFunction(this.configs.validate)) {
					delete this.configs.validate;
				}
			}
			this.isRequired = isRequired;
		}
	},
	render(h) {
		const CurrentXItem = (() => {
			return renders[this.configs.itemType] || renders.Input;
		})();

		return (
			<div id={this.FormItemId} class={this.itemWrapperClass}>
				{/* label */}
				{this.labelVNode}
				{/* 控件 */}
				<div class="ant-form-item-control">
					<CurrentXItem {...this.componentSettings} />
					{/* 提示信息 */}
					{this.tipsVNode}
				</div>
			</div>
		);
	}
});
</script>
