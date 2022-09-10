<template>
	<aButton
		class="PrivateMobileSongItem elevation-1 flex vertical width100"
		:loading="loading">
		<div class="title">
			{{ song.title }}
		</div>
		<div class="singer">
			{{ song.index }}-{{ song.artist }}-{{ song.album }}
		</div>
	</aButton>
</template>

<script lang="jsx">
export default {
	props: ["song", "loading"],
	setup() {
		return {};
	},
	data() {
		return {};
	},
	computed: {},
	mounted() {}
};
</script>

<style lang="less">
.PrivateMobileSongItem {
	line-height: 20px;
	height: 48px;
	border-radius: 16px;

	> .title {
		width: 100%;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	> .singer {
		font-size: 12px;
		text-indent: 16px;
	}
}
</style>
