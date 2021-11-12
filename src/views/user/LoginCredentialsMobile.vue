<script setup lang="jsx">
import {StateLogin} from "@views/user/StateLogin.jsx";
</script>

<template>
  <form>
    <!-- 手机号 -->
    <xItem
      :configs="StateLogin.configsFormMobile.mobile"
      autocomplete="username"
    />
    <xGap t="20" />
    <!-- 验证码 -->
    <div class="flex">
      <xItem
        :configs="StateLogin.configsFormMobile.verificationCode"
        autocomplete="current-password"
      />
      <xGap l="20" />
      <xButton :configs="StateLogin.configsVerificationCode" />
    </div>
  </form>
</template>
