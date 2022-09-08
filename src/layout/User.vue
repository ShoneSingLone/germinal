<script setup>
import logoImg from "../assets/logo2.jpg";
import SelectLanguage from "lsrc/components/SelectLanguage/SelectLanguage.vue";
import { State_App } from "lsrc/state/State_App";
import { _ } from "lsrc/ui";
</script>

<template>
	<div
		id="userLayout"
		:class="['user-layout-wrapper', State_App.isMobile && 'mobile']">
		<div class="container container-background">
			<div class="user-layout-lang">
				<SelectLanguage class="select-lang-trigger" />
			</div>
			<div class="user-layout-content">
				<div class="top">
					<div class="header">
						<a href="/">
							<img :src="logoImg" class="logo" alt="logo" />
							<span class="title">{{ $t("login.title").label }}</span>
						</a>
					</div>
					<div class="desc">
						{{ $t("layouts.userLayout.title").label }}
					</div>
				</div>

				<router-view />

				<div class="footer">
					<div class="links">
						<a href="_self">帮助</a>
						<a href="_self">隐私</a>
						<a href="_self">条款</a>
					</div>
					<div class="copyright">Copyright &copy; ventose</div>
				</div>
			</div>
		</div>
	</div>
</template>
