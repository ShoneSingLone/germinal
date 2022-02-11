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
	const openKeyArray = _.safeSplit(latestOpenKey, "###");
	const _openKeys = [];
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (index === 0) {
			_openKeys[0] = `###${element}`;
		} else {
			_openKeys[index] = `${array[index - 1]}###${element}`;
		}
	}

	debugger;
	state.openKeys = _openKeys;
};

const getIcon = icon => {
	return <LazySvg icon={icon} style="width:16px;height:100%;" />;
};

const genMenu = () => {
	const MenuItemRender = (menuInfo, parentId) => {
		const currentId = `${parentId}###${menuInfo.id}`;
		if (_.isArrayFill(menuInfo.children)) {
			return (
				<SubMenu
					key={currentId}
					v-slots={{
						icon: () => getIcon(menuInfo.icon),
						title: () => menuInfo.label,
						default: () =>
							_.map(menuInfo.children, i => {
								return MenuItemRender(i, currentId);
							})
					}}
				/>
			);
		} else {
			return (
				<MenuItem key={currentId} class="flex middle">
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
	return _.map(props.tree, i => {
		return MenuItemRender(i, "");
	});
};
</script>

<template>
	<div class="layout-menu beautiful-scroll flex1">
		state.openKeys: {{ state.openKeys }}
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
