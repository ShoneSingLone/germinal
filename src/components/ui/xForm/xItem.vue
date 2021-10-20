<script lang="jsx">
import {defineComponent} from "vue";
import {reactive} from "vue";
import {AppState} from "@state/app";
import Input from "./itemRenders/Input.jsx";

const renders = {Input};

export default defineComponent({
  props: {configs: Object},
  setup(props) {
    return () => {
      console.log(`configs.type`, configs.type);
      return <xRender render={renders.Input} state={props.configs}/>;
    };
  },
});
</script>
