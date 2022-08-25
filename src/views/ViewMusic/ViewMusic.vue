<template>
	<a-layout style="min-height: 100vh" id="ViewMusic">
		<a-layout-sider class="elevation-2">
			<a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
				<AMenuItem key="0">
					<span class="flex"
						><xIcon icon="playlist" class="mr8" />{{
							$t("当前播放列表").label
						}}</span
					>
				</AMenuItem>
				<AMenuItem key="1">
					<span class="flex"
						><xIcon icon="music" class="mr8" /> {{ $t("发现音乐").label }}</span
					>
				</AMenuItem>
				<AMenuItem key="2">
					<span class="flex"
						><xIcon icon="user" class="mr8" /> {{ $t("歌手").label }}</span
					>
				</AMenuItem>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header style="background: #fff; padding: 0" class="elevation-1">
				<!-- <a-breadcrumb style="margin: 16px 0"> <a-breadcrumb-item>User</a-breadcrumb-item> <a-breadcrumb-item>Bill</a-breadcrumb-item> </a-breadcrumb> -->
			</a-layout-header>
			<main class="ant-layout-content elevation-1" style="margin: 16px">
				<div
					style="
						height: 100%;
						padding: 24px;
						background: rgb(255, 255, 255);
						min-height: 360px;
					">
					<xDataGridToolbar :configs="State_table">
						<xGap f="1" />
						<xItem
							:configs="State_query.dataXItem.type"
							v-model="State_query.data.type" />
						<xGap l="4" />
						<xItem
							:configs="State_query.dataXItem.username"
							v-model="State_query.data.username" />
						<xGap l="4" />
					</xDataGridToolbar>
					<xDataGrid :configs="State_table" />
				</div>
			</main>
			<a-layout-footer
				style="height: 88px; background: white"
				class="flex middle elevation-1">
				<ViewMusicPlayer />
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>
<script>
import {
	UserOutlined,
	TeamOutlined,
	FileOutlined
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import {
	_,
	defItem,
	defDataGridOption,
	defCol,
	defPagination,
	State_UI
} from "@ventose/ui";
import ViewMusicPlayer from "./ViewMusicPlayer.vue";

const { $t } = State_UI;

export default defineComponent({
	components: {
		ViewMusicPlayer,
		UserOutlined,
		TeamOutlined,
		FileOutlined
	},

	data() {
		return {
			collapsed: false,
			selectedKeys: ["1"],
			State_query: {
				data: {
					username: "",
					type: ["AAA"],
					timeStartEnd: [],
					endTime: "",
					startTime: ""
				},
				dataXItem: {
					...defItem({
						prop: "type",
						label: $t("类型").label,
						itemType: "Select",
						options: [],
						mode: "multiple",
						maxTagCount: 1,
						maxTagTextLength: 10,
						style: { width: "200px" }
					}),
					...defItem({
						prop: "username",
						label: $t("用户名").label,
						placeholder: $t("请输入用户名").label
					})
				}
			},
			State_table: defDataGridOption({
				async queryTableList() {
					await _.sleep(1000);
				},
				isHideFilter: true,
				dataSource: [],
				columns: {
					...defCol({
						label: $t("歌曲标题").label,
						prop: "a",
						onFilter: (value, record) => record.address.indexOf(value) === 0,
						sorter: (a, b) => a.address.length - b.address.length
					}),
					...defCol({
						label: $t("歌手").label,
						prop: "b"
					}),
					...defCol({
						label: $t("所属专辑").label,
						prop: "c"
					}),
					...defCol({
						label: $t("时长").label,
						prop: "d"
					})
				}
			})
		};
	}
});
</script>
<style lang="less">
#ViewMusic {
	.site-layout .site-layout-background {
		background: #fff;
	}

	.ant-layout-sider {
		position: relative;
		min-width: 0;
		background: #ffffff;
		transition: all 0.2s;
	}
}
</style>
