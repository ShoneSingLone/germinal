<template>
	<xDataGridToolbar :configs="playListFindNew">
		<xGap f="1" />
		<xItem :configs="State_query.title" />
		<xGap l="4" />
		<xItem :configs="State_query.artist" />
		<xGap l="4" />
		<xItem :configs="State_query.album" />
		<xGap l="4" />
	</xDataGridToolbar>
	<xDataGrid :configs="playListFindNew" />
</template>

<script lang="jsx">
import { Actions_Music, State_Music } from "@ventose/state/State_Music";
import { reactive } from "vue";

import {
	_,
	defItem,
	defDataGridOption,
	defCol,
	defPagination,
	setPagination,
	defColActions,
	State_UI,
	defColActionsBtnlist,
	getPaginationPageSize,
	setDataGridInfo
} from "@ventose/ui";

const { $t } = State_UI;

const State_query = reactive({
	...defItem({
		value: "",
		prop: "title",
		label: $t("歌曲标题").label,
		placeholder: $t("歌曲标题").label
	}),
	...defItem({
		value: "",
		prop: "artist",
		label: $t("歌手").label,
		placeholder: $t("歌手").label
	}),
	...defItem({
		value: "",
		prop: "album",
		label: $t("所属专辑").label,
		placeholder: $t("所属专辑").label
	})
});

const playListFindNew = reactive(
	defDataGridOption({
		currentPlaylistPrivate: [],
		async queryTableList(vm) {
			const { page, size } = getPaginationPageSize(playListFindNew);
			const total = playListFindNew.currentPlaylistPrivate.length;
			const data = playListFindNew.currentPlaylistPrivate.slice(
				(page - 1) * size,
				page * size
			);
			setDataGridInfo(playListFindNew, { data, total });
		},
		isHideFilter: true,
		dataSource: [],
		columns: {
			...defCol({
				label: $t("歌曲标题").label,
				prop: "title",
				width: 200
				/* renderCell({ record }) {
			return (
			  <span class="flex middle">
				<a-avatar shape="square" src={record.picUrl} />
				<xGap l="4" />
				<span>{record.name}</span>
			  </span>
			);
		  } */
			}),
			...defCol({
				label: $t("歌手").label,
				width: 200,
				prop: "artist"
				/* renderCell({ record }) {
			return <span>{record.song.artists[0].name}</span>;
		  } */
			}),
			...defCol({
				label: $t("所属专辑").label,
				prop: "album"
				/* renderCell({ record }) {
			return <span>{record.song.album.name}</span>;
		  } */
			}),
			...defColActions({
				width: 100,
				renderCell({ record, index }) {
					return defColActionsBtnlist({
						btns: [
							{
								text: $t("播放")?.label,
								async onClick() {
									record.name = record.title;
									record.song = {
										album: {
											name: record.album
										},
										artists: [{ name: record.artist }]
									};
									Actions_Music.pushSongToPlaylist(record);
									await Actions_Music.playSongById(record.id);
								}
							}
						]
					});
				}
			})
		}
	})
);

export default {
	setup() {
		return {
			State_query,
			State_Music,
			playListFindNew
		};
	},
	mounted() {
		const vm = this;
		vm.$watch(
			() => {
				return `${vm.State_query.title.value}_${vm.State_query.artist.value}_${vm.State_query.album.value}`;
			},
			_.debounce(function () {
				vm.playListFindNew.currentPlaylistPrivate =
					vm.State_Music.AllMusicClient.filter(record => {
						const isOk = prop => {
							if (vm.State_query[prop].value) {
								return String(record[prop]).includes(
									vm.State_query[prop].value
								);
							} else {
								return true;
							}
						};
						return isOk("title") && isOk("artist") && isOk("album");
					});
				setPagination(vm.playListFindNew, { page: 1 });
				vm.playListFindNew.queryTableList();
			}, 1000),
			{ immediate: true }
		);
	}
};
</script>

<style lang="less">
#PlayListPrivate {
	height: 100%;
	overflow: auto;

	.row {
		width: 100%;

		.cell {
			width: 25%;
		}
	}

	.scroller {
	}

	.user {
		height: 32%;
		padding: 0 12px;
		display: flex;
		align-items: center;
	}
}
</style>
