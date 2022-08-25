<template>
	<div id="ViewMusicPlayer" class="flex">
		<xButton :configs="{ text: '播放方式', onClick: togglePlayModel }">
			<xIcon :icon="iconPlayModel" />
		</xButton>
		<xGap l="16" />
		<xButton :configs="{ text: '上一曲' }">
			<xIcon icon="prevsong" />
		</xButton>
		<xGap l="4" />
		<xButton :configs="{ text: '停止' }">
			<xIcon icon="stopsong" />
		</xButton>
		<xGap l="4" />
		<xButton :configs="playOrPause" />
		<xGap l="4" />
		<xButton :configs="{ text: '下一曲' }">
			<xIcon icon="nextsong" />
		</xButton>
		<xGap l="16" />
		<xButton
			class="volume flex horizon"
			:configs="{ text: '音量', onClick: toggleVolumeMute }">
			<xIcon :icon="iconSound" />
			<xGap l="4" />
			<div class="flex1">
				<ASlider
					id="test"
					v-model:value="volume"
					:tooltip-visible="isTooltipVisible"
					@change="showTooltip" />
			</div>
		</xButton>
	</div>
</template>
<script lang="jsx">
import { defineComponent } from "vue";
import { _, State_UI } from "@ventose/ui";

export default defineComponent({
	components: {},
	data() {
		const vm = this;
		const iconPause = <xIcon icon="pausesong"></xIcon>;
		const iconPlaysong = <xIcon icon="playsong"></xIcon>;
		return {
			iconPlaysong,
			iconPause,
			playModel: 0,
			playModelIconArray: ["playOrder", "playRandom", "playLoop"],
			playOrPause: {
				text: iconPlaysong,
				onClick() {
					vm.togglePlayOrPause();
				}
			},
			isPlaying: false,
			volume: 20,
			isTooltipVisible: false,
			isMute: false
		};
	},
	computed: {
		iconPlayModel() {
			return this.playModelIconArray[this.playModel];
		},
		iconSound() {
			return this.isMute ? "soundMute" : "sound";
		}
	},
	watch: {
		isPlaying(isCurrentPlaying) {
			this.playOrPause.text = isCurrentPlaying
				? this.iconPause
				: this.iconPlaysong;
		}
	},
	methods: {
		togglePlayModel() {
			this.playModel = (this.playModel + 1) % this.playModelIconArray.length;
		},
		togglePlayOrPause() {
			this.isPlaying = !this.isPlaying;
		},
		showTooltip() {
			if (!this.isTooltipVisible) {
				this.isTooltipVisible = true;
			}
			this.delayHideIsTooltipVisible();
		},
		delayHideIsTooltipVisible: _.debounce(function () {
			this.isTooltipVisible = false;
		}, 1000 * 3),
		toggleVolumeMute() {
			this.isMute = !this.isMute;
		}
	}
});
</script>
<style lang="less">
#ViewMusicPlayer {
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
