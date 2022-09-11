<template>
	<aButton
		ref="songItem"
		class="PrivateMobileSongItem elevation-1 flex vertical width100"
		:style="styleBtn"
		:loading="loading">
		<div class="title">
			{{ song?.name || song?.title }}
		</div>
		<div class="singer">
			{{ songSub }}
		</div>
	</aButton>
</template>

<script lang="jsx">
export default {
	props: ["song", "loading", "isShowImg"],
	setup() {
		return {};
	},
	data() {
		return {
			/* isShowImg: false */
		};
	},
	computed: {
		songSub() {
			let { index, song, album, artists, name } = this.song;
			if (album && artists) {
				return `${index}-${artists[0]?.name}-${album?.name}`;
			}

			if (song) {
				let { album, artists, name } = song;
				return `${index}-${artists[0]?.name}-${album?.name}`;
			}
			return "";
		},
		styleBtn() {
			if (this.isShowImg) {
				return { background: `url(${this.song?.picUrl})` };
			} else {
				return {};
			}
		}
	},
	beforeUnmount() {
		this.observer && this.observer.disconnect();
	},
	mounted() {
		/* if ("IntersectionObserver" in window) {
			this.observer = new IntersectionObserver((items) => {
				items.forEach((item) => {
					if (item.isIntersecting) {
						this.isShowImg = true;
						this.observer.unobserve(item.target);
					}
				});
			});
			this.observer.observe(this.$refs.songItem.$el);
		} */
	}
};
</script>

<style lang="less">
.PrivateMobileSongItem {
	line-height: 20px;
	height: 48px;
	border-radius: 16px;

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
</style>
