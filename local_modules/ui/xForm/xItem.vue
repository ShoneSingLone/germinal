<script lang="jsx" setup>
import renders from "./itemRenders"
const props = defineProps({
  configs: Object,
});
const render = renders[props.configs.type] || renders.Input;
</script>

<template>
  <xRender :render="render" :state="configs" />
  {{configs.tipsInfo}}
</template>
