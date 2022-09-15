<template>
	<div class="flex vertical" style="height: 100%">
		<xItem :configs="state.configs.search" />
		<xGap t="16" />
		<xVirScroll
			v-model:top="scrollTop"
			v-model:height="wrapperHeight"
			v-model:scrollHeight="scrollHeight"
			style="height: 580px"
			class="flex1"
			:configs="state.configs">
			<template #item="{ item }">
				<FindNewMobileSongItem
					:song="item"
					:loading="currentLoadingSongId === item.id"
					:is-show-img="State_Music.songId === item.id"
					@click="playSong(item)" />
			</template>
		</xVirScroll>
	</div>
</template>

<script>
import { Actions_Music, State_Music } from "@ventose/state/State_Music";
import { API } from "@ventose/api";
import FindNewMobileSongItem from "./FindNewMobileSongItem.vue";
import { reactive } from "vue";
import { _, defItem, UI } from "@ventose/ui";

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
		FindNewMobileSongItem
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
			wrapperHeight: 0,
			scrollHeight: 0,
			scrollTop: 0,
			currentLoadingSongId: "",
			isShowSearchBox: false
		};
	},
	watch: {
		"State_Music.personalizedNewSong": {
			immediate: true,
			handler() {
				this.setItems();
			}
		},
		"state.configs.search.value": {
			immediate: true,
			handler(search) {
				this.state.configs.items = [];
				this.state.offset = 1;
				this.state.songCount = 999;
				this.scrollTop = 0;
				this.setItems(search, this.state.offset);
			}
		}
	},
	mounted() {
		this.$watch(
			() => {
				return `scrollHeight${this.scrollHeight}_scrollTop${this.scrollTop}`;
			},
			() => {
				const search = this.state.configs.search.value;
				console.log(
					search,
					this.scrollHeight,
					this.scrollTop,
					this.wrapperHeight
				);
				if (search && this.scrollHeight - this.scrollTop < this.wrapperHeight) {
					this.setItems(search, this.state.offset);
				}
			}
		);
	},
	methods: {
		setItems: _.debounce(async function (keywords, offset) {
			if (keywords && offset) {
				if (this.state.songCount <= this.state.configs.items.length) {
					return;
				}
				const index = UI.layer.loading();
				try {
					const { code, result } = await API.music.search({
						keywords,
						limit: 60,
						offset
					});
					if (code === 200) {
						this.state.songCount = result.songCount;
						this.state.configs.items = _.concat(
							this.state.configs.items,
							result?.songs || []
						);
						++this.state.offset;
						return;
					}
				} catch (error) {
					console.error(error);
				} finally {
					UI.layer.loading(index);
				}
			} else {
				this.state.configs.items = this.State_Music.personalizedNewSong;
				return;
			}
		}, 1000),
		async playSong(record) {
			this.currentLoadingSongId = record.id;
			try {
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
.FindNewMobile {
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
