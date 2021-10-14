<script lang="jsx">
import {defineComponent} from "vue";

export default defineComponent({
  props: ["render", "configs"],
  setup: ({render, configs}) => () => render(configs),
});
</script>
