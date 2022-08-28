<template>
	<xDataGrid :configs="playListFindNew" />
</template>

<script lang="jsx">
import { Actions_Music, State_Music } from "lsrc/state/State_Music";
import privatePlaylist from "./assets/allMusic";
import { reactive } from "vue";

import {
	_,
	defItem,
	defDataGridOption,
	defCol,
	defPagination,
	defColActions,
	State_UI,
	defColActionsBtnlist,
	getPaginationPageSize,
	setDataGridInfo
} from "@ventose/ui";

const { $t } = State_UI;

const playListFindNew = reactive(
	defDataGridOption({
		scroll: { x: 300, y: 400 },
		async queryTableList() {
			const { page, size } = getPaginationPageSize(playListFindNew);
			const total = privatePlaylist.length;
			const data = privatePlaylist.slice((page - 1) * size, page * size);
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
									record.id = record.file_path;
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
			State_Music,
			playListFindNew
		};
	},
	mounted() {
		this.playListFindNew.queryTableList();
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
