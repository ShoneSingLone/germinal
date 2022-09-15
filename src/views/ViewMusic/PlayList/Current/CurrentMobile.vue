<template>
	<div
		class="flex1 height100 overflow-hidden flex vertical"
		style="height: 100px">
		<xVirScroll :configs="state.configs" class="CurrentMobileScroll flex1">
			<template #item="{ item }">
				<CurrentMobileSongItem :song="item" />
			</template>
		</xVirScroll>
		<div class="search-wrapper padding10 flex elevation-2">
			<xItem :configs="state.configs.search" class="flex1 mr10" />
			<xButton :configs="btnClear" />
		</div>
	</div>
</template>

<script>
import { State_Music, Actions_Music } from "@ventose/state/State_Music";
import CurrentMobileSongItem from "./CurrentMobileSongItem.vue";
import { preprocessRecord } from "@ventose/utils/common";
import { _, $, defItem } from "@ventose/ui";
import { reactive } from "vue";

const state = reactive({
	configs: {
		...defItem({
			value: "",
			prop: "search",
			placeholder: "标题、歌手、所属专辑",
			allowClear: true
		}),
		items: []
	}
});

export default {
	components: {
		CurrentMobileSongItem
	},
	setup() {
		return {
			state,
			State_Music
		};
	},
	data() {
		const vm = this;
		return {
			currentLoadingSongId: "",
			btnClear: {
				text: "移除",
				async onClick() {
					if (vm.state.configs.search.value) {
						_.each(
							vm.state.configs.items,
							Actions_Music.removeSongFromPlaylist
						);
					} else {
						Actions_Music.clearPlaylist();
					}
				}
			}
		};
	},
	watch: {
		"State_Music.playlist.length": {
			immediate: true,
			handler(length) {
				console.log(
					"🚀 ~ file: CurrentMobile.vue ~ line 72 ~ handler ~ length",
					length
				);
				this.setItems(this.state.configs.search.value);
			}
		},
		"state.configs.search.value": {
			immediate: true,
			handler(search) {
				this.setItems(search);
			}
		}
	},
	mounted() {},
	methods: {
		setItems: _.debounce(function (search) {
			let allItems = _.map(this.State_Music.playlist, preprocessRecord);
			if (search) {
				allItems = _.filter(allItems, record => {
					const isOk = prop => String(record[prop]).includes(search);
					return isOk("title") || isOk("artist") || isOk("album");
				});
			}
			this.state.configs.items = allItems;
		}, 600)
	}
};
</script>

<style lang="less"></style>
