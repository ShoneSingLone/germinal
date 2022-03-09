<script lang="jsx">
import { defineComponent, useAttrs, h, mergeProps, computed } from "vue";
import renders from "./itemRenders";
import { MutatingProps } from "../common";
import { checkXItem, EVENT_TYPE, TIPS_TYPE } from "../tools/validate";
import { _ } from "../loadCommonUtil";
import $ from "jquery";

export default defineComponent({
	props: {
		labelWidth: {
			type: String,
			default: "120px"
		},
		textAlign: {
			type: String,
			default: "right"
		}
	},
	emits: [],
	data() {
		return {};
	},
	computed: {
		/* 组件唯一标识 */
		xFormId() {
			return `xForm_${this._.uid}`;
		},
		styleContent() {
			return `
#${this.xFormId} {
    width:100%;
    padding:0 16px;
}

#${this.xFormId} div.ant-form-item-label {
    width:${this.labelWidth};
    text-align:${this.textAlign};
}
`;
		}
	},
	watch: {
		styleContent() {
			this.updateStyle(this.styleContent);
		}
	},
	mounted() {
		const $form = $(`#${this.xFormId}`);
		const $style = $("<style/>", { id: `style_${this.xFormId}` }).append(
			this.styleContent
		);
		$form.prepend($style);
	},
	methods: {
		updateStyle(styleContent) {
			const $style = $(`#style_${this.xFormId}`);
			$style.html(styleContent);
		}
	}
});
</script>

<template>
	<form :id="xFormId">
		<slot />
	</form>
	<!-- <form :id="xFormId" style="opacity: 0"><slot></slot></form> -->
</template>

<style></style>
