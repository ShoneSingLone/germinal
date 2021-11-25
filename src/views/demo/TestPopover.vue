<script setup lang="jsx">
import {reactive, defineComponent, h, createElementBlock, getCurrentInstance, inject, compile} from "vue";
import {UI} from "@ventose/ui";
/* data */
const state = reactive({count: 0});
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
      return <Button type="primary" onClick={add}>
        {state.count}
      </Button>;
    };
  }
});

/* methods */
const handlers = {
  clickBtn() {
    const testPopover = UI.layer.open({
    type: 2,
    title: "欢迎页",
    maxmin: true,
    area: ["800px", "500px"],
    content: "http://layer.layui.com/test/welcome.html",
    end: function(){
      layer.tips("Hi", "#about", {tips: 1});
    }
  });
  },
};
</script>

<template>
  <Button
    id="target"
    @click="handlers.clickBtn"
  >
    target
  </Button>
</template>
