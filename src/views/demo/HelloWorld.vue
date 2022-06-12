<script setup lang="jsx">
import TestPopover from "lsrc/views/demo/TestPopover.vue";
import TestBoundless from "lsrc/views/demo/TestBoundless.vue";
</script>

<template>
	<div>
		<div>TestBoundless start</div>
		<TestBoundless />
		<div>TestBoundless end</div>
	</div>
	<TestPopover />
	<RouterView />
</template>
