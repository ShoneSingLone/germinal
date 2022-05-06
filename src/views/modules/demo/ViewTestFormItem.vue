<script lang="jsx">
import { defineComponent } from "vue";
import {
	_,
	defItem,
	State_UI,
	defDataGridOption,
	defCol,
	defColActions,
	defColActionsBtnlist
} from "@ventose/ui";
const { $t } = State_UI;

export default defineComponent({
	props: {
		/* Dialog 默认传入参数 */
		options: {
			type: Object,
			default() {
				return { __elId: false };
			}
		}
	},
	mounted() {
		this.init();
	},
	data() {
		const vm = this;
		return {
			State: {
				data: {
					Select: "",
					SelectMultiple: [],
					text: ""
				},
				dataXItem: {
					...defItem({
						prop: "Select",
						label: $t("Select").label,
						itemType: "Select",
						options: [],
						style: { width: "200px" }
					}),
					...defItem({
						disabled: () => !_.isInput(vm.State.data.Select),
						prop: "SelectMultiple",
						label: $t("SelectMultiple").label,
						placeholder: $t("SelectMultiple").label,
						itemType: "Select",
						options: [],
						mode: "multiple",
						maxTagCount: 5,
						maxTagTextLength: 10
					}),
					...defItem({
						vIf: () => _.isInput(vm.State.data.Select),
						prop: "text",
						label: $t("text").label,
						placeholder: $t("AAA.BBB").label
					})
				}
			}
		};
	},
	methods: {
		init() {
			this.setSelectOptions();
		},
		async setSelectOptions() {
			await _.sleep(500);
			this.State.dataXItem.Select.options = _.map(new Array(10), (i, ii) => {
				return {
					label: "label" + ii,
					value: ii
				};
			});
			this.State.data.Select = this.State.dataXItem.Select.options[0].value;
		},
		async setSelectMultiple() {
			await _.sleep(500);
			this.State.dataXItem.SelectMultiple.options = _.map(
				new Array(10),
				(i, ii) => {
					return {
						label: "label" + ii,
						value: ii
					};
				}
			);
		}
	},
	watch: {
		"State.data.Select"() {
			this.setSelectMultiple();
		}
	}
});
</script>

<template>
	<aCard>
		<aAlert v-if="options.__elId" message="当前为Dialog内的Form"></aAlert>
		<xForm
			class="flex vertical"
			:labelStyle="{ 'min-width': '120px', width: 'unset' }">
			<template v-for="(item, prop) in State.dataXItem" :key="prop">
				<xGap t="10" />
				<xItem v-model="State.data[prop]" :configs="State.dataXItem[prop]" />
			</template>
		</xForm>
	</aCard>
</template>
