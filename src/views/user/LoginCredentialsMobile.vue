<script setup lang="jsx">
import { State_Login } from "lsrc/views/user/State_Login.jsx";
</script>

<template>
	<form>
		<!-- 手机号 -->
		<xItem
			v-model="State_Login.data.mobile"
			:configs="State_Login.configsFormMobile.mobile"
			autocomplete="username" />
		<xGap t="20" />
		<div class="flex">
			<!-- 验证码 -->
			<xItem
				v-model="State_Login.data.verifyCode"
				:configs="State_Login.configsFormMobile.verifyCode"
				autocomplete="current-password" />
			<xGap l="20" />
			<!-- 获取验证码的按钮 -->
			<xButtonCountDown :configs="State_Login.configsverifyCode" />
		</div>
	</form>
</template>
