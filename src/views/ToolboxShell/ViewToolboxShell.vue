<script lang="jsx">
import { State_App, Actions_App } from "lsrc/state/State_App";
import { State_UI, UI, $ } from "@ventose/ui";
import { defineComponent } from "vue";
import DesktopIconItem from "./DesktopIconItem.vue";

const $t = State_UI.$t;

export default defineComponent({
	components: {
		DesktopIconItem
	},
	data() {
		const vm = this;
		return {
			desktopIconConfigs: {
				music: {
					title: $t("music").label,
					icon: "music",
					onClick() {
						/*UI.layer.open({
              type: UI.layer.IFRAME,
              title: "Music",
              maxmin: true,
              area: ["800px", "600px"],
              content: "./#/music",
              success() {
                $(this).css("height", "100%");
              }
            });*/
						vm.$router.push({ path: "music" });
					}
				}
			}
		};
	}
});
</script>

<template>
	<div class="view-toolbox-shell flex vertical">
		<div class="view-toolbox-shell_header x-ui-glossy">
			<div class="flex middle" style="height: 100%; padding: 0 24px">
				<span class="flex1" />
				<aDropdown placement="bottomRight">
					<!-- 用户头像 -->
					<aAvatar>
						<template #icon>
							<img
								v-if="State_App?.user?.avatar"
								:src="State_App.user.avatar" />
							<xIcon v-else style="width: 100%; height: 100%" icon="user" />
						</template>
					</aAvatar>
					<template #overlay>
						<aMenu>
							<aMenuItem>
								<div class="flex">
									<xIcon icon="user" />
									{{ State_App.user.email }}
								</div>
							</aMenuItem>
							<aMenuItem>
								<div class="flex" @click="Actions_App.Logout">
									<xIcon icon="logout" />
									{{ $t("logout").label }}
								</div>
							</aMenuItem>
						</aMenu>
					</template>
				</aDropdown>
				<xGap :r="10" />
			</div>
		</div>
		<div class="flex1 layout-desktop-container bg4">
			<DesktopIconItem :configs="desktopIconConfigs.music" />
		</div>
	</div>
</template>

<style lang="less">
.view-toolbox-shell {
	height: 100%;

	.view-toolbox-shell_header {
		height: 64px;
		z-index: 1;
		position: relative;
		/* &::before {
      content: " ";
      background: inherit;
      position: absolute;
      left: -25px; //giving minus -25px left position
      right: 0;
      top: -25px; //giving minus -25px top position
      bottom: 0;
      box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.3);
      filter: blur(10px);
    } */
	}

	.layout-desktop-container {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: transparent;
	}

	.layout-desktop-container {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: url("./imgs/bg1.jpg") center center/cover no-repeat;

		&.bg2 {
			background-image: url("./imgs/bg2.jpg");
		}

		&.bg3 {
			background-image: url("./imgs/bg3.jpg");
		}

		&.bg4 {
			background-image: url("./imgs/bg4.jpg");
		}

		&.bg5 {
			background-image: url("./imgs/bg5.jpg");
		}
	}
}
</style>
