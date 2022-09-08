<template>
	<xButton
		:configs="{ text: '播放方式', onClick: Actions_Music.togglePlayModel }">
		<xIcon :icon="Cpt_iconPlayModel" />
	</xButton>
</template>

<script>
import {
	Actions_Music,
	State_Music,
	Cpt_iconPlayModel
} from "@ventose/state/State_Music";

export default {
	setup() {
		return {
			State_Music,
			Actions_Music,
			Cpt_iconPlayModel
		};
	}
};
</script>

<style lang="less">
#MusicPlayerModel {
}
</style>
