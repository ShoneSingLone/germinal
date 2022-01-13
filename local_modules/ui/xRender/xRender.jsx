import { defineComponent, markRaw } from "vue";

export default defineComponent(
	markRaw({
		props: ["render", "state"],
		setup: (props, ctx) => () => props.render(props, ctx)
	})
);
