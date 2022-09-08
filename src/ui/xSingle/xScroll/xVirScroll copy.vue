<template>
	<!-- 有高度属性 提供滑动条 -->
	<div id="playlist-private-mobile" ref="refWrapper" class="wrapper">
		<!-- 模拟所有数据的高度 -->
		<div :style="wrapperStyle">
			<!-- item1 -->
			<div class="song-item-wrapper item1" :style="styleSongItem1">
				<div
					v-for="song in privatePlaylist1"
					:key="song.id"
					class="song-item"
					@click="playSong(song)">
					<PrivateMobileSongItem
						:song="song"
						:loading="isLoading === song.id" />
				</div>
			</div>
			<!-- item2 -->
			<div class="song-item-wrapper item2" :style="styleSongItem2">
				<div
					v-for="song in privatePlaylist2"
					:key="song.id"
					class="song-item"
					@click="playSong(song)">
					<PrivateMobileSongItem
						:song="song"
						:loading="isLoading === song.id" />
				</div>
			</div>
			<!-- item3 -->
			<div class="song-item-wrapper item3" :style="styleSongItem3">
				<div
					v-for="song in privatePlaylist3"
					:key="song.id"
					class="song-item"
					@click="playSong(song)">
					<PrivateMobileSongItem
						:song="song"
						:loading="isLoading === song.id" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Actions_Music } from "lsrc/state/State_Music";
import privatePlaylist from "lsrc/views/ViewMusic/assets/AllMusicClient.js";
import PrivateMobileSongItem from "lsrc/views/ViewMusic/PlayList/Private/PrivateMobileSongItem.vue";
import { defineComponent } from "vue";

import { _, State_UI, $ } from "lsrc/ui";

const { $t } = State_UI;

const itemHeight = 48;
const perCount = 10;
const oneBlockHeight = 580;

export default defineComponent({
	name: "XVirScroll",
	components: {
		PrivateMobileSongItem
	},
	setup() {
		return {};
	},
	data() {
		return {
			blockCount: 0,
			isLoading: false,
			wrapperStyle: {
				height: 0
			}
		};
	},
	computed: {
		positionBlock() {
			return this.blockCount % 3;
		},
		privatePlaylist1() {
			const position =
				Number(this.styleSongItem1.match(/(\d)/g).join("")) / 580;
			console.log("privatePlaylist1", position);
			const start = position * 10;
			const end = start + 10;
			return privatePlaylist.slice(start, end).map((i, index) => ({
				...i,
				index: start + 1 + index
			}));
		},
		privatePlaylist2() {
			const position =
				Number(this.styleSongItem2.match(/(\d)/g).join("")) / 580;
			console.log("privatePlaylist2", position);
			const start = position * 10;
			const end = start + 10;
			return privatePlaylist.slice(start, end).map((i, index) => ({
				...i,
				index: start + 1 + index
			}));
		},
		privatePlaylist3() {
			const position =
				Number(this.styleSongItem3.match(/(\d)/g).join("")) / 580;
			console.log("privatePlaylist3", position);
			const start = position * 10;
			const end = start + 10;
			return privatePlaylist.slice(start, end).map((i, index) => ({
				...i,
				index: start + 1 + index
			}));
		},
		/* style */
		styleSongItem1() {
			if (this.positionBlock === 0) {
				return `transform:translateY(${this.blockCount * 580}px)`;
			}
			if (this.positionBlock === 1) {
				return `transform:translateY(${(this.blockCount + 2) * 580}px)`;
			}
			return `transform:translateY(${(this.blockCount + 1) * 580}px)`;
		},
		styleSongItem2() {
			if (this.positionBlock === 0) {
				return `transform:translateY(${(this.blockCount + 1) * 580}px)`;
			}
			if (this.positionBlock === 1) {
				return `transform:translateY(${this.blockCount * 580}px)`;
			}
			return `transform:translateY(${(this.blockCount - 1) * 580}px)`;
		},
		styleSongItem3() {
			if (this.positionBlock === 0) {
				return `transform:translateY(${(this.blockCount + 2) * 580}px)`;
			}
			if (this.positionBlock === 1) {
				return `transform:translateY(${(this.blockCount + 1) * 580}px)`;
			}
			return `transform:translateY(${this.blockCount * 580}px)`;
		}
	},
	mounted() {
		const vm = this;
		vm.wrapperStyle.height = `${privatePlaylist.length * itemHeight}px`;
		vm.$wrapperEle = $(vm.$refs.refWrapper);
		vm.$wrapperEle.on("scroll", function (event) {
			const top = vm.$refs.refWrapper.scrollTop;
			vm.blockCount = Math.floor(top / oneBlockHeight);
			console.log("blockCount", vm.blockCount, "🚀 top", top);
		});
	},
	befroeDestroy() {
		this.$wrapperEle.off("scroll");
	},
	methods: {
		async playSong(record) {
			this.isLoading = record.id;
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
				this.isLoading = false;
			}
		}
	}
});
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
