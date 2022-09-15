<template>
	<div id="ViewMusic" class="flex vertical" style="height: 100%">
		<div id="nav-tab" class="flex width100 around middle elevation-2">
			<div
				v-for="item in State_Music.tabItems"
				:key="item.key"
				:class="{
					'ant-btn-link': item.key === selectedKey,
					'elevation-1': item.key === selectedKey,
					'menu-icon flex middle center': true
				}"
				@click="handleClickSelectedKey(item.key)">
				<xIcon :icon="item.icon" />
			</div>
		</div>
		<div class="flex1 play-list-wrapper flex vertical">
			<RouterView />
		</div>
		<MusicPlayer />
	</div>
</template>
<script lang="jsx">
import { defineComponent, ref } from "vue";

import MusicPlayer from "@ventose/views/ViewMusic/Player/MusicPlayer.vue";
import { State_Music } from "@ventose/state/State_Music";
import { State_App } from "@ventose/state/State_App";

export default defineComponent({
	components: {
		MusicPlayer
	},
	setup() {
		return {
			State_Music,
			State_App
		};
	},
	data() {
		const selectedKey = this.$route.name || "playlist";
		return {
			selectedKey
		};
	},
	methods: {
		handleClickSelectedKey(viewName) {
			this.$router.push({ path: `/music/${viewName}` });
			this.selectedKey = viewName;
		}
	}
});
</script>
<style lang="less">
#ViewMusic {
	#nav-tab {
		height: 48px !important;
		z-index: 1;

		.menu-icon {
			width: 32px;
			height: 32px;
			border-radius: 4px;
		}
	}

	.play-list-wrapper {
		overflow: auto;
		overflow-x: hidden;
		height: 90%;
	}

	.MobileSongItem {
		.title {
			font-weight: 700;
			text-shadow: 1px 1px rgba(7, 6, 100, 0.1);
			margin-right: 4px;
		}

		div {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			text-align: left;
		}
	}
}
</style>
