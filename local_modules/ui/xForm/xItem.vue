<script lang="jsx" setup>
import {defineComponent} from "vue";
import {reactive} from "vue";
import {AppState} from "@state/app";
import Input from "./itemRenders/Input.jsx";

defineProps({
  configs: Object,
});
const renders = {Input};
// const currentComponent
</script>

<template>
  <!-- <component :is="Input" v-model:value="configs.value"></component> -->
  <xRender :render="Input" :state="configs"/>
</template>
