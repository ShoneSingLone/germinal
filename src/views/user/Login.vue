<script setup lang="jsx">
import {reactive, computed} from "vue";
import {$t} from "@language";
import LoginCredentials from "./LoginCredentials.vue";
import {LoginState} from "./loginState";

const credentialsTab = computed(
    () => $t("user.login.tab-login-credentials").label
);
const credentialsMessage = computed(
    () => $t("user.login.message-invalid-credentials").label
);

const mobileTab = computed(() => $t("user.login.tab-login-mobile").label);

</script>

<template>
  <div class="main">
    <div class="user-layout-login ant-form ant-form-horizontal">
      <Tabs v-model:activeKey="LoginState.activeKey" id="user-layout-login_tab">
        <TabPane key="credentials" :tab="credentialsTab">
          <Alert type="error" showIcon style="margin-bottom: 24px" :message="credentialsMessage"/>
          <LoginCredentials/>
        </TabPane>
        <TabPane key="mobile" :tab="mobileTab">
          <LoginCredentials/>
        </TabPane>
      </Tabs>
      <xItem :configs="LoginState.configsForm.rememberMe"/>
    </div>
  </div>
</template>
