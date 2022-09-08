const { compileTemplate } = require("vue/compiler-sfc");

const res = compileTemplate({
	id: JSON.stringify("id"),
	source: `<script setup lang="jsx">
    import TestPopover from "@ventose/views/demo/TestPopover.vue";
    </script>
    
    <template>
        <TestPopover />
        <RouterView />
    </template>
    `,
	filename: "/path",
	transformAssetUrls: false
});

console.log(res.code);
