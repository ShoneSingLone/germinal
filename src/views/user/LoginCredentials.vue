<script setup lang="jsx">
import { reactive, defineComponent, createApp } from "vue";
import { $t } from "@language";
import {onMounted}from "vue";
import { reactiveItemConfigs } from "@ventose/ui/common";
import { AppState, getColor } from "../../state/app";
const handleUsernameOrEmail = _.doNoting;
const styles = {
  icon: { color: getColor("disabledColor") },
};
const renderLockStrok = () => {
  return (
    <svg
      viewBox="64 64 896 896"
      data-icon="lock"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      class=""
    >
      <path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z"></path>
    </svg>
  );
};


const state = reactive({
  configsForm: {
    userName: reactiveItemConfigs({
      value: "",
      size: "large",
      /* 变化的时候重新获取 */
      placeholder: () => $t("user.login.username.placeholder").label,
      rules: [
        { required: true, message: $t("user.userName.required").label },
        { validator: handleUsernameOrEmail },
      ],
      slots: {
        prefix: () => <UserOutlined style={styles.icon} />,
      },
    }),
    password: reactiveItemConfigs({
      isPassword: true,
      value: "",

      size: "large",
      /* 变化的时候重新获取 */
      placeholder: () => $t("user.login.password.placeholder").label,
      rules: [
        {
          required: true,
          message: $t("user.password.required").label,
        },
        { validator: handleUsernameOrEmail },
      ],
      slots: {
        prefix: () => <xRender render={renderLockStrok} style={styles.icon} />,
      },
    }),
  },
});

</script>

<template>
  <div class="LoginCredentials-form">
    <xItem :configs="state.configsForm.userName" />
    <xItem :configs="state.configsForm.password" class="mt10" />
  </div>
</template>
