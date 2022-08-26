<template>
	<div id="ViewMusicPlayer" class="flex">
		<MusicPlayerModel />
		<xGap l="16" />
		<!-- 上一曲，下一曲，播放，暂停 -->
		<MusicPlayerOpration />
		<xGap l="16" />
		<MusicPlayerAudio />
		<xGap l="16" />
		<MusicPlayerVolume />
	</div>
</template>

<script lang="jsx">
import { defineComponent } from "vue";
import MusicPlayerModel from "./MusicPlayerModel.vue";
import MusicPlayerOpration from "./MusicPlayerOpration.vue";
import MusicPlayerAudio from "./MusicPlayerAudio.vue";
import MusicPlayerVolume from "./MusicPlayerVolume.vue";
import { Actions_Music, State_Music } from "lsrc/state/State_Music";

export default defineComponent({
	components: {
		MusicPlayerModel,
		MusicPlayerOpration,
		MusicPlayerAudio,
		MusicPlayerVolume
	},
	setup() {
		return {
			State_Music
		};
	},
	async mounted() {
		await Actions_Music.getPersonalizedNewSong();
	}
});
</script>

<style lang="less">
#ViewMusicPlayer {
	width: 100%;

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
