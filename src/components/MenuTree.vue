<script setup lang="jsx">
import { State_App } from "lsrc/state/State_App";
import { _ } from "@ventose/ui";
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { STATIC_WORD } from "lsrc/utils/common";

const props = defineProps({
	tree: {
		type: Object,
		default() {
			return [];
		}
	}
});

const route = useRoute();
const currentPath = route.path;
const pathAndIdCollection = {};

onMounted(() => {
	onOpenChange([pathAndIdCollection[currentPath]]);
	State_App.arr_selectedMenuId = [pathAndIdCollection[currentPath]];
});

const state = reactive({ openKeys: [] });
const onOpenChange = openKeys => {
	const latestOpenKey = _.last(openKeys);
	const openKeyArray = _.safeSplit(latestOpenKey, "###").filter(i => i);
	const _openKeys = [];
	for (let index = 0; index < openKeyArray.length; index++) {
		const element = openKeyArray[index];
		if (index === 0) {
			_openKeys[0] = `###${element}`;
		} else {
			_openKeys[index] = `${_openKeys[index - 1]}###${element}`;
		}
	}
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
			pathAndIdCollection[menuInfo.path] = currentId;
			return (
				<MenuItem key={currentId} class="flex middle">
					{{
						icon: () => getIcon(menuInfo.icon),
						title: () => menuInfo.label,
						default: () => {
							/*其他配置信息*/
							if (menuInfo.payload) {
								/*使用浏览器newTab展示新页面*/
								if (
									menuInfo.payload.openType &&
									menuInfo.payload.openType === STATIC_WORD.NEW_TAB
								) {
									return (
										<a
											href={menuInfo.path}
											target="_blank"
											onClick={e => {
												e.stopPropagation();
												e.preventDefault();
												window.open(menuInfo.path, "_blank");
											}}>
											{" "}
											{menuInfo.label}{" "}
										</a>
									);
								}
							}
							let to = (({ name, path }) => {
								if (path) {
									return path;
								}
								if (name) {
									return { name };
								}
								return "/404";
							})(menuInfo);

							return (
								<RouterLink to={to}>
									{to}
									{menuInfo.label}
								</RouterLink>
							);
						}
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
		<!-- <pre>
          <code>
            State_App.arr_selectedMenuId: {{ State_App.arr_selectedMenuId }}
            state.openKeys: {{ state.openKeys }}
            pathAndIdCollection: {{ pathAndIdCollection }}
          </code>
        </pre> -->
		<Menu
			:theme="State_App.theme"
			:open-keys="state.openKeys"
			@openChange="onOpenChange"
			v-model:selectedKeys="State_App.arr_selectedMenuId"
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
