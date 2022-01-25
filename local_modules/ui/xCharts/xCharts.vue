<script setup lang="jsx">
import { line } from "./configs/line";
import { _ } from "../loadCommonUtil";
import { computed } from "vue";

const CONFIGS_MAP = {
	line
};
const props = defineProps({
	/*任一附带信息*/
	payload: {
		type: Object,
		default: ""
	},
	/**
	 * 一个js文件名，里面有显示echart需要的配置信息和接口数据的处理方法
	 * 或者一个对象CONFIGS_MAP
	 */
	configs: {
		type: [String, Object],
		required: true
	},
	dataset: {
		type: [Array, Object],
		/* 接口返回的数据，通过对应的handler来处理数据 */
		default() {
			return [];
		}
	}
});

const id = _.genId("xChart");
const methods = {
	helper: computed(() => {
		if (_.isPlainObject(props.configs)) {
			return props.configs;
		}
		return CONFIGS_MAP[props.configs];
	}),
	init() {
		this.updateOptions();
		this.observe();
	},
	updateOptions() {
		if (this.myChart) {
			this.myChart.dispose();
		}
		const options = this.helper.initOptions(this.$props);
		this.options = this.helper.updateOptions(options, this.dataset);
		const dom = document.querySelector(`#${this.id}`);
		this.myChart = this.$echarts.init(dom);
		this.myChart.showLoading();
		this.myChart.setOption(this.options);
		this.myChart.hideLoading();
	},
	observe() {
		//初始化这个观察类 如果有变化了 那么就调用二chart的resize方法改变大小
		this.resizeObserver = new ResizeObserver(() => {
			if (this.myChart) {
				this.myChart?.resize && this.myChart.resize();
			}
		});
		this.resizeObserver.observe(this.$el); //观察这个dom
	}
};

onMounted(() => {
	methods.init();
});

onUnmounted(() => {});
</script>

<template>
	<div :id="id" class="x-charts flex flex1 center middle" />
</template>
