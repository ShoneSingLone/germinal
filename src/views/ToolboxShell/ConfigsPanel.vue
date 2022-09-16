<template>
	<xForm
		class="flex vertical width100"
		:label-style="{ 'min-width': '120px', width: 'unset' }">
		<template v-for="(item, prop) in formItems" :key="prop">
			<xGap t="10" />
			<xItem :configs="item" />
		</template>
	</xForm>
</template>

<script lang="jsx">
import { defineComponent } from "vue";
import { _, defItem, State_UI, FormRules } from "@ventose/ui";
import { Actions_App, State_App } from "@ventose/state/State_App";

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
	setup() {
		return { State_App };
	},
	data() {
		const vm = this;
		return {
			formItems: {
				...defItem({
					itemType: "RadioGroup",
					value: State_App.isCurrentClientMobile,
					prop: "isCurrentClientMobile",
					label: "显示模式",
					options: [
						{
							label: "PC",
							value: false
						},
						{
							label: "Mobile",
							value: true
						}
					],
					onChange(e) {
						Actions_App.toggleMobile(e.target.value);
					}
				}),
				...defItem({
					itemType: "Switch",
					value: State_App.bgFilter,
					prop: "bgFilter",
					label: "背景磨砂化"
				}),
				...defItem({
					itemType: "RadioGroup",
					value: State_App.bg,
					prop: "bg",
					label: "背景图片",
					options: [1, 2, 3, 4, 5].map(i => {
						const bg = "bg" + i;
						const classString = `toolbox-background-image bg ConfigsPanel imgBox ${bg}`;
						return {
							label: <div class={classString} />,
							value: bg
						};
					}),
					onChange(e) {
						State_App.bg = e.target.value;
					}
				})
			}
		};
	},
	watch: {
		"formItems.bgFilter.value"(bgFilter) {
			State_App.bgFilter = bgFilter;
		}
	},
	mounted() {
		this.options.vm = this;
	}
});
</script>

<style lang="less">
.ConfigsPanel {
	&.imgBox {
		width: 100px;
		height: 100px;
	}
}
</style>
