<script setup lang="jsx">
import { StateApp } from "lsrc/state/StateApp";
import { _ } from "@ventose/ui";

const props = defineProps({
	tree: {
		type: Object,
		default() {
			return [];
		}
	}
});

const state = reactive({ openKeys: [] });
const onOpenChange = openKeys => {
	const latestOpenKey = _.last(openKeys);
	state.openKeys = latestOpenKey ? [latestOpenKey] : [];
};

const genMenu = () => {
	const MenuItemRender = menuInfo => {
		if (_.isArrayFill(menuInfo.children)) {
			return (
				<SubMenu
					v-slots={{
						icon: () => <AppleOutlined />,
						title: () => menuInfo.label,
						default: () => _.map(menuInfo.children, MenuItemRender)
					}}
				/>
			);
		} else {
			return (
				<MenuItem key={menuInfo.id}>
					{{
						icon: () => <UserOutlined />,
						default: () => <span>{menuInfo.label}</span>
					}}
				</MenuItem>
			);
		}
	};
	return _.map(props.tree, MenuItemRender);
};
</script>

<template>
	<div class="layout-menu beautiful-scroll flex1">
		<Menu
			:theme="StateApp.theme"
			:open-keys="state.openKeys"
			@openChange="onOpenChange"
			v-model:selectedKeys="StateApp.arr_selectedMenuId"
			mode="inline">
			<!-- jsx 循环 menuTree -->
			<xRender :render="genMenu" />
		</Menu>
	</div>
</template>

<style lang="less">
.layout-menu {
	//background-color: white;
	height: 100%;
	overflow: auto;
	overflow-x: hidden;
}
</style>
