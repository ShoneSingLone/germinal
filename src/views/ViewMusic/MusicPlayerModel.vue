<template>
	<xButton :configs="{ text: '播放方式', onClick: togglePlayModel }">
		<xIcon :icon="iconPlayModel" />
	</xButton>
</template>

<script>
import { Actions_Music } from "lsrc/state/State_Music";

const playModelIconArray = ["playOrder", "playRandom", "playLoop"];
export default {
	data() {
		return {
			playModel: 0
		};
	},
	computed: {
		iconPlayModel() {
			return playModelIconArray[this.playModel];
		}
	},
	methods: {
		async togglePlayModel() {
			this.playModel = (this.playModel + 1) % playModelIconArray.length;
		}
	}
};
</script>

<style lang="less">
#MusicPlayerModel {
}
</style>
