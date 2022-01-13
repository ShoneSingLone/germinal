// @ts-nocheck
import { defineComponent, markRaw } from "vue";
import each from "lodash/each";
import isFunction from "lodash/isFunction";
import $ from "jquery";
import { Spin } from "ant-design-vue";
import "./LazySvg.less";

const icons = import.meta.glob("../../assets/svg/*.svg");

const modules = {};

each(icons, (icon, path) => {
	const prop = path.replace(/(.*)\/(.*)\.svg$/g, (match, p1, p2) => `${p2}`);
	modules[prop] = icon;
});

export default defineComponent(
	markRaw({
		props: ["icon"],
		data() {
			const id = "lazy-svg_" + this._.uid;
			return { id };
		},
		async mounted() {
			const getComponent = modules[this.icon];
			if (isFunction(getComponent)) {
				const { default: iconSvgString } = await getComponent();
				const $svg = $(iconSvgString)
					.css("height", "100%")
					.css("width", "100%");
				const targetDom = document.getElementById(this.id);
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
						className="next-loading next-open next-loading-inline"
						style={"width:100%;height:100%;"}>
						<div className="next-loading-tip">
							<div className="next-loading-indicator"></div>
						</div>
						<div className="next-loading-component next-loading-wrap">
							<div className="next-loading-masker"></div>
							<div className="demo-basic">
								<Spin />
							</div>
						</div>
					</div>
				</div>
			);
		}
	})
);
