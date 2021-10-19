<script setup>
import {reactive} from "vue";
import {renders} from "./HelloWorld.render";
import {AppState} from "@s/app";

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
  <Button @click="handlers.clickBtn">{{ $t("user.login.userName") }}</Button>
  <xRender :render="renders.countAuto" :state="state"/>
  <xRender :render="renders.countAuto" :state="AppState"/>
  <xRender :render="renders.staticNode"/>
  <Button  @click="handlers.clickBtn">count is: {{ state.count }}</Button>
</template>
