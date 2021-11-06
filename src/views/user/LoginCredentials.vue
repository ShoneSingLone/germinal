<script setup lang="jsx">
import {LoginState} from "@views/user/loginState.jsx";

</script>

<template>
  <form class="LoginCredentials-form">
    <!-- 用户名 -->
    <xItem :configs="LoginState.configsForm.userName" class="mb10" autocomplete="username"/>
    <!-- 密码 -->
    <xItem :configs="LoginState.configsForm.password" class="mt10" autocomplete="current-password"/>
  </form>
</template>
