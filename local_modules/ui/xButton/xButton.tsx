import { defineComponent, useAttrs, h, mergeProps, computed } from "vue";
import { _ } from "../loadCommonUtil";
import {
	SaveOutlined,
	SearchOutlined,
	UploadOutlined,
	DeleteOutlined,
	SyncOutlined
} from "@ant-design/icons-vue";

const BTN_PRESET_MAP = {
	save: { icon: <SaveOutlined />, text: "保存" },
	refresh: { icon: <SyncOutlined />, text: "刷新" },
	query: { icon: <SearchOutlined />, text: "查询" },
	upload: { icon: <UploadOutlined />, text: "上传" },
	delete: { icon: <DeleteOutlined />, text: "删除" }
};

export type t_buttonOptions = {
	text?: string;
	onClick?: () => Promise<any>;
};

export default defineComponent({
	props: {
		configs: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data() {
		return {
			loading: true
		};
	},
	computed: {
		type() {
			if (this.configs.preset === "query") {
				return "primary";
			}
			return this.configs.type;
		},
		disabled() {
			if (_.isBoolean(this.configs.disabled)) {
				return this.configs.disabled;
			}
			if (_.isFunction(this.configs.disabled)) {
				return this.configs.disabled(this);
			}
			return false;
		},
		text() {
			/* slot优先 */
			if (_.isFunction(this.$slots?.default)) {
				return this.$slots.default(this);
			}
			/* 预置 */
			const preset = BTN_PRESET_MAP[this.configs.preset];
			if (preset) {
				return (
					<span class="btn-preset">
						{preset.icon}
						{preset.text}
					</span>
				);
			}
			/* text作为render */
			if (_.isFunction(this.configs.text)) {
				return this.configs.text(this) || "";
			}
			/* text 作为 string */
			return this.configs.text || "";
		}
	},
	watch: {
		configs: {
			immediate: true,
			handler(configs) {
				this.loading = !!configs.loading;
			}
		}
	},
	created() {},
	methods: {
		async onClick() {
			if (_.isFunction(this.configs.onClick)) {
				this.loading = true;
				try {
					await this.configs.onClick(this);
				} catch (e) {
					console.error(e);
				} finally {
					this.loading = false;
				}
			}
		}
	},
	render(h) {
		const configs = _.omit(this.configs, ["text", "onClick"]);

		return (
			<Button
				class="flex middle"
				onClick={this.onClick}
				loading={this.loading}
				disabled={this.disabled}
				type={this.type}
				{...configs}>
				{this.text}
			</Button>
		);
	}
});