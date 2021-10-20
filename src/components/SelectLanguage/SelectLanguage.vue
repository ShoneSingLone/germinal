<script setup>
import { reactive, computed } from "vue";
import { AppState } from "@state/app";
const locales = ["zh-CN", "en-US"];
const languageLabels = {
  "zh-CN": { label: "简体中文", icon: "🇨🇳" },
  "en-US": { label: "English", icon: "🇺🇸" },
};

function changeConfigsLanguage({ key }) {
  AppState.configs.language = key;
}
</script>

<template>
  <Dropdown placement="bottomRight">
    <span :class="AppState.configs.prefixCls">
      <GlobalOutlined />
    </span>
    <template #overlay>
      <Menu
        :selectedKeys="[AppState.configs.language]"
        @click="changeConfigsLanguage"
      >
        <MenuItem :key="locale" v-for="locale in locales">
          <span role="img" :aria-label="languageLabels[locale].label">
            {{ languageLabels[locale].icon }}
          </span>
          {{ languageLabels[locale].label }}</MenuItem
        >
      </Menu>
    </template>
  </Dropdown>
</template>
