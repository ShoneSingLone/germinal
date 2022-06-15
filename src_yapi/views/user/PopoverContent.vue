<script setup lang="jsx">
import { reactive } from "vue";

defineProps({
	configs: {
		type: Object,
		default() {
			return {};
		}
	}
});

/* data */
const state = reactive({ count: 0 });
/*renders*/
const renders = {
	test: state => <aButton>{state.count}</aButton>
};
/* methods */
const handlers = {
	clickBtn() {
		state.count++;
	}
};
</script>

<template>
	<aButton @click="handlers.clickBtn">
		{{ $t("user.login.email").label }}
	</aButton>
	<xRender :render="renders.test" :state="State_Login" />
	<aButton @click="handlers.clickBtn"> count is: {{ state.count }} </aButton>
</template>
