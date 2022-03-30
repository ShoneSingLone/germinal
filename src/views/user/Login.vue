<script setup>
import { reactive, computed } from "vue";
import { $t } from "lsrc/language";
import LoginCredentials from "./LoginCredentials.vue";
import LoginCredentialsMobile from "./LoginCredentialsMobile.vue";
import { State_Login } from "./State_Login";
import { routeNames } from "lsrc/router/router";
import { _ } from "@ventose/ui";
import {
	AlipayCircleFilled,
	TaobaoCircleFilled,
	WeiboCircleFilled
} from "@ant-design/icons-vue";
</script>

<template>
	<div class="main">
		<div class="user-layout-login ant-form ant-form-horizontal">
			<!-- <Tabs id="user-layout-login_tab" v-model:activeKey="State_Login.activeTabKey" > -->
			<!-- <TabPane key="credentials" :tab="$t('user.login.tab-login-credentials').label" > </TabPane> -->
			<!-- <TabPane key="mobile" :tab="$t('user.login.tab-login-mobile').label"> <LoginCredentialsMobile /> </TabPane> -->
			<!-- </Tabs> -->
			<Alert
				v-if="State_Login.alertTips"
				type="error"
				show-icon
				style="margin-bottom: 24px"
				:message="State_Login.alertTips" />
			<LoginCredentials />
			<div class="item-wrapper flex between">
				<aCheckbox v-model:checked="State_Login.rememberMe">
					{{ $t("user.login.remember-me").label }}
				</aCheckbox>
				<a href="/user/recover" class="forge-password">
					{{ $t("user.login.forgot-password").label }}
				</a>
			</div>
			<div class="item-wrapper">
				<xButton :configs="State_Login.configsSubmit" />
			</div>
			<div class="item-wrapper">
				<div class="user-login-other">
					<span>{{ $t("user.login.sign-in-with").label }}</span>
					<router-link class="register" :to="{ name: routeNames.register }">
						{{ $t("user.login.signup").label }}
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
