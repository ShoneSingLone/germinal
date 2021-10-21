<script setup>
import {APP_LANGUAGE} from "@state/app";

const languageLabels = {
  "zh-CN": {label: "简体中文", icon: "🇨🇳"},
  "en-US": {label: "English", icon: "🇺🇸"},
};

const changeLanguage = ({key}) => {
  APP_LANGUAGE.value = key;
};

</script>

<template>
  <Dropdown placement="bottomRight">
    <GlobalOutlined/>
    <template #overlay>
      <Menu :selectedKeys="[APP_LANGUAGE]" @click="changeLanguage">
        <MenuItem :key="prop" v-for="(locale,prop) in languageLabels">
          <span role="img" :aria-label="locale.label"> {{ locale.icon }} </span>
          <span>{{ locale.label }}</span>
        </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>
