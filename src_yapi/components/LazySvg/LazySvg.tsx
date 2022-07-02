// @ts-nocheck
import { defineComponent, markRaw } from "vue";
import each from "lodash/each";
import isFunction from "lodash/isFunction";
import $ from "jquery";
import "./LazySvg.less";
import { LoadingOutlined } from "@ant-design/icons-vue";

const icons = import.meta.glob("../../assets/svg/*.svg");

const modules = {};

each(icons, (icon, path) => {
	const prop = path.replace(/(.*)\/(.*)\.svg$/g, (match, p1, p2) => `${p2}`);
	modules[prop] = icon;
});

const ICON_STRING_CACHE = {};

export default defineComponent(
	markRaw({
		props: ["icon"],
		data() {
			const id = "lazy-svg_" + this._.uid;
			return { id };
		},
		async mounted() {
			const targetDom = document.getElementById(this.id);
			let iconSvgString = ICON_STRING_CACHE[this.icon];
			if (!iconSvgString) {
				const getComponent = modules[this.icon];
				if (isFunction(getComponent)) {
					const { default: iconString } = await getComponent();
					ICON_STRING_CACHE[this.icon] = iconSvgString = iconString;
				}
			}
			if (iconSvgString) {
				const $svg = $(iconSvgString)
					.css("height", "100%")
					.css("width", "100%");
				if (targetDom) {
					setTimeout(() => {
						targetDom.innerHTML = $svg[0].outerHTML;
					}, 30);
				}
			}
		},
		render(h) {
			return (
				<div id={this.id}>
					<div
						class="next-loading next-open next-loading-inline"
						style={"width:100%;height:100%;overflow:hidden"}>
						<div class="next-loading-tip">
							<div class="next-loading-indicator"></div>
						</div>
						<div class="next-loading-component next-loading-wrap">
							<div class="next-loading-masker"></div>
							<div class="demo-basic">
								<LoadingOutlined />
							</div>
						</div>
					</div>
				</div>
			);
		}
	})
);
