<template>
	<a-layout id="ViewMusic" style="height: 100vh">
		<ALayoutSider class="elevation-2">
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
		</ALayoutSider>
		<a-layout style="height: 100vh" class="flex vertical">
			<ALayoutHeader style="background: #fff; padding: 0" class="elevation-1">
				<!-- <a-breadcrumb style="margin: 16px 0"> <a-breadcrumb-item>User</a-breadcrumb-item> <a-breadcrumb-item>Bill</a-breadcrumb-item> </a-breadcrumb> -->
			</ALayoutHeader>
			<main
				class="ant-layout-content elevation-1 flex1"
				style="margin: 16px; overflow: auto">
				<div
					style="
						height: 100%;
						padding: 24px;
						background: rgb(255, 255, 255);
						min-height: 360px;
					">
					<!--
		<div v-for="(item, index) in State_Music.personalizedNewSong" :key="index" class="hover-bg-view transition-all flex items-center" @click="play(item.id)" >
		<img :src="item.picUrl" alt="" class="w-12 h-12 object-cover rounded flex-shrink-0" >
		<div class="px-2 text-xs flex-auto flex flex-col w-1/3">
			<div class="text-xs flex-1 truncate">
			{{ item.name }}
			</div>
			<div class="mt-1.5 text-dc">
			{{ item.song.artists[0].name }}
			</div>
		</div>
		</div>
		-->

					<!-- <xDataGridToolbar :configs="State_table">
						<xGap f="1" />
						<xItem
							v-model="State_query.data.type"
							:configs="State_query.dataXItem.type" />
						<xGap l="4" />
						<xItem
							v-model="State_query.data.username"
							:configs="State_query.dataXItem.username" />
						<xGap l="4" />
					</xDataGridToolbar> -->
					<xDataGrid :configs="State_table" />
				</div>
			</main>
			<ALayoutFooter
				style="height: 88px; background: white"
				class="flex middle elevation-1">
				<MusicPlayer />
			</ALayoutFooter>
		</a-layout>
	</a-layout>
</template>
<script lang="jsx">
import { defineComponent, ref } from "vue";
import {
	_,
	defItem,
	defDataGridOption,
	defCol,
	defPagination,
	defColActions,
	State_UI,
	defColActionsBtnlist
} from "@ventose/ui";
import MusicPlayer from "./MusicPlayer.vue";
import { Actions_Music, State_Music } from "lsrc/state/State_Music";

const { $t } = State_UI;

export default defineComponent({
	components: {
		MusicPlayer
	},
	setup() {
		return {
			State_Music
		};
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
				scroll: { x: 300, y: 300 },
				async queryTableList() {
					await _.sleep(1000);
				},
				isHideFilter: true,
				isHidePagination: true,
				dataSource: [],
				columns: {
					...defCol({
						label: $t("歌曲标题").label,
						prop: "name",
						width: 200,
						renderCell({ record }) {
							console.log(record);
							return (
								<span class="flex middle">
									<a-avatar shape="square" src={record.picUrl} />
									<xGap l="4" />
									<span>{record.name}</span>
								</span>
							);
						}
					}),
					...defCol({
						label: $t("歌手").label,
						width: 200,
						prop: "artists_name",
						renderCell({ record }) {
							return <span>{record.song.artists[0].name}</span>;
						}
					}),
					...defCol({
						label: $t("所属专辑").label,
						prop: "album_name",
						renderCell({ record }) {
							return <span>{record.song.album.name}</span>;
						}
					}),
					...defColActions({
						width: 100,
						renderCell({ record, index }) {
							return defColActionsBtnlist({
								btns: [
									{
										text: $t("播放")?.label,
										async onClick() {
											await Actions_Music.playSongBuId(record.id);
										}
									}
								]
							});
						}
					})
				}
			})
		};
	},
	watch: {
		"State_Music.personalizedNewSong"(personalizedNewSong) {
			this.State_table.dataSource = personalizedNewSong;
		}
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
