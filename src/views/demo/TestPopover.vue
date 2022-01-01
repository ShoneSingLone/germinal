<script setup lang="jsx">
import {
  reactive,
  defineComponent,
  h,
  createElementBlock,
  getCurrentInstance,
  inject,
  compile,
} from "vue";
import { UI } from "@ventose/ui";
/* data */
const state = reactive({ count: 0 });
/*renders*/
const renders = {
  test: (state) => <Button>{state.count}</Button>,
};

const PopoverContent = defineComponent({
  setup() {
    function add() {
      state.count++;
    }

    return () => {
      return (
        <Button type="primary" onClick={add}>
          {state.count}
        </Button>
      );
    };
  },
});

/* methods */
const handlers = {
  openTips() {
    /* @:local_modules/ui/xSingle/layer/layer.js:128 */
    const testPopover = UI.layer.tips("tips", "#target2", {
      tips: [UI.layer.UP, "#0FA6D8"],
      tipsMore: true,
      time: 0,
    });
  },
  clickBtn() {
    const testPopover = UI.layer.open({
      type: 2,
      title: "欢迎页",
      maxmin: true,
      area: ["800px", "500px"],
      content: "https://shonesinglone.github.io/germinal",
      end() {
        UI.layer.tips("Hi", "#tips", { tips: 1 });
      },
    });
  },
};
</script>

<template>
  <div class="container flex middle">
    <div class="flex width100">
      <Button
        id="tips"
        v-uiPopover="{ content: 'tips1' }"
      >
        v-uiPopover
      </Button>
      <Button v-uiPopover="{ content: 'tips2' }">
        v-uiPopover
      </Button>
      <div />
      <Button
        id="target"
        @click="handlers.clickBtn"
      >
        iframe
      </Button>
      <div />
      <Button
        id="target2"
        @click="handlers.openTips"
      >
        popover
      </Button>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 100vw;
  height: 100vh;
}
</style>
