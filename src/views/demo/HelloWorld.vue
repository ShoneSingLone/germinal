<script setup lang="jsx">
import { reactive } from "vue";

defineProps({
  configs: {
    type: Object,
    default() {
      return {};
    },
  },
});

/* data */
const state = reactive({ count: 0 });
/*renders*/
const renders = {
  test: (state) => <Button>{state.count}</Button>,
};
/* methods */
const handlers = {
  clickBtn() {
    state.count++;
  },
};
</script>

<template>
  <Button @click="handlers.clickBtn">
    {{ $t("user.login.userName").label }}
  </Button>
  <xRender
    :render="renders.test"
    :state="LoginState"
  />
  <Button @click="handlers.clickBtn">
    count is: {{ state.count }}
  </Button>
</template>
