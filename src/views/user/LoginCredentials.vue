<script setup lang="jsx">
import { State_Login } from "lsrc/views/user/State_Login.jsx";
</script>

<template>
	<form>
		<!-- 用户名 -->
		<xItem
			v-model="State_Login.data.email"
			:configs="State_Login.configsForm.email"
			autocomplete="email" />
		<xGap t="20" />
		<!-- 密码 -->
		<xItem
			v-model="State_Login.data.password"
			:configs="State_Login.configsForm.password"
			autocomplete="current-password" />
	</form>
</template>
