<script setup>
import { useRouter, useRoute } from "vue-router";
// import { routeNames } from "lsrc/router/router";

const router = useRouter();
function go() {
	router.push({ name: routeNames.login });
}

function check() {
	if (State_App) {
	}
}
</script>

<template>
	<RouterView />
</template>
