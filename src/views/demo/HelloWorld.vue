mo
<template>
	<div>
		<div>TestBoundless start</div>
		<TestBoundless />
		<div>TestBoundless end</div>
	</div>
	<TestPopover />
	<RouterView />
</template>

<script lang="jsx">
import { defineComponent } from "vue";
import TestPopover from "@ventose/views/demo/TestPopover.vue";
import TestBoundless from "@ventose/views/demo/TestBoundless.vue";

export default defineComponent({
	components: {
		TestPopover,
		TestBoundless
	}
});
</script>
