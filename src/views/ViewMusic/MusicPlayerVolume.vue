<template>
	<xButton class="volume flex horizon">
		<xIcon :icon="Cpt_iconSound" @click="Actions_Music.toggleVolumeMute" />
		<xGap l="4" />
		<div class="flex1">
			<ASlider
				id="test"
				v-model:value="State_Music.volume"
				:tooltip-visible="isTooltipVisible"
				@change="changeVolume" />
		</div>
	</xButton>
</template>

<script>
import { _, lStorage } from "@ventose/ui";
import {
	Actions_Music,
	Cpt_iconSound,
	State_Music
} from "lsrc/state/State_Music";

export default {
	setup() {
		return {
			State_Music,
			Actions_Music,
			Cpt_iconSound
		};
	},
	data() {
		return {
			isTooltipVisible: false,
			isMute: false
		};
	},
	methods: {
		changeVolume(val) {
			if (!this.isTooltipVisible) {
				this.isTooltipVisible = true;
			}
			this.delayHideIsTooltipVisible();
			Actions_Music.setVolume(val);
		},
		delayHideIsTooltipVisible: _.debounce(function () {
			this.isTooltipVisible = false;
		}, 1000 * 3)
	}
};
</script>

<style></style>
