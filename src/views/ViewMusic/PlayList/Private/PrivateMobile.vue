<template>
	<xVirScroll :configs="configs">
		<template #item="{ item }">
			<PrivateMobileSongItem
				:song="item"
				:loading="currentLoadingSongId === item.id"
				@click="playSong(item)" />
		</template>
	</xVirScroll>
</template>

<script>
import { Actions_Music, State_Music } from "@ventose/state/State_Music";
import PrivateMobileSongItem from "./PrivateMobileSongItem.vue";

import { _ } from "@ventose/ui";

export default {
	components: {
		PrivateMobileSongItem
	},
	setup() {
		return {
			State_Music
		};
	},
	data() {
		const vm = this;
		return {
			currentLoadingSongId: "",
			configs: {
				items: _.sortBy(vm.State_Music.AllMusicClient, [
					"artist",
					"album"
				]).reverse()
			}
		};
	},
	methods: {
		async playSong(record) {
			this.currentLoadingSongId = record.id;
			try {
				record.name = record.title;
				record.song = {
					album: {
						name: record.album
					},
					artists: [{ name: record.artist }]
				};
				Actions_Music.pushSongToPlaylist(record);
				await Actions_Music.playSongById(record.id);
			} catch (error) {
				console.error(error);
			} finally {
				this.currentLoadingSongId = false;
			}
		}
	}
};
</script>

<style lang="less">
#playlist-private-mobile {
	height: 100%;
	overflow: auto;
	overflow-x: hidden;
	position: relative;

	.wrapper {
		height: 100%;
	}

	.song-item-wrapper {
		position: absolute;
		width: 100%;

		.song-item {
			display: flex;
			align-items: center;
			box-sizing: border-box;
			font-size: 14px;
			margin: 10px 10px 0;
		}
	}
}
</style>
