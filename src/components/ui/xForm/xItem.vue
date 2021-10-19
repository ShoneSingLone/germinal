<script lang="jsx">
import {defineComponent} from "vue";
import {reactive} from "vue";
import {AppState} from "@s/app";
import Input from "./itemRenders/Input.jsx";

const renders = {
  Input,
};

export default defineComponent({
  props: {configs: Object},
  setup(props) {
    return () => {
      return <xRender render={renders.Input} state={props.configs}/>;
    };
  },
});
</script>
