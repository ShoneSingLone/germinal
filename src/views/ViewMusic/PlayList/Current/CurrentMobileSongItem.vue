<template>
	<aButton
		ref="item"
		class="CurrentMobileSongItem elevation-1 flex horizon width100 middle"
		:loading="loading"
		:data-index="song.index"
		@click="playSong">
		<div class="title">
			{{ song.title }}
		</div>
		<div class="singer">{{ song.artist }}-{{ song.album }}</div>
	</aButton>
	<div
		:data-song-index="song.index"
		:style="styleDelete"
		class="elevation-1 CurrentMobileSongItem_delete-icon flex vertical middle center"
		@click="removeSongFromPlaylist">
		<xIcon icon="delete" />
	</div>
</template>

<script lang="jsx">
import { Actions_Music } from "@ventose/state/State_Music";
import { $ } from "@ventose/ui";
const WIDTH = 64;
export default {
	props: ["song"],
	setup() {
		return {};
	},
	data() {
		return {
			width: 0,
			isMove: false,
			loading: false,
			isShowDeleteIcon: false
		};
	},
	computed: {
		styleDelete() {
			return { width: `${this.width}px` };
		}
	},
	mounted() {
		$(this.$refs.item.$el)
			.on("mousedown", this.handleMousedown)
			.on("mousemove", this.handleMousemove)
			.on("mouseup", this.handleMouseup)
			.on("mouseleave", this.handleMouseup);
	},
	methods: {
		handleMousedown(e) {
			if (!this.isMove) {
				this.isMove = true;
				this.moveStart = e.clientX;
			}
		},
		handleMousemove(e) {
			if (this.isMove) {
				const distance = this.moveStart - e.clientX;
				if (distance < 0) {
					if (this.width + distance > 0) {
						this.width = this.width + distance;
					}
				} else {
					this.width = distance;
				}
				return;
			}
		},
		handleMouseup() {
			if (this.isMove) {
				this.isMove = false;
				if (this.width < 44) {
					this.width = 0;
				} else {
					this.width = WIDTH;
				}
			}
		},
		async removeSongFromPlaylist() {
			Actions_Music.removeSongFromPlaylistById(this.song.id);
		},
		async playSong() {
			const record = this.song;
			this.loading = true;
			try {
				Actions_Music.pushSongToPlaylist(record);
				await Actions_Music.playSongById(record.id);
			} catch (error) {
				console.error(error);
			} finally {
				this.loading = false;
			}
		}
	}
};
</script>

<style lang="less">
.CurrentMobileSongItem {
	line-height: 20px;
	height: 48px;
	border-top-right-radius: 16px;
	border-bottom-right-radius: 16px;
	z-index: 1;

	> .title {
		width: 100%;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	> .singer {
		font-size: 12px;
		text-indent: 16px;
	}
}

.CurrentMobileSongItem_delete-icon {
	width: 0;
	line-height: 20px;
	height: 48px;
	transform: translateX(-10px);
	z-index: 0;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	background-color: #e9f7ff;
}
</style>
