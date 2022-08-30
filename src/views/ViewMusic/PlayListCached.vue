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
import { Actions_Music, State_Music } from "lsrc/state/State_Music";
import { reactive } from "vue";
import { getMany, keys, del } from "idb-keyval";

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
			let props = await keys();
			props = props.filter(name => /^audio_/.test(name));
			let cachedPlaylist = await getMany(props);
			cachedPlaylist = cachedPlaylist.map(i => i.records);

			playListFindNew.currentPlaylistPrivate = cachedPlaylist.filter(record => {
				const isOk = prop => {
					if (State_query[prop].value) {
						return String(record[prop]).includes(State_query[prop].value);
					} else {
						return true;
					}
				};
				return isOk("title") && isOk("artist") && isOk("album");
			});
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
			}),
			...defCol({
				label: $t("歌手").label,
				width: 200,
				prop: "artist"
			}),
			...defCol({
				label: $t("所属专辑").label,
				prop: "album"
			}),
			...defColActions({
				width: 140,
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
							},
							{
								text: $t("移除")?.label,
								async onClick() {
									await del(`audio_${record.id}`);
									playListFindNew.queryTableList();
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
	async mounted() {
		const vm = this;
		vm.$watch(
			() => {
				return `${vm.State_query.title.value}_${vm.State_query.artist.value}_${vm.State_query.album.value}`;
			},
			_.debounce(async function () {
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
