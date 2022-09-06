<template>
	<div id="playlist-private-mobile">
		<div
			v-for="song in privatePlaylist"
			:key="song.id"
			class="song-item"
			@click="playSong(song)">
			<aButton class="content elevation-1 flex vertical width100">
				<div class="title">
					{{ song.title }}
				</div>
				<div class="singer">{{ song.artist }}-{{ song.album }}</div>
			</aButton>
		</div>
	</div>
</template>

<script lang="jsx">
import { Actions_Music, State_Music } from "lsrc/state/State_Music";
import privatePlaylist from "lsrc/views/ViewMusic/assets/AllMusicClient.js";
import { reactive } from "vue";

import { _, State_UI } from "@ventose/ui";

const { $t } = State_UI;

export default {
	setup() {
		return {};
	},
	data() {
		return { privatePlaylist };
	},
	methods: {
		async playSong(record) {
			record.name = record.title;
			record.song = {
				album: {
					name: record.album
				},
				artists: [{ name: record.artist }]
			};
			Actions_Music.pushSongToPlaylist(record);
			await Actions_Music.playSongById(record.id);
		}
	}
};
</script>

<style lang="less">
#playlist-private-mobile {
	height: 100%;
	overflow: auto;
	overflow-x: hidden;

	.song-item {
		display: flex;
		align-items: center;
		box-sizing: border-box;
		font-size: 14px;
		margin: 10px;

		.content {
			line-height: 20px;
			height: 48px;
			border-radius: 16px;

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
	}
}
</style>
