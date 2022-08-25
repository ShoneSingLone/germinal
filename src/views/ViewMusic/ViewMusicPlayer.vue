<template>
	<div id="ViewMusicPlayer" class="flex">
		<xButton :configs="{ text: '上一曲' }">
			<xIcon icon="prevsong" />
		</xButton>
		<xGap l="10" />
		<xButton :configs="{ text: '播放' }">
			<xIcon icon="playsong" />
		</xButton>
		<xButton :configs="{ text: '暂停' }">
			<xIcon icon="pausesong" />
		</xButton>
		<xGap l="10" />
		<xButton :configs="{ text: '下一曲' }">
			<xIcon icon="nextsong" />
		</xButton>
	</div>
</template>
<script>
import { defineComponent } from "vue";
import { _, State_UI } from "@ventose/ui";

const { $t } = State_UI;

export default defineComponent({
	components: {},

	data() {
		return {};
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
}
</style>
