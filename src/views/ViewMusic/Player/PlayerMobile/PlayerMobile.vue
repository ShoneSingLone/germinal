<template>
	<div class="flex center ViewMusicPlayerMobile">
		<div class="audio">
			<MusicPlayerAudio />
			<div class="flex center">
				{{ currentSong.title }}
			</div>
		</div>

		<div class="flex MusicPlayerOpration">
			<MusicPlayerModel />
			<xGap l="16" />
			<MusicPlayerOpration />
		</div>
	</div>
</template>

<script lang="jsx">
import { defineComponent } from "vue";
import MusicPlayerModel from "./MusicPlayerModel.vue";
import MusicPlayerOpration from "./MusicPlayerOpration.vue";
import MusicPlayerAudio from "./MusicPlayerAudio.vue";
import { Actions_Music, State_Music } from "@ventose/state/State_Music";
import { _ } from "@ventose/ui";

export default defineComponent({
	components: {
		MusicPlayerModel,
		MusicPlayerOpration,
		MusicPlayerAudio
	},
	setup() {
		Actions_Music.setVolume(100);
		return {
			State_Music
		};
	},
	computed: {
		currentSong() {
			return (
				_.find(this.State_Music.playlist, { id: this.State_Music.songId }) || {
					title: "--"
				}
			);
		}
	},
	async mounted() {
		await Actions_Music.updatePersonalizedNewSong();
	}
});
</script>

<style lang="less">
.ViewMusicPlayerMobile {
	width: 100%;
	position: relative;
	height: 120px;

	.audio {
		position: absolute;
		top: 0;
		left: 16px;
		right: 16px;
		z-index: 1;
	}

	.MusicPlayerOpration {
		margin: 64px;
	}

	.site-layout .site-layout-background {
		background: #fff;
	}

	.ant-layout-sider {
		position: relative;
		min-width: 0;
		background: #ffffff;
		transition: all 0.2s;
	}

	.volume {
		width: 120px;
	}
}
</style>
