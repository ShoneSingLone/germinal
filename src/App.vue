<script setup>
/*https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup*/
import { onMounted, reactive } from "vue";
import { StateAppActions } from "lsrc/state/StateApp";
const state = reactive({ isLoading: true });
onMounted(async () => {
  await StateAppActions.initAppConfigs();
  state.isLoading = false;
});
</script>
<template>
  <h1 v-if="state.isLoading">
    Loading...
  </h1>
  <RouterView v-else />
</template>
;

<style lang="less" src="./styles/App.less"></style>
;
