<template>
	<xVirScroll :configs="configs">
		<template #item="{ item }">
			<CachedMobileSongItem
				:song="item"
				:loading="currentLoadingSongId === item.id"
				@click="playSong(item)" />
		</template>
	</xVirScroll>
</template>

<script>
import { Actions_Music, State_Music } from "@ventose/state/State_Music";
import CachedMobileSongItem from "./CachedMobileSongItem.vue";
import { getMany, keys, del } from "idb-keyval";

import { _ } from "@ventose/ui";

export default {
	components: {
		CachedMobileSongItem
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
				items: []
			}
		};
	},
	async mounted() {
		await this.loadCachedSong();
	},
	methods: {
		async loadCachedSong() {
			let props = await keys();
			props = props.filter(name => /^audio_/.test(name));
			let cachedPlaylist = await getMany(props);
			this.configs.items = _.sortBy(
				cachedPlaylist.map(i => i.records),
				["artist", "album"]
			).reverse();
		},
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

<style lang="less"></style>
