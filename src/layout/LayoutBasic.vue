<script setup lang="jsx">
import {
	getColor,
	State_App,
	Mutations_App,
	Actions_App
} from "lsrc/state/State_App";
import MenuTree from "lsrc/components/MenuTree.vue";
import logoImg from "lsrc/assets/logo.png";
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
	<Layout class="layout-basic">
		<LayoutSider
			v-model:collapsed="State_App.collapsed"
			:theme="State_App.theme"
			collapsible
			:style="State_App.layoutStyle.sider">
			<div class="log" style="width: 100%; text-align: center">
				<img :src="logoImg" style="width: 40px; height: 40px; margin: 20px" />
			</div>
			<MenuTree v-model:tree="State_App.menuTree" />
		</LayoutSider>
		<Layout>
			<LayoutHeader
				:style="State_App.layoutStyle.header"
				class="layout-basic header">
				<!--    自定义的折叠按钮    -->
				<!--    <xRender :render="render.collapsedButton" :collapsed="State_App.collapsed"/>-->

				<div class="flex middle" style="height: 100%; padding: 0 24px">
					<Breadcrumb>
						<BreadcrumbItem>Home</BreadcrumbItem>
						<BreadcrumbItem><a href="">Application Center</a></BreadcrumbItem>
						<BreadcrumbItem><a href="">Application List</a></BreadcrumbItem>
						<BreadcrumbItem>An Application</BreadcrumbItem>
					</Breadcrumb>
					<span class="flex1" />
					<Dropdown placement="bottomRight">
						<Avatar>
							<template #icon>
								<img v-if="State_App.user" :src="State_App.user.avatar" />
								<UserOutlined v-else />
							</template>
						</Avatar>
						<template #overlay>
							<Menu>
								<MenuItem>
									<div class="flex">
										<LazySvg icon="user" />
										{{ State_App.user.email }}
									</div>
								</MenuItem>
								<MenuItem>
									<div class="flex" @click="Actions_App.Logout">
										<LazySvg icon="logout" />
										{{ $t("logout").label }}
									</div>
								</MenuItem>
							</Menu>
						</template>
					</Dropdown>
					<xGap :r="10" />
					<SelectLanguage />
				</div>
			</LayoutHeader>
			<LayoutContent
				:style="{
					margin: '24px 16px',
					padding: '24px',
					background: '#fff',
					minHeight: '100%'
				}">
				<RouterView />
			</LayoutContent>
		</Layout>
	</Layout>
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
