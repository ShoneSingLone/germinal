import { defineComponent, markRaw } from "vue";

export default defineComponent(
	markRaw({
		name: "xRender",
		props: {
			render: {
				type: Function,
				required: true
			}
		},
		render(h) {
			return this.$props.render({
				vm: this,
				props: this.$props,
				attrs: this.$attrs
			});
		}
	})
);
