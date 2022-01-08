<script setup lang="jsx">
import {StateLogin} from "lsrc/views/user/StateLogin.jsx";

</script>

<template>
  <form>
    <!-- 手机号 -->
    <xItem
      v-model="StateLogin.data.mobile"
      :configs="StateLogin.configsFormMobile.mobile"
      autocomplete="username"
    />
    <xGap t="20" />
    <div class="flex">
      <!-- 验证码 -->
      <xItem
        v-model="StateLogin.data.verificationCode"
        :configs="StateLogin.configsFormMobile.verificationCode"
        autocomplete="current-password"
      />
      <xGap l="20" />
      <!-- 获取验证码的按钮 -->
      <xButtonCountDown :configs="StateLogin.configsVerificationCode" />
    </div>
  </form>
</template>
