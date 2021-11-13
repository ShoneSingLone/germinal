<script setup>
import {reactive, computed} from "vue";
import {$t} from "@language";
import LoginCredentials from "./LoginCredentials.vue";
import LoginCredentialsMobile from "./LoginCredentialsMobile.vue";
import {StateRegister} from "./StateRegister";
import {routeNames} from "@router/router";


const levelNames = {
  0: "user.password.strength.short",
  1: "user.password.strength.low",
  2: "user.password.strength.medium",
  3: "user.password.strength.strong"
};
const levelClass = {
  0: "error",
  1: "error",
  2: "warning",
  3: "success"
};
const levelColor = {
  0: "#ff0000",
  1: "#ff0000",
  2: "#ff7e05",
  3: "#52c41a"
};


const passwordLevelClass = computed(() => {
  return levelClass[StateRegister.statePassword.passwordLevel];
});
const passwordLevelName = computed(() => {
  return levelNames[StateRegister.statePassword.passwordLevel];
});
const passwordLevelColor = computed(() => {
  return levelColor[StateRegister.statePassword.passwordLevel];
});


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
        <Popover
          :visible="StateRegister.isShowCheckPasswordPopover"
          :trigger="['click']"
          placement="rightTop"
        >
          <xItem
            :configs="StateRegister.configsForm.password"
            autocomplete="current-password"
          />
          <template #content>
            <div :style="{ width: '240px' }">
              <div :class="['user-register', passwordLevelClass]">
                {{ $t(passwordLevelName).label }}
              </div>
              <Progress
                :percent="StateRegister.statePassword.percent"
                :show-info="false"
                :stroke-color="passwordLevelColor"
                :get-popup-container="(trigger) => trigger.parentElement"
              />
              <div style="margin-top: 10px;">
                <span>{{ $t("user.register.password.popover-message").label }}
                </span>
              </div>
            </div>
          </template>
        </Popover>
        <!-- <Popover
          v-model:visible="StateRegister.isShowCheckPasswordPopover"
          placement="rightTop"
          :trigger="['click']"
          :get-popup-container="(trigger) => trigger.parentElement"
        >
          <template #content>
            <div :style="{ width: '240px' }">
              <div :class="['user-register', passwordLevelClass]">
                {{ $t(passwordLevelName) }}
              </div>
              <Progress
                :percent="state.percent"
                :show-info="false"
                :stroke-color="passwordLevelColor"
              />
              <div style="margin-top: 10px;">
                <span>{{ $t('user.register.password.popover-message') }}
                </span>
              </div>
            </div>
          </template>
          <xItem
            :configs="StateRegister.configsForm.passwordConfirm"
            autocomplete="current-password"
          />
        </Popover> -->
        <xGap t="20" />
        <!-- 确认密码 -->
        <xItem
          :configs="StateRegister.configsForm.passwordConfirm"
          autocomplete="current-password"
        />

        <xGap t="20" />
        <!-- 手机号 -->
        <xItem
          :configs="StateRegister.configsForm.mobile"
          autocomplete="username"
        />
        <xGap t="20" />
        <!-- 验证码 -->
        <div class="flex">
          <xItem
            :configs="StateRegister.configsForm.verificationCode"
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
