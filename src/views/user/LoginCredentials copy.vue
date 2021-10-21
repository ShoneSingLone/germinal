<script setup>
import { reactive } from "vue";
const state = reactive({
  activeKey: "credentials",
});
</script>

<template>
  <div class="main">
    <div class="user-layout-login ant-form ant-form-horizontal">
      <Tabs v-model:activeKey="state.activeKey" id="user-layout-login_tab" >
        <TabPane key="credentials" :tab="$t('user.login.tab-login-credentials').label" >
          <Alert type="error" showIcon style="margin-bottom: 24px" :message="$t('user.login.message-invalid-credentials').label" />
          v-if="isLoginError"
        </TabPane>
        <TabPane key="mobile" :tab="$t('user.login.tab-login-mobile').label">
          <template #tab>
            <span>
              <AndroidOutlined />
              Tab 2
            </span>
          </template>
          Tab 2
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
