<script setup>
import { useRouter } from "vue-router";
import { routeNames } from "lsrc/router/router";

const router = useRouter();
function go() {
  router.push({ name: routeNames.login });
}
</script>

<template>
  <Result
    status="404"
    title="404"
    :sub-title="$t('notFoundTips').label"
  >
    <template #extra>
      <Button
        type="primary"
        @click="go"
      >
        {{ $t("BackHome").label }}
      </Button>
    </template>
  </Result>
</template>
