<script setup lang="jsx">
import { onMounted, reactive } from "vue";
import {
	_,
	defItem,
	defDataGridOption,
	defCol,
	defPagination
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
		isHideFilter: true,
		pagination: defPagination(),
		dataSource: [],
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
	<Card>
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
	</Card>
</template>
