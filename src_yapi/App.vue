<script>
/*https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup*/
import { defineComponent } from "vue";
import { _ } from "@ventose/ui";
import Footer from "ysrc/components/Footer/Footer.vue";
import Header from "ysrc/components/Header/Header";
import { Methods_App, State_App } from "ysrc/state/State_App";

export default defineComponent({
	components: { Footer, Header },
	setup() {
		return {
			State_App
		};
	},
	data() {
		return {
			isLoading: true
		};
	},
	async mounted() {
		/* try { } catch (error) {} */
		this.isLoading = false;
	}
});
</script>
<template>
	<Header v-if="State_App.user.loginState !== 1" />
	<RouterView v-loading="isLoading" />
	<Footer />
</template>

<style lang="less" src="./styles/App.less"></style>
<style lang="scss" src="./containers/Home/Home.scss"></style>
