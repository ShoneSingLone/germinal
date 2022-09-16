<template>
	<div class="flex vertical flex1 PrivateMobile height100 overflow-hidden">
		<xVirScroll :configs="state.configs" class="flex1">
			<template #item="{ item }">
				<PrivateMobileSongItem
					:song="item"
					:loading="currentLoadingSongId === item.id"
					@click="playSong(item)" />
			</template>
		</xVirScroll>
		<div class="search-wrapper padding10">
			<xItem :configs="state.configs.search" />
		</div>
	</div>
</template>

<script>
import { Actions_Music, State_Music } from "@ventose/state/State_Music";
import PrivateMobileSongItem from "./PrivateMobileSongItem.vue";
import { _ } from "@ventose/ui";
import { state } from "./PrivateLayout.vue";

export default {
	components: {
		PrivateMobileSongItem
	},
	setup() {
		return {
			State_Music,
			state
		};
	},
	data() {
		return {
			currentLoadingSongId: ""
		};
	},
	watch: {
		"state.configs.search.value": {
			immediate: true,
			handler(search) {
				this.setItems(search);
			}
		}
	},
	methods: {
		setItems: _.debounce(function (search) {
			let allItems = this.State_Music.AllMusicClient;
			if (search) {
				allItems = _.filter(allItems, record => {
					const isOk = prop => String(record[prop]).includes(search);
					return isOk("title") || isOk("artist") || isOk("album");
				});
			}

			this.state.configs.items = allItems;
		}, 600),
		async playSong(record) {
			this.currentLoadingSongId = record.id;
			try {
				Actions_Music.pushSongToPlaylist(this.state.configs.items, () =>
					Actions_Music.playSongById(record.id)
				);
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
.PrivateMobile {
	position: relative;
	height: 100px;
	overflow: hidden;
}
</style>
