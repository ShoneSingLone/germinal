<template>
	<div class="flex vertical flex1 height100 overflow-hidden">
		<div class="search-wrapper padding10 flex">
			<xItem :configs="state.configs.search" class="flex1 mr10" />
			<xButton :configs="btnClear" style="margin-right: -10px" />
		</div>
		<xGap t="16" />
		<xVirScroll :configs="state.configs" class="flex1">
			<template #item="{ item }">
				<CachedMobileSongItem
					:song="item"
					:loading="currentLoadingSongId === item.id"
					@play="playSong(item)"
					@del="removeSong(item)" />
			</template>
		</xVirScroll>
	</div>
</template>

<script>
import { Actions_Music, State_Music } from "@ventose/state/State_Music";
import CachedMobileSongItem from "./CachedMobileSongItem.vue";
import { getMany, keys, del } from "idb-keyval";
import { preprocessRecord } from "@ventose/utils/common";
import { _ } from "@ventose/ui";
import { state, btnClear } from "./CachedLayout.vue";

export default {
	components: {
		CachedMobileSongItem
	},
	setup() {
		return {
			State_Music,
			state,
			btnClear
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
		async "State_Music.cacheAudioCount"() {
			await this.setItems();
		},
		"state.configs.search.value": {
			immediate: true,
			handler(search) {
				this.setItems(search);
			}
		}
	},
	async mounted() {
		await this.setItems();
	},
	methods: {
		setItems: _.debounce(async function (search) {
			let props = await keys();
			props = props.filter(name => /^audio_/.test(name));
			let allItems = _.map(await getMany(props), i =>
				preprocessRecord(i.records)
			);

			if (search) {
				allItems = _.filter(allItems, record => {
					const isOk = prop => new RegExp(search, "ig").test(record[prop]);
					return isOk("title") || isOk("artist") || isOk("album");
				});
			}
			this.state.configs.items = allItems;
		}, 1000),
		async removeSong(record) {
			await del(`audio_${record.id}`);
			await this.setItems();
		},
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

<style lang="less"></style>
