<template>
	<div
		class="CachedMobileSongItem elevation-1 flex middle width100"
		:loading="loading">
		<div class="flex vertical start">
			<div class="title">
				{{ song.title }}
			</div>
			<div class="singer">
				{{ song.index }}-{{ song.artist }}-{{ song.album }}
			</div>
		</div>
		<xGap f="1" />
		<div class="flex">
			<aButton class="mr10 flex middle" @click="$emit('play')">
				<xIcon icon="playsong" />
			</aButton>
			<aButton class="mr10 flex middle" @click="$emit('del')">
				<xIcon icon="delete" />
			</aButton>
		</div>
	</div>
</template>

<script lang="jsx">
export default {
	props: ["song", "loading"],
	emits: ["del", "play"],
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
.CachedMobileSongItem {
	padding: 0 16px;
	line-height: 20px;
	height: 48px;
	border-radius: 4px;

	.title {
		width: 100%;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.singer {
		font-size: 12px;
		text-indent: 16px;
	}
}
</style>
