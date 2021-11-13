<script setup>
import {reactive, computed} from "vue";
import {$t} from "@language";
import LoginCredentials from "./LoginCredentials.vue";
import LoginCredentialsMobile from "./LoginCredentialsMobile.vue";
import {StateRegister} from "./StateRegister";
import {routeNames} from "@router/router";
</script>

<template>
  <div class="main">
    <div class="user-layout-login ant-form ant-form-horizontal">
      <h3>
        <span>{{ $t("user.register.register").label }}</span>
      </h3>
      <form>
        <!-- 用户名 -->
        <xItem
          :configs="StateRegister.configsForm.userName"
          autocomplete="username"
        />
        <xGap t="20" />
        <!-- 密码 -->
        <xItem
          :configs="StateRegister.configsForm.password"
          autocomplete="current-password"
        />
        <xGap t="20" />
        <!-- 确认密码 -->
        <xItem
          :configs="StateRegister.configsForm.passwordConfirm"
          autocomplete="current-password"
        />
        <xGap t="20" />
        <!-- 手机号 -->
        <xItem
          :configs="StateRegister.configsFormMobile.mobile"
          autocomplete="username"
        />
        <xGap t="20" />
        <!-- 验证码 -->
        <div class="flex">
          <xItem
            :configs="StateRegister.configsFormMobile.verificationCode"
            autocomplete="current-password"
          />
          <xGap l="20" />
          <xButton :configs="StateRegister.configsVerificationCode" />
        </div>
      </form>
      <xGap t="20" />
      <div class="item-wrapper flex">
        <xButton :configs="StateRegister.configsSubmit" />
        <xGap l="80" />
        <RouterLink
          class="register"
          :to="{ name: routeNames.login }"
        >
          {{ $t("user.register.sign-in").label }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
