<script setup>
import {reactive, computed} from "vue";
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

const state = reactive({visibale: false, test: "hehe"});
const visibale = computed(() => JSON.stringify(state.visibale));
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
      {{ visibale }}
      <Icon type="global" :title="$t('navBar.lang')"/>
    </span>
    <template #overlay>
      <Menu @click="handlers.menuClick">
        <MenuItem key="1">Clicking me will not close the menu.</MenuItem>
        <MenuItem key="2">Clicking me will not close the menu also.</MenuItem>
        <MenuItem key="3">Clicking me will close the menu</MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>
