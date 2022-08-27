<template>
	<a-layout id="ViewMusic" style="height: 100vh">
		<ALayoutSider class="elevation-2">
			<AMenu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
				<AMenuItem key="playlist">
					<span class="flex"
						><xIcon icon="playlist" class="mr8" />{{
							$t("当前播放列表").label
						}}</span
					>
				</AMenuItem>
				<AMenuItem key="new">
					<span class="flex"
						><xIcon icon="music" class="mr8" /> {{ $t("发现音乐").label }}</span
					>
				</AMenuItem>
				<AMenuItem key="singer">
					<span class="flex"
						><xIcon icon="user" class="mr8" /> {{ $t("歌手").label }}</span
					>
				</AMenuItem>
			</AMenu>
		</ALayoutSider>
		<a-layout style="height: 100vh" class="flex vertical">
			<ALayoutHeader style="background: #fff; padding: 0" class="elevation-1">
				<!-- <a-breadcrumb style="margin: 16px 0"> <a-breadcrumb-item>User</a-breadcrumb-item> <a-breadcrumb-item>Bill</a-breadcrumb-item> </a-breadcrumb> -->
			</ALayoutHeader>
			<main
				class="ant-layout-content elevation-1 flex1"
				style="margin: 16px; overflow: auto">
				<div
					style="
						height: 100%;
						padding: 24px;
						background: rgb(255, 255, 255);
						min-height: 360px;
					">
					<RouterView />
				</div>
			</main>
			<ALayoutFooter
				style="height: 88px; background: white"
				class="flex middle elevation-1">
				<MusicPlayer />
			</ALayoutFooter>
		</a-layout>
	</a-layout>
</template>
<script lang="jsx">
import { defineComponent, ref } from "vue";
import MusicPlayer from "./MusicPlayer.vue";
import { Actions_Music, State_Music } from "lsrc/state/State_Music";

export default defineComponent({
	components: {
		MusicPlayer
	},
	setup() {
		return {
			State_Music
		};
	},
	data() {
		const selectedKey = this.$route.name || "playlist";
		return {
			collapsed: false,
			selectedKeys: [selectedKey]
		};
	},
	watch: {
		selectedKeys(selectedKeys) {
			const viewName = selectedKeys[0];
			this.$router.push({ path: `/music/${viewName}` });
		}
	}
});
</script>
<style lang="less">
#ViewMusic {
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
