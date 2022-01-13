<script setup lang="jsx">
import { getColor, StateApp, StateAppMutations } from "lsrc/state/StateApp";
import MenuTree from "lsrc/components/MenuTree.vue";
import logoImg from "lsrc/assets/logo.png";
import { reactive } from "vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";

const state = reactive({
	menuTree: [
		{
			id: 1,
			label: "demo1",
			children: [
				{ id: 2, label: "demo2" },
				{ id: 3, label: "demo3" }
			]
		}
	]
});

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
		<LayoutSider v-model:collapsed="StateApp.collapsed" collapsible>
			<div class="log" style="width: 100%; text-align: center">
				<img :src="logoImg" style="width: 40px; height: 40px; margin: 20px" />
			</div>
			<MenuTree v-model:tree="state.menuTree" />
		</LayoutSider>
		<Layout>
			<LayoutHeader
				:style="StateApp.layoutStyle.header"
				class="layout-basic header">
				<!--    自定义的折叠按钮    -->
				<!--    <xRender :render="render.collapsedButton" :collapsed="StateApp.collapsed"/>-->
			</LayoutHeader>
			<LayoutContent
				:style="{
					margin: '24px 16px',
					padding: '24px',
					background: '#fff',
					minHeight: '100%'
				}">
				{{ StateApp }}
				<RouterView />
			</LayoutContent>
		</Layout>
	</Layout>
</template>

<style lang="less">
.layout-basic {
	height: 100%;

	.header {
		background: #fff;
		padding: 0;
		height: 0;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
	}
}
</style>
