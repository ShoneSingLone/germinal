<script setup lang="jsx">
import {reactive, computed} from "vue";
import {$t} from "@language";
import LoginCredentials from "./LoginCredentials.vue";
import {LoginState} from "./loginState";

</script>

<template>
  <div class="main">
    <div class="user-layout-login ant-form ant-form-horizontal">
      <Tabs v-model:activeKey="LoginState.activeKey" id="user-layout-login_tab">
        <TabPane
            key="credentials"
            :tab="$t('user.login.tab-login-credentials').label"
        >
          <Alert
              type="error"
              showIcon
              style="margin-bottom: 24px"
              :message="$t('user.login.message-invalid-credentials').label"
          />
          <LoginCredentials/>
        </TabPane>
        <TabPane key="mobile" :tab="$t('user.login.tab-login-mobile').label">
          <LoginCredentials/>
        </TabPane>
      </Tabs>
      <div class="item-wrapper flex between">
        <Checkbox v-model:checked="LoginState.rememberMe"
        >{{ $t("user.login.remember-me").label }}
        </Checkbox>
        <a href="/user/recover" class="forge-password">
          {{ $t("user.login.forgot-password").label }}
        </a>
      </div>
      <div class="item-wrapper">
        <xButton :configs="LoginState.configsSubmit"/>
      </div>
    </div>
  </div>
</template>
