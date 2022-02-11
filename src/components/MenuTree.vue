<script setup lang="jsx">
import { StateApp } from "lsrc/state/StateApp";
import { _ } from "@ventose/ui";
import { reactive } from "vue";
import { router } from "lsrc/router/router";

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

const getIcon = icon => {
	return <LazySvg icon={icon} style="width:16px;height:100%;" />;
};

const genMenu = () => {
	const MenuItemRender = menuInfo => {
		if (_.isArrayFill(menuInfo.children)) {
			return (
				<SubMenu
					v-slots={{
						icon: () => getIcon(menuInfo.icon),
						title: () => menuInfo.label,
						default: () => _.map(menuInfo.children, MenuItemRender)
					}}
				/>
			);
		} else {
			return (
				<MenuItem key={menuInfo.id} class="flex middle">
					{{
						icon: () => getIcon(menuInfo.icon),
						title: () => menuInfo.label,
						default: () => (
							<div>
								<RouterLink to={menuInfo.path || "/404"}>
									{menuInfo.label}
								</RouterLink>
							</div>
						)
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
