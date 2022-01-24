<script setup lang="jsx">
import {
	getColor,
	StateApp,
	StateAppMutations,
	StateAppActions
} from "lsrc/state/StateApp";
import MenuTree from "lsrc/components/MenuTree.vue";
import logoImg from "lsrc/assets/logo.png";
import { reactive } from "vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import SelectLanguage from "lsrc/components/SelectLanguage/SelectLanguage.vue";

const render = {
	/*自定义的折叠按钮*/
	/*collapsedButton({vm, attrs, props}) {
    return (
        <Button type="text" size="small" onClick={StateAppMutations.toggleCollapsed}>
          {StateApp.collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
        </Button>
    );
  }*/
};
</script>

<template>
	<Layout class="layout-basic">
		<LayoutSider
			v-model:collapsed="StateApp.collapsed"
			collapsible
			:style="StateApp.layoutStyle.sider">
			<div class="log" style="width: 100%; text-align: center">
				<img :src="logoImg" style="width: 40px; height: 40px; margin: 20px" />
			</div>
			<MenuTree v-model:tree="StateApp.menuTree" />
		</LayoutSider>
		<Layout>
			<LayoutHeader
				:style="StateApp.layoutStyle.header"
				class="layout-basic header">
				<!--    自定义的折叠按钮    -->
				<!--    <xRender :render="render.collapsedButton" :collapsed="StateApp.collapsed"/>-->

				<div class="flex middle" style="height: 100%; padding: 0 24px">
					<Breadcrumb>
						<BreadcrumbItem>Home</BreadcrumbItem>
						<BreadcrumbItem><a href="">Application Center</a></BreadcrumbItem>
						<BreadcrumbItem><a href="">Application List</a></BreadcrumbItem>
						<BreadcrumbItem>An Application</BreadcrumbItem>
					</Breadcrumb>
					<span class="flex1"></span>
					<Dropdown :placement="placement">
						<Avatar>
							<template #icon>
								<UserOutlined />
							</template>
						</Avatar>
						<template #overlay>
							<Menu>
								<MenuItem>
									<div class="flex">
										<LazySvg icon="user" />
										ShoneSingLone
									</div>
								</MenuItem>
								<MenuItem>
									<div class="flex" @click="StateAppActions.Logout">
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
