<script>
/*https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup*/
import { defineComponent } from "vue";
import { _ } from "@ventose/ui";
import Footer from "ysrc/components/Footer/Footer.vue";
import { Mutations_App } from "ysrc/state/State_App";

export default defineComponent({
	components: { Footer },
	data() {
		return {
			isLoading: true
		};
	},
	async mounted() {
		await Mutations_App.checkLoginState();
		this.isLoading = false;
	}
});
</script>
<template>
	<RouterView v-loading="isLoading" />
	<Footer />
</template>

<style lang="less" src="./styles/App.less"></style>
<style lang="scss" src="./containers/Home/Home.scss"></style>
