<script setup></script>
<template>
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
    <div style="margin-top: 10px">
      <span>{{ $t("user.register.password.popover-message").label }} </span>
    </div>
  </div>
</template>

<style></style>
