<template>
	<!-- 有高度属性 提供滑动条 -->
	<div ref="refWrapper" class="wrapper vir-item-component">
		<!-- 模拟所有数据的高度 -->
		<div :style="styleWrapperAll">
			<!-- item1 -->
			<div class="vir-item-wrapper item1" :style="styleWrapper1">
				<div v-for="vir in virs1" :key="vir.id" class="vir-item">
					<component :is="itemComponent" :item="vir" />
				</div>
			</div>
			<!-- item2 -->
			<div class="vir-item-wrapper item2" :style="styleWrapper2">
				<div v-for="vir in virs2" :key="vir.id" class="vir-item">
					<component :is="itemComponent" :item="vir" />
				</div>
			</div>
			<!-- item3 -->
			<div class="vir-item-wrapper item3" :style="styleWrapper3">
				<div v-for="vir in virs3" :key="vir.id" class="vir-item">
					<component :is="itemComponent" :item="vir" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "vue";

import { _, $ } from "lsrc/ui";

const itemHeight = 48;
const perCount = 10;
const oneBlockHeight = 580;

export default defineComponent({
	name: "XVirScroll",
	props: {
		configs: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	setup() {
		return {};
	},
	data() {
		return {
			itemComponent: this.$slots.item,
			blockCount: 0,
			isLoading: false,
			styleWrapperAll: {
				height: 0
			}
		};
	},
	computed: {
		allItems() {
			return this.configs.items || [];
		},
		positionBlock() {
			return this.blockCount % 3;
		},
		virs1() {
			const position = Number(this.styleWrapper1.match(/(\d)/g).join("")) / 580;
			console.log("virs1", position);
			const start = position * 10;
			const end = start + 10;
			return this.allItems.slice(start, end).map((i, index) => ({
				...i,
				index: start + 1 + index
			}));
		},
		virs2() {
			const position = Number(this.styleWrapper2.match(/(\d)/g).join("")) / 580;
			console.log("virs2", position);
			const start = position * 10;
			const end = start + 10;
			return this.allItems.slice(start, end).map((i, index) => ({
				...i,
				index: start + 1 + index
			}));
		},
		virs3() {
			const position = Number(this.styleWrapper3.match(/(\d)/g).join("")) / 580;
			console.log("virs3", position);
			const start = position * 10;
			const end = start + 10;
			return this.allItems.slice(start, end).map((i, index) => ({
				...i,
				index: start + 1 + index
			}));
		},
		/* style */
		styleWrapper1() {
			if (this.positionBlock === 0) {
				return `transform:translateY(${this.blockCount * 580}px)`;
			}
			if (this.positionBlock === 1) {
				return `transform:translateY(${(this.blockCount + 2) * 580}px)`;
			}
			return `transform:translateY(${(this.blockCount + 1) * 580}px)`;
		},
		styleWrapper2() {
			if (this.positionBlock === 0) {
				return `transform:translateY(${(this.blockCount + 1) * 580}px)`;
			}
			if (this.positionBlock === 1) {
				return `transform:translateY(${this.blockCount * 580}px)`;
			}
			return `transform:translateY(${(this.blockCount - 1) * 580}px)`;
		},
		styleWrapper3() {
			if (this.positionBlock === 0) {
				return `transform:translateY(${(this.blockCount + 2) * 580}px)`;
			}
			if (this.positionBlock === 1) {
				return `transform:translateY(${(this.blockCount + 1) * 580}px)`;
			}
			return `transform:translateY(${this.blockCount * 580}px)`;
		}
	},
	mounted() {
		const vm = this;
		vm.styleWrapperAll.height = `${this.allItems.length * itemHeight}px`;
		vm.$wrapperEle = $(vm.$refs.refWrapper);
		vm.$wrapperEle.on("scroll", function (event) {
			const top = vm.$refs.refWrapper.scrollTop;
			vm.blockCount = Math.floor(top / oneBlockHeight);
			console.log("blockCount", vm.blockCount, "🚀 top", top);
		});
	},
	beforeUnmount() {
		this.$wrapperEle.off("scroll");
	},
	methods: {}
});
</script>

<style lang="less">
.vir-item-component {
	height: 100%;
	overflow: auto;
	overflow-x: hidden;
	position: relative;

	.wrapper {
		height: 100%;
	}

	.vir-item-wrapper {
		position: absolute;
		width: 100%;

		.vir-item {
			display: flex;
			align-items: center;
			box-sizing: border-box;
			font-size: 14px;
			margin: 10px 10px 0;
		}
	}
}
</style>
