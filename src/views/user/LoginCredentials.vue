<script setup lang="jsx">
import { StateLogin } from "lsrc/views/user/StateLogin.jsx";
</script>

<template>
  <form>
    <!-- 用户名 -->
    <xItem
      :configs="StateLogin.configsForm.userName"
      autocomplete="username"
    />
    <xGap t="20" />
    <!-- 密码 -->
    <xItem
      :configs="StateLogin.configsForm.password"
      autocomplete="current-password"
    />
  </form>
</template>
