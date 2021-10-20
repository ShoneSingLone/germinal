<script setup>
import {reactive} from "vue";
import {AppState} from "@state/app";

const locales = ["zh-CN", "en-US"];
const languageLabels = {
  "zh-CN": "简体中文",
  "en-US": "English",
};
// eslint-disable-next-line
const languageIcons = {
  "zh-CN": "🇨🇳",
  "en-US": "🇺🇸",
};

const state = reactive({visibale: false,test:"hehe"});
const handlers = {
  menuClick(e) {
    if (e.key === "3") {
      state.visible = false;
    }
  },
};
</script>

<template>
  <Dropdown v-model:visible="state.visible">
    <span :class="AppState.configs.prefixCls">
      <Icon type="global" :title="$t('navBar.lang')"/>
    </span>
    <template #overlay>
       <a-menu @click="handlers.menuClick">
        <a-menu-item key="1">Clicking me will not close the menu.</a-menu-item>
        <a-menu-item key="2">Clicking me will not close the menu also.</a-menu-item>
        <a-menu-item key="3">Clicking me will close the menu</a-menu-item>
      </a-menu>
    </template>
  </Dropdown>
</template>
