<script lang="jsx">
import { defineComponent } from "vue";

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
			loading: false
		};
	},
	computed: {
		id() {
			return `id_${this._.uid}`;
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
		async onClick() {}
	}
	// render(h) {}
});
</script>

<template>
	<div class="ellipsis" :title="props.content" :id="id">
		<slot />
	</div>
</template>
