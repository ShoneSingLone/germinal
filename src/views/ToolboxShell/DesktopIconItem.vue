<template>
	<div
		@click="configs.onClick"
		class="desktopicon"
		:title="configs.title"
		style="opacity: 1; transform: scale(1, 1); left: 30px; top: 108px">
		<div :class="imgClass" role="img" aria-hidden="true" />
		<div class="desktopicon_title mb10">
			<div class="l">{{ $t(configs.title).label }}</div>
		</div>
	</div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
	name: "DesktopIconItem",
	props: {
		configs: {
			type: Object,
			default: function () {
				return { title: "unknown", icon: "unknown", handler: () => "unknown" };
			}
		}
	},
	data() {
		return {};
	},
	computed: {
		imgClass() {
			return `desktopicon-img ${this.configs.icon}`;
		}
	},
	mounted() {},
	methods: {}
});
</script>
<style lang="less">
.desktopicon {
	position: absolute;
	color: rgb(241, 241, 241);
	font-size: 12px;
	text-align: center;
	width: 80px;
	z-index: 2;
	cursor: pointer;
	max-height: 105px;
	transform: scale(0);
	opacity: 0;
	border-radius: 8px;
	overflow: hidden;
	transition: background-color 0.25s ease 0s;
	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
		color: rgb(255, 255, 255);
	}
	/* icon img */
	.desktopicon-img {
		height: 66px;
		width: 66px;
		margin: auto;
		margin-top: 3px;

		&.music {
			background: url("./imgs/icon-music.png") center center/contain;
		}
	}
}
</style>
