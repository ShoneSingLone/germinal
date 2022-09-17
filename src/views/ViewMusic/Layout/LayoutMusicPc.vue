<template>
	<ALayout id="ViewMusic" style="height: 100vh">
		<ALayoutSider class="elevation-2">
			<AMenu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
				<AMenuItem v-for="menuItem in State_Music.tabItems" :key="menuItem.key">
					<span class="flex">
						<xIcon :icon="menuItem.icon" class="mr8" />{{
							$t(menuItem.label).label
						}}
					</span>
				</AMenuItem>
			</AMenu>
		</ALayoutSider>
		<ALayout style="height: 100vh" class="flex vertical">
			<ALayoutHeader
				style="background: #fff; padding: 0"
				class="elevation-1 flex middle">
				<xButton :configs="{ onClick: goHome }" style="margin-left: 16px">
					<xIcon icon="gohome" />
				</xButton>
				<!-- <a-breadcrumb style="margin: 16px 0"> <a-breadcrumb-item>User</a-breadcrumb-item> <a-breadcrumb-item>Bill</a-breadcrumb-item> </a-breadcrumb> -->
			</ALayoutHeader>
			<main class="ant-layout-content elevation-1 flex1" style="margin: 16px">
				<div
					style="
						height: 100%;
						padding: 24px;
						background: rgb(255, 255, 255);
						overflow: hidden;
					">
					<RouterView />
				</div>
			</main>
			<ALayoutFooter
				style="height: 88px; background: white"
				class="flex middle elevation-1">
				<MusicPlayer />
			</ALayoutFooter>
		</ALayout>
	</ALayout>
</template>
<script lang="jsx">
import { defineComponent, ref } from "vue";
import MusicPlayer from "@ventose/views/ViewMusic/Player/MusicPlayer.vue";
import { State_Music } from "@ventose/state/State_Music";
import { goHome } from "@ventose/router/router";

export default defineComponent({
	components: {
		MusicPlayer
	},
	setup() {
		return {
			State_Music,
			goHome
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

	[aria-label="gohome"] {
		display: inline-block;
		width: 16px;
	}

	.ant-layout-sider {
		position: relative;
		min-width: 0;
		background: #ffffff;
		transition: all 0.2s;
	}
}
</style>
