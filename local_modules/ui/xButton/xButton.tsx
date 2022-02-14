import { defineComponent, useAttrs, h, mergeProps, computed } from "vue";
import { _ } from "../loadCommonUtil";
import {
	RetweetOutlined,
	UploadOutlined,
	DeleteOutlined
} from "@ant-design/icons-vue";

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
		text() {
			if (this.configs.preset === "upload") {
				return (
					<span>
						<UploadOutlined />
						上传
					</span>
				);
			}
			if (this.configs.preset === "delete") {
				return (
					<span>
						<DeleteOutlined />
						删除
					</span>
				);
			}
			if (_.isFunction(this.$slots?.default)) {
				return this.$slots.default(this);
			}
			if (_.isFunction(this.configs.text)) {
				return this.configs.text(this) || "";
			}
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
				{...configs}
				onClick={this.onClick}
				loading={this.loading}
				class="flex middle">
				{this.text}
			</Button>
		);
	}
});
