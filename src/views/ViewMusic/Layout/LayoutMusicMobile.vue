<template>
	<div id="ViewMusic" class="flex vertical" style="height: 100%">
		<div class="nav-tab top-nav flex middle width100 elevation-2">
			<aButton class="ml10" @click="goHome">
				<xIcon icon="home" />
			</aButton>
		</div>
		<div class="flex1 play-list-wrapper flex vertical">
			<RouterView />
		</div>
		<div class="elevation-2">
			<MusicPlayer />
			<div class="nav-tab flex width100 around middle">
				<div
					v-for="item in State_Music.tabItems"
					:key="item.key"
					:class="{
						'ant-btn-link elevation elevation-2': item.key === selectedKey,
						'menu-icon flex middle center': true
					}"
					@click="handleClickSelectedKey(item.key)">
					<xIcon :icon="item.icon" />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="jsx">
import { defineComponent, ref } from "vue";

import MusicPlayer from "@ventose/views/ViewMusic/Player/MusicPlayer.vue";
import { State_Music } from "@ventose/state/State_Music";
import { State_App } from "@ventose/state/State_App";
import { goHome } from "@ventose/router/router";

export default defineComponent({
	components: {
		MusicPlayer
	},
	setup() {
		return {
			State_Music,
			State_App,
			goHome
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
	.nav-tab {
		height: 48px !important;
		z-index: 1;

		.menu-icon {
			width: 32px;
			height: 32px;
			border-radius: 4px;
		}
	}

	.top-nav {
		[aria-label="gohome"] {
			// width: 32px;
			margin-left: 4px;
		}
	}

	.play-list-wrapper {
		overflow: auto;
		overflow-x: hidden;
		height: 90%;
	}

	.ant-btn-link.elevation {
		border-radius: 50%;
		span {
			transform: scale(1.2);
		}
	}

	.MobileSongItem {
		div {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			text-align: left;
		}
	}
}
</style>
