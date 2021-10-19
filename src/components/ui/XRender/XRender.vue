<script lang="jsx">
import {defineComponent} from "vue";

export default defineComponent({
  props: ["render", "state"],
  setup: ({render, state}) => () => render(state),
});
</script>
