<script setup>
import { reactive, computed } from "vue";
import { $t } from "lsrc/language";
import LoginCredentials from "./LoginCredentials.vue";
import LoginCredentialsMobile from "./LoginCredentialsMobile.vue";
import { StateLogin } from "./StateLogin";
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
			<Tabs
				id="user-layout-login_tab"
				v-model:activeKey="StateLogin.activeTabKey">
				<TabPane
					key="credentials"
					:tab="$t('user.login.tab-login-credentials').label">
					<Alert
						v-if="StateLogin.alertTips"
						type="error"
						show-icon
						style="margin-bottom: 24px"
						:message="StateLogin.alertTips" />
					<LoginCredentials />
				</TabPane>
				<TabPane key="mobile" :tab="$t('user.login.tab-login-mobile').label">
					<LoginCredentialsMobile />
				</TabPane>
			</Tabs>
			<div class="item-wrapper flex between">
				<Checkbox v-model:checked="StateLogin.rememberMe">
					{{ $t("user.login.remember-me").label }}
				</Checkbox>
				<a href="/user/recover" class="forge-password">
					{{ $t("user.login.forgot-password").label }}
				</a>
			</div>
			<div class="item-wrapper">
				<xButton :configs="StateLogin.configsSubmit" />
			</div>
			<div class="item-wrapper">
				<div class="user-login-other">
					<span>{{ $t("user.login.sign-in-with").label }}</span>
					<a>
						<AlipayCircleFilled class="item-icon" type="AlipayCircleFilled" />
					</a>
					<a>
						<TaobaoCircleFilled class="item-icon" type="TaobaoCircleFilled" />
					</a>
					<a>
						<WeiboCircleFilled class="item-icon" type="WeiboCircleFilled" />
					</a>
					<router-link class="register" :to="{ name: routeNames.register }">
						{{ $t("user.login.signup").label }}
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
