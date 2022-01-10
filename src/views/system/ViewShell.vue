<script setup>
import { useRouter, useRoute } from "vue-router";
// import { routeNames } from "lsrc/router/router";

const router = useRouter();
function go() {
  router.push({ name: routeNames.login });
}

function check() {
  if (StateApp) {
  }
}
</script>

<template>
  <RouterView />
</template>
