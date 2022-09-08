<script>
import { routeNames } from "@ventose/router/router";
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			tips: "tips"
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		async init() {
			try {
				const constraints = (window.constraints = {
					autio: false,
					video: true
				});
				const stream = navigator.mediaDevices.getUserMedia(constraints);
			} catch (error) {
				console.error(error);
			}
		},
		go() {
			this.$router.push({ name: routeNames.shell });
		}
	}
});
</script>

<template>
	<h1>{{ tips }}</h1>
</template>
