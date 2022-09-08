<script setup>
import { reactive, computed } from "vue";
import LoginCredentials from "./LoginCredentials.vue";
import LoginCredentialsMobile from "./LoginCredentialsMobile.vue";
import { State_Register } from "./State_Register";
import { routeNames } from "@ventose/router/router";
import PopoverContentVue from "./PopoverContent.vue";
import { State_UI } from "@ventose/ui";
const { $t } = State_UI;

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
	return levelClass[State_Register.statePassword.passwordLevel];
});
const passwordLevelName = computed(() => {
	return levelNames[State_Register.statePassword.passwordLevel];
});
const passwordLevelColor = computed(() => {
	return levelColor[State_Register.statePassword.passwordLevel];
});

const configsTestPopover = {
	width: 400,
	content: PopoverContentVue,
	preventHide: true,
	trigger: "hover",
	onShow() {
		console.log("Popover shown.");
	},
	onHide() {
		console.log("Popover hidden.");
	}
};
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
					ref="email"
					v-model="State_Register.data.email"
					:configs="State_Register.configsForm.email"
					autocomplete="email" />
				<xGap t="20" />
				<!-- 密码 -->
				<Popover
					:visible="State_Register.isShowCheckPasswordPopover"
					:trigger="['click']"
					placement="rightTop">
					<xItem
						v-model="State_Register.data.password"
						:configs="State_Register.configsForm.password"
						autocomplete="current-password" />
					<template #content>
						<div :style="{ width: '240px' }">
							<div :class="['user-register', passwordLevelClass]">
								{{ $t(passwordLevelName).label }}
							</div>
							<Progress
								:percent="State_Register.statePassword.percent"
								:show-info="false"
								:stroke-color="passwordLevelColor"
								:get-popup-container="trigger => trigger.parentElement" />
							<div style="margin-top: 10px">
								<span
									>{{ $t("user.register.password.popover-message").label }}
								</span>
							</div>
						</div>
					</template>
				</Popover>

				<xGap t="20" />
				<!-- 确认密码 -->
				<xItem
					v-model="State_Register.data.passwordConfirm"
					:configs="State_Register.configsForm.passwordConfirm"
					autocomplete="current-password" />

				<xGap t="20" />
				<div class="flex">
					<!-- 验证码 -->
					<xItem
						v-model="State_Register.data.verifyCode"
						:configs="State_Register.configsForm.verifyCode"
						autocomplete="current-password" />
					<xGap l="20" />
					<!-- 获取验证码的按钮 -->
					<xButtonCountDown :configs="State_Register.configsverifyCode" />
				</div>
			</form>
			<xGap t="20" />
			<div class="item-wrapper flex">
				<xButton :configs="State_Register.configsSubmit" />
				<xGap l="80" />
				<RouterLink class="register" :to="{ name: routeNames.login }">
					{{ $t("user.register.sign-in").label }}
				</RouterLink>
			</div>
		</div>
	</div>
</template>
