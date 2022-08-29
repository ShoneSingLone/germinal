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
import TestPopover from "lsrc/views/demo/TestPopover.vue";
import TestBoundless from "lsrc/views/demo/TestBoundless.vue";

export default defineComponent({
	components: {
		TestPopover,
		TestBoundless
	}
});
</script>
