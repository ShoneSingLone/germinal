<template>
	<xButton :configs="{ text: '上一曲', onClick: Actions_Music.palyPrevSong }">
		<xIcon icon="prevsong" />
	</xButton>
	<xGap l="4" />
	<xButton :configs="{ text: '停止', onClick: Actions_Music.stopSong }">
		<xIcon icon="stopsong" />
	</xButton>
	<xGap l="4" />
	<xButton :configs="playOrPause" />
	<xGap l="4" />
	<xButton :configs="{ text: '下一曲', onClick: Actions_Music.playNextSong }">
		<xIcon icon="nextsong" />
	</xButton>
</template>

<script lang="jsx">
import { Actions_Music, State_Music } from "@ventose/state/State_Music";

export default {
	setup() {
		return {
			State_Music,
			Actions_Music
		};
	},
	data() {
		const iconPause = <xIcon icon="pausesong"></xIcon>;
		const iconPlaysong = <xIcon icon="playsong"></xIcon>;

		return {
			iconPlaysong,
			iconPause,
			playOrPause: {
				text: iconPlaysong,
				onClick() {
					Actions_Music.togglePlayOrPause();
				}
			}
		};
	},
	computed: {
		iconSound() {
			return this.isMute ? "soundMute" : "sound";
		}
	},
	watch: {
		"State_Music.isPlaying": {
			immediate: true,
			handler(isPlaying) {
				this.playOrPause.text = isPlaying ? this.iconPause : this.iconPlaysong;
			}
		}
	},
	methods: {
		toggleVolumeMute() {
			this.isMute = !this.isMute;
		}
	}
};
</script>

<style></style>
