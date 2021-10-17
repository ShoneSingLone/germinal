<script setup>
/*https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup*/
import { setHtmlTitle } from "./components/ui/tools/dom";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
setHtmlTitle("Germinal");
</script>
<template>
  <RouterView />
</template>
