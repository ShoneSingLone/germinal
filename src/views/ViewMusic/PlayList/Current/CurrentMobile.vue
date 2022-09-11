<template>
	<xVirScroll :configs="configs" class="CurrentMobileScroll">
		<template #item="{ item }">
			<CurrentMobileSongItem :song="item" />
		</template>
	</xVirScroll>
</template>

<script>
import { State_Music } from "@ventose/state/State_Music";
import CurrentMobileSongItem from "./CurrentMobileSongItem.vue";
import { getMany, keys, del } from "idb-keyval";

import { _, $ } from "@ventose/ui";

export default {
	components: {
		CurrentMobileSongItem
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
	watch: {
		"State_Music.playlist.length": {
			immediate: true,
			handler() {
				this.configs.items = _.map(this.State_Music.playlist, record => {
					const { song } = record;
					if (song) {
						record.title = record.name;
						record.album = song.album.name;
						record.artist = song.artists[0].name;
					}
					return record;
				});
			}
		}
	},
	mounted() {}
};
</script>

<style lang="less"></style>
