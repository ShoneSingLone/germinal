import {
    defineComponent,markRaw
} from "vue";

export default defineComponent(markRaw({
    props: ["render", "state"],
    setup: ({render, state}) => () => render(state),
}));
