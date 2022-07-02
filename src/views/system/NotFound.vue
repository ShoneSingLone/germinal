<script setup>
import { useRouter } from "vue-router";
import { routeNames } from "lsrc/router/router";

const router = useRouter();
function go() {
	router.push({ name: routeNames.shell });
}
</script>

<template>
	<aResult
		status="404"
		title="404"
		:sub-title="$t('notFoundTips').label"
		class="flex1">
		<template #extra>
			<aButton type="primary" @click="go">
				{{ $t("BackHome").label }}
			</aButton>
		</template>
	</aResult>
</template>
