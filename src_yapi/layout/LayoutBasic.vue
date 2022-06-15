<script setup lang="jsx">
import {
	getColor,
	State_App,
	Mutations_App,
	Actions_App
} from "lsrc/state/State_App";
import MenuTree from "lsrc/components/MenuTree.vue";
import logoImg from "lsrc/assets/logo3.png";
import { reactive } from "vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import SelectLanguage from "lsrc/components/SelectLanguage/SelectLanguage.vue";
/* 比如常，或者首页不想让用户看到loading状，可提前加载图标 */
import { UserOutlined } from "@ant-design/icons-vue";

const render = {
	/*自定义的折叠按钮*/
	/*collapsedButton({vm, attrs, props}) {
    return (
        <Button type="text" size="small" onClick={Mutations_App.toggleCollapsed}>
          {State_App.collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
        </Button>
    );
  }*/
};
</script>

<template>
	<aLayout class="layout-basic">
		<aLayoutSider
			v-model:collapsed="State_App.collapsed"
			:theme="State_App.theme"
			collapsible
			:style="State_App.layoutStyle.sider">
			<div class="log" style="width: 100%; text-align: center">
				<img
					:src="logoImg"
					class="layout-side-logo"
					style="width: 40px; height: 40px; margin: 20px" />
			</div>
			<MenuTree v-model:tree="State_App.menuTree" />
		</aLayoutSider>
		<aLayout>
			<aLayoutHeader
				:style="State_App.layoutStyle.header"
				class="layout-basic header">
				<!--    自定义的折叠按钮    -->
				<!--    <xRender :render="render.collapsedButton" :collapsed="State_App.collapsed"/>-->

				<div class="flex middle" style="height: 100%; padding: 0 24px">
					<aBreadcrumb>
						<aBreadcrumbItem>Home</aBreadcrumbItem>
						<aBreadcrumbItem><a href="">Application Center</a></aBreadcrumbItem>
						<aBreadcrumbItem><a href="">Application List</a></aBreadcrumbItem>
						<aBreadcrumbItem>An Application</aBreadcrumbItem>
					</aBreadcrumb>
					<span class="flex1" />
					<aDropdown placement="bottomRight">
						<aAvatar>
							<template #icon>
								<img v-if="State_App.user" :src="State_App.user.avatar" />
								<UserOutlined v-else />
							</template>
						</aAvatar>
						<template #overlay>
							<aMenu>
								<aMenuItem>
									<div class="flex">
										<LazySvg icon="user" />
										{{ State_App.user.email }}
									</div>
								</aMenuItem>
								<aMenuItem>
									<div class="flex" @click="Actions_App.Logout">
										<LazySvg icon="logout" />
										{{ $t("logout").label }}
									</div>
								</aMenuItem>
							</aMenu>
						</template>
					</aDropdown>
					<xGap :r="10" />
					<SelectLanguage />
				</div>
			</aLayoutHeader>
			<aLayoutContent
				:style="{
					margin: '24px 16px',
					padding: '24px',
					background: '#fff',
					minHeight: '100%'
				}">
				<RouterView />
			</aLayoutContent>
		</aLayout>
	</aLayout>
</template>

<style lang="less">
.layout-basic {
	height: 100%;

	> aside.ant-layout-sider {
		> .ant-layout-sider-children {
			display: flex;
			flex-flow: column nowrap;
		}
	}

	.header {
		background: #fff;
		padding: 0;
		height: 0;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
	}
}
</style>
