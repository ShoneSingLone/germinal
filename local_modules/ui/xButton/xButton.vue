<script lang="jsx">
import { defineComponent, useAttrs, h, mergeProps, computed } from "vue";
import { _ } from "../loadCommonUtil";

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
			if (_.isFunction(this.$slots?.default)) {
				/*
        *
        <xButton :configs="configsSubmit">
          <template #default="{loading}">
            {{ loading ? "loading..." : "Submit" }};
          </template>
        </xButton>
        * */
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
			<Button {...configs} onClick={this.onClick} loading={this.loading}>
				{this.text}
			</Button>
		);
	}
});
</script>
