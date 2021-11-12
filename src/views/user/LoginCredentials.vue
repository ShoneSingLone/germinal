<script setup lang="jsx">
import { LoginState } from "@views/user/loginState.jsx";
</script>

<template>
  <form class="LoginCredentials-form">
    <!-- 用户名 -->
    <xItem :configs="LoginState.configsForm.userName" autocomplete="username" />
    <xGap t="20" />
    <!-- 密码 -->
    <xItem :configs="LoginState.configsForm.password" autocomplete="current-password" />
  </form>
</template>
