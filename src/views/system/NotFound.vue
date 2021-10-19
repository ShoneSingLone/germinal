<script setup>
import {useRouter} from "vue-router";
import {routeNames} from "../../router/router";

const router = useRouter();

function go() {
  router.push({name: routeNames.login});
}
</script>

<template>
  <h1>Not Found</h1>
  <Button @click="go">Home</Button>
</template>
