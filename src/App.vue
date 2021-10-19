<script setup>
/*https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup*/
import {AppState} from "@s/app";
import {reactiveItemConfigs, ITEM_TYPE} from "@ventose/ui/xForm/itemRenders/common.js";
import {watch} from "vue";

const inputConfigs = reactiveItemConfigs(
    {
      type: ITEM_TYPE.input,
      value: AppState.value,
      onAfterValueChange: (configs) => {
        AppState.count = configs.value;
      }
    }
);


watch(() => AppState.count, (count) => {
  inputConfigs.value = count;
});
</script>
<template>
  AppState.count: {{ AppState.count }}
  <xItem :configs="inputConfigs"/>
  <RouterView/>
</template>
