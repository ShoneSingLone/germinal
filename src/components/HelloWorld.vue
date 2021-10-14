<script setup>
import {reactive} from "vue";
import {renders} from "./HelloWorld.render";
import {AppState} from "../state/app";

defineProps({
  msg: String,
  configs: Object,
});

/* data */
const state = reactive({count: 0});

setInterval(() => {
  state.count++;
}, 1000);

/* methods */
const handlers = {
  clickBtn() {
    state.count++;
  },
};
</script>
<template>
  <XRender :render="renders.countAuto" :configs="state"/>
  <XRender :render="renders.countAuto" :configs="AppState"/>
  <XRender :render="renders.staticNode"/>
  <Button type="button" @click="handlers.clickBtn">count is: {{ state.count }}</Button>
</template>
