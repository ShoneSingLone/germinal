<template>
	<span :id="id" role="img" :aria-label="this.icon" class="xIcon anticon">
		<div
			class="next-loading next-open next-loading-inline"
			style="width: 100%; height: 100%; overflow: hidden">
			<div class="next-loading-tip">
				<div class="next-loading-indicator" />
			</div>
			<div class="next-loading-component next-loading-wrap">
				<div class="next-loading-masker" />
				<div class="demo-basic">
					<LoadingOutlined />
				</div>
			</div>
		</div>
	</span>
</template>

<script lang="jsx">
// @ts-nocheck
import { defineComponent, markRaw } from "vue";
import { LoadingOutlined } from "@ant-design/icons-vue";
import { _ } from "../loadCommonUtil";
import $ from "jquery";
import { State_UI } from "../State_UI";
import { get, set } from "idb-keyval";

export default defineComponent(
	markRaw({
		components: { LoadingOutlined },
		name: "xIcon",
		props: ["icon"],
		data() {
			const id = "lazy-svg_" + this._.uid;
			return { id };
		},
		computed: {
			iconKey() {
				const _iconKey = _.camelCase(this.getIconPath()).replace(/\s/, "");
				return _iconKey;
			}
		},
		methods: {
			getIconPath() {
				return `${State_UI.assetsSvgPath}/${this.icon}.svg`;
			},
			async setIcon() {
				if (!this.icon) return;
				try {
					let iconSvgString = await get(this.iconKey);
					if (!iconSvgString || iconSvgString === "undefined") {
						debugger;
						iconSvgString = await _.asyncLoadText(this.getIconPath());
						await set(this.iconKey, iconSvgString);
					}

					if (iconSvgString) {
						const $svg = $(iconSvgString)
							.css("height", "100%")
							.css("width", "100%");
						let targetDom = await _.ensureValueDone(() =>
							document.getElementById(this.id)
						);
						targetDom.innerHTML = $svg[0].outerHTML;
						targetDom.id = this.id;
					}
				} catch (error) {
					console.error(error);
				}
			}
		},
		watch: {
			icon: {
				immediate: true,
				handler() {
					this.setIcon();
				}
			}
		}
	})
);
</script>

<style lang="scss">
.xIcon {
	width: 16px;
}

div[id^="lazy-svg_"] {
	display: flex;
}

.next-loading {
	height: 100%;
	width: 100%;

	&.next-open {
		pointer-events: none;
	}
}

.next-loading .next-loading-component {
	opacity: 0.7;
	filter: blur(1px);
	filter: "progid:DXImageTransform.Microsoft.Blur(PixelRadius=1, MakeShadow=false)";
	position: relative;
	pointer-events: none;
}

.next-loading-masker {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 99;
	opacity: 0.2;
	background: #fff;
}

.next-loading-inline {
	display: inline-block;
}

.next-loading-tip {
	display: block;
	position: absolute;
	z-index: 4;
	text-align: center;
}
</style>
