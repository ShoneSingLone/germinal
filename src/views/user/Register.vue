<script setup>
import {reactive, computed} from "vue";
import {$t} from "@language";
import LoginCredentials from "./LoginCredentials.vue";
import LoginCredentialsMobile from "./LoginCredentialsMobile.vue";
import {StateLogin} from "./StateLogin";
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
          :configs="StateLogin.configsForm.userName"
          autocomplete="username"
        />
        <xGap t="20" />
        <!-- 密码 -->
        <xItem
          :configs="StateLogin.configsForm.password"
          autocomplete="current-password"
        />
        <xGap t="20" />
        <!-- 密码 -->
        <xItem
          :configs="StateLogin.configsForm.password"
          autocomplete="current-password"
        />
        <xGap t="20" />
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
      <div class="item-wrapper flex">
        <xButton :configs="StateLogin.configsSubmit" />
        <xGap l="20" />
        <RouterLink
          class="register"
          :to="{ name: routeNames.login }"
        >
          {{ $t("user.login.signup").label }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
