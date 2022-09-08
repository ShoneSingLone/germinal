<template>
	<xDataGrid :configs="playListFindNew" />
</template>

<script lang="jsx">
import { Actions_Music, State_Music } from "@ventose/state/State_Music";

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

const { $t } = State_UI;

export default {
	setup() {
		return {
			State_Music
		};
	},
	data() {
		return {
			playListFindNew: defDataGridOption({
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
											await Actions_Music.playSongById(record.id);
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
		"State_Music.personalizedNewSong": {
			immediate: true,
			handler(personalizedNewSong) {
				this.playListFindNew.dataSource = personalizedNewSong;
			}
		}
	}
};
</script>

<style></style>
