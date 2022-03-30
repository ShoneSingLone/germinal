<script setup lang="jsx">
import { onMounted, reactive } from "vue";
import {
	_,
	defItem,
	defDataGridOption,
	defCol,
	defColActions,
	State_UI,
	defColActionsBtnlist
} from "@ventose/ui";
import { $t } from "lsrc/language";

/* data */
const State_query = reactive({
	data: {
		username: "",
		type: [],
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
});
const State_table = reactive(
	defDataGridOption({
		async queryTableList() {
			await _.sleep(1000);
		},
		dataSource: [
			{ a: "禁止操作", b: "操作1", c: "c", d: "d" },
			{ a: "允许操作", b: "操作1", c: "c", d: "d" },
			{ a: "允许操作", b: "操作2", c: "c", d: "d" }
		],
		columns: {
			...defCol({
				label: $t("a").label,
				prop: "a"
			}),
			...defCol({
				label: $t("b").label,
				prop: "b"
			}),
			...defCol({
				label: $t("c").label,
				prop: "c"
			}),
			...defCol({
				label: $t("d").label,
				prop: "d"
			}),
			...defColActions({
				width: State_UI.language === "zh-CN" ? 250 : 350,
				renderCell({ record, index }) {
					if (record.b == "操作1") {
						return defColActionsBtnlist({
							btns: [
								{
									text: $t("btn_a")?.label,
									disabled: () => {
										if (record.a === "禁止操作") {
											return $t("禁止操作的自定义提示").label;
										}
										return false;
									},
									onClick: async () => {
										await _.sleep(1000);
									}
								}
							]
						});
					}
					return defColActionsBtnlist({
						fold: 2,
						btns: [
							{
								text: $t("bbbbb").label,
								onClick: async () => {
									await _.sleep(1000);
								}
							},
							{
								text: $t("ccccc").label,
								onClick: async () => {
									await _.sleep(1000);
								}
							}
						]
					});
				}
			})
		}
	})
);

onMounted(() => {
	State_query.dataXItem.type.options = [
		{
			label: $t("AAA").label,
			value: "AAA"
		},
		{
			label: $t("BBB").label,
			value: "BBB"
		}
	];
});
</script>

<template>
	<aCard>
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
	</aCard>
</template>
