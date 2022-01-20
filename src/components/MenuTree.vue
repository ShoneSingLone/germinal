<script setup lang="jsx">
import { StateApp } from "lsrc/state/StateApp";
import { isArrayFill } from "@ventose/ui/tools/validate";
import { _ } from "@ventose/ui";

const props = defineProps({
	tree: {
		type: Object,
		default() {
			return [];
		}
	}
});

const genMenu = () => {
	const MenuItemRender = menuInfo => {
		if (isArrayFill(menuInfo.children)) {
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
			v-model:selectedKeys="StateApp.arr_selectedMenuId"
			:theme="StateApp.theme"
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
