<template>
	<div class="flex1 flex middle" id="MusicPlayerAudio">
		<span>{{ formatDuring(State_Music.currentTime) }}</span>
		<xGap l="4" />
		<ASlider
			class="flex1"
			:min="0"
			:max="State_Music.duration"
			v-model:value="State_Music.currentTime"
			:tooltip-visible="false"
			@change="changSongProgress" />
		<xGap l="4" />
		<span>{{ formatDuring(State_Music.duration) }}</span>
	</div>
</template>

<script>
import { Actions_Music, State_Music } from "lsrc/state/State_Music";
import { formatDuring } from "lsrc/utils/common";

export default {
	setup() {
		return {
			State_Music,
			formatDuring
		};
	},
	methods: {
		changSongProgress(val) {
			Actions_Music.setCurrentTime(val);
		}
	}
};
</script>

<style lang="less">
#MusicPlayerAudio {
}
</style>
