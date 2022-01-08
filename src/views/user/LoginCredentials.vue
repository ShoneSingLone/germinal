<script setup lang="jsx">
import { StateLogin } from "lsrc/views/user/StateLogin.jsx";
</script>

<template>
  <form>
    <!-- 用户名 -->
    <xItem
      v-model="StateLogin.data.username"
      :configs="StateLogin.configsForm.username"
      autocomplete="username"
    />
    <xGap t="20" />
    <!-- 密码 -->
    <xItem
      v-model="StateLogin.data.password"
      :configs="StateLogin.configsForm.password"
      autocomplete="current-password"
    />
  </form>
</template>
