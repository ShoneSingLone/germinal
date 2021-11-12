<script setup lang="jsx">
import { LoginState } from "@views/user/loginState.jsx";
</script>

<template>
  <form class="LoginCredentials-form">
    <!-- 用户名 -->
    <xItem
      :configs="LoginState.configsFormMobile.mobile"
      autocomplete="username"
    />
    <xGap t="20" />
    <!-- 密码 -->
    <div class="flex">
      <xItem :configs="LoginState.configsFormMobile.verificationCode" autocomplete="current-password" />
      <xGap l="20" />
      <xButton :configs="LoginState.configsVerificationCode"/>
    </div>
  </form>
</template>
