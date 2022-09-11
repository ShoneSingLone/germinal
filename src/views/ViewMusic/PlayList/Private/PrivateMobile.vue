<template>
	<div class="flex1 PrivateMobile" style="height: 100px">
		<div :class="['search-wrapper', { show: state.isShowSearchBox }]">
			<xItem :configs="state.configs.search" />
		</div>
		<xVirScroll :configs="state.configs">
			<template #item="{ item }">
				<PrivateMobileSongItem
					:song="item"
					:loading="currentLoadingSongId === item.id"
					@click="playSong(item)" />
			</template>
		</xVirScroll>
	</div>
</template>

<script>
import { Actions_Music, State_Music } from "@ventose/state/State_Music";
import PrivateMobileSongItem from "./PrivateMobileSongItem.vue";
import { reactive } from "vue";

import { _, defItem } from "@ventose/ui";
const state = reactive({
	isShowSearchBox: false,
	configs: {
		...defItem({
			value: "",
			prop: "search",
			onFocus() {
				console.log("focus");
				state.isShowSearchBox = true;
			},
			onBlur() {
				console.log("blur");
				state.isShowSearchBox = false;
			}
		}),
		items: []
	}
});

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
		const vm = this;
		return {
			currentLoadingSongId: "",
			isShowSearchBox: false
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
			this.state.configs.items = _.sortBy(allItems, [
				"artist",
				"album"
			]).reverse();
		}, 600),
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
.PrivateMobile {
	position: relative;

	.search-wrapper {
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 1;
		transform: translateX(160px);
		transition: all 0.3s ease-in-out;

		&.show {
			transform: translateX(0);
		}
	}
}
</style>
