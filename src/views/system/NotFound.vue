<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function go() {
  router.push({ path: "/user" });
}
</script>

<template>
  <h1>Not Found</h1>
  <Button @click="go">Home</Button>
</template>
