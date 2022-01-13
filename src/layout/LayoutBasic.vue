<script setup lang="jsx">
import { getColor, StateApp, StateAppMutations } from "lsrc/state/StateApp";
import MenuTree from "lsrc/components/MenuTree.vue";
import logoImg from "lsrc/assets/logo.png";
import { reactive } from "vue";

const menuTree = [
	{
		id: 1,
		label: "demo1",
		children: [
			{ id: 2, label: "demo2" },
			{ id: 3, label: "demo3" }
		]
	}
];

const configs = reactive({
	foldButton: {
		type: "text",
		text: () => (
			<span style="transform:scale(1.5);">
				{StateApp.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</span>
		),
		onClick: StateAppMutations.toggleFold
	}
});
</script>

<template>
	<Layout style="height: 100%">
		<LayoutSider
			v-model:collapsed="StateApp.collapsed"
			:trigger="null"
			collapsible>
			<div class="log" style="width: 100%; text-align: center">
				<img :src="logoImg" style="width: 40px; height: 40px; margin: 20px" />
			</div>
			<MenuTree v-model:tree="menuTree" />
		</LayoutSider>
		<Layout>
			<LayoutHeader style="background: #fff; padding: 0">
				<xButton :configs="configs.foldButton" />
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
