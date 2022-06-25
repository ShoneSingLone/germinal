<script>
/*https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup*/
import { defineComponent } from "vue";
import { _ } from "@ventose/ui";
import Footer from "ysrc/components/Footer/Footer.vue";

export default defineComponent({
	components: { Footer },
	data() {
		return {
			isLoading: true
		};
	},
	async mounted() {
		this.isLoading = false;
	}
});
</script>
<template>
	<aSpin v-if="isLoading"> Loading... </aSpin>
	<RouterView v-else />
	<Footer />
</template>

<style lang="less" src="./styles/App.less"></style>
