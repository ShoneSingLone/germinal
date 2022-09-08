1
<script setup lang="jsx">
import {
	reactive,
	defineComponent,
	h,
	createElementBlock,
	getCurrentInstance,
	inject,
	compile,
	markRaw
} from "vue";
import { defItem, UI, FormRules, RegexFn } from "@ventose/ui";
import xIM from "./xIM/index";
import TestXDataGrid from "./TestXDataGrid.vue";
const PopoverContent = defineComponent(
	markRaw({
		setup() {
			function add() {
				State.count++;
			}
			return () => {
				return (
					<aCard type="primary" onClick={add}>
						{State.count}
					</aCard>
				);
			};
		}
	})
);
/* data */
const State = reactive({
	configs_uiPopover: { content: PopoverContent },
	count: 0,
	formData: {
		test: `1#2@(34)(Aasdf\`~!$)%)(^(&*(asd,fasf)-_=+[{]}|;:'\\",./?`
	},
	formXItem: {
		...defItem({
			prop: "test",
			label: "test",
			rules: [
				FormRules.required(),
				FormRules.custom({
					msg() {
						return "old tips";
					},
					/* 可以根据校验修改提示信息 */
					validator(value, { configs, rule }) {
						/* `~!@#$%^&*()-_=+[{]}|;:'\",./? */
						const regexp = () =>
							/[}{*`~!@\#\$\&\(\)\-\_\=\+\[\]\|;:'\",\.\/\?%\^]/;
						const res = String(value).match(regexp());
						// const res=String(value).match(/(\`~!@#\$%\^\&\*\(\)-_=\+[{\]\}\|;:'\\",\./\?)+/);
						console.log(regexp(), res, regexp().test(value));
						if (res) {
							rule.msg = JSON.stringify(res, null, 2);
						} else {
							rule.msg = "no match";
						}
						return FormRules.FAIL;
					}
				})
			]
		})
	}
});
/*renders*/
const renders = {
	test: state => <aButton>{state.count}</aButton>
};

/* methods */
const handlers = {
	openTips() {
		/* @:local_modules/ui/xSingle/layer/layer.js:128 */
		const testPopover = UI.layer.tips("tips", "#target2", {
			tips: [UI.layer.UP, "#0FA6D8"],
			tipsMore: true,
			time: 0
		});
	},
	clickBtn() {
		const testPopover = UI.layer.open({
			type: 2,
			title: "欢迎页",
			maxmin: true,
			area: ["800px", "500px"],
			content: "https://shonesinglone.github.io/germinal",
			end() {
				UI.layer.tips("Hi", "#tips", { tips: 1 });
			}
		});
	}
};
</script>

<template>
	<div class="container flex middle">
		<div class="flex width100">
			<xItem v-model="State.formData.test" :configs="State.formXItem.test" />
			State.formData.test:{{ State.formData.test }}
			<xIM />
			<aButton id="tips" v-uiPopover="State.configs_uiPopover">
				单独的配置项变量
			</aButton>
			<aButton v-uiPopover="{ content: 'tips2' }"> v-uiPopover </aButton>
			<div />
			<aButton id="target" @click="handlers.clickBtn"> iframe </aButton>
			<div />
			<aButton id="target2" @click="handlers.openTips"> popover </aButton>
		</div>
	</div>
	<TestXDataGrid />
</template>
