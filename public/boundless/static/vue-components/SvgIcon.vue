<template>
	<div :id="id">
		<div
			class="next-loading next-open next-loading-inline"
			style="width: 100%; height: 100%; overflow: hidden">
			<div class="next-loading-tip">
				<div class="next-loading-indicator"></div>
			</div>
			<div class="next-loading-component next-loading-wrap">
				<div class="next-loading-masker"></div>
				<div class="demo-basic icon-svg flex">
					<svg
						class="icon"
						style="
							width: 100%;
							height: 100%;
							vertical-align: middle;
							fill: currentColor;
							overflow: hidden;
						"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						p-id="2240">
						<path
							d="M834.7648 736.3584a5.632 5.632 0 1 0 11.264 0 5.632 5.632 0 0 0-11.264 0z m-124.16 128.1024a11.1616 11.1616 0 1 0 22.3744 0 11.1616 11.1616 0 0 0-22.3744 0z m-167.3216 65.8944a16.7936 16.7936 0 1 0 33.6384 0 16.7936 16.7936 0 0 0-33.6384 0zM363.1616 921.6a22.3744 22.3744 0 1 0 44.7488 0 22.3744 22.3744 0 0 0-44.7488 0z m-159.744-82.0224a28.0064 28.0064 0 1 0 55.9616 0 28.0064 28.0064 0 0 0-56.0128 0zM92.672 700.16a33.6384 33.6384 0 1 0 67.2256 0 33.6384 33.6384 0 0 0-67.2256 0zM51.2 528.9984a39.168 39.168 0 1 0 78.336 0 39.168 39.168 0 0 0-78.336 0z m34.1504-170.0864a44.8 44.8 0 1 0 89.6 0 44.8 44.8 0 0 0-89.6 0zM187.904 221.7984a50.432 50.432 0 1 0 100.864 0 50.432 50.432 0 0 0-100.864 0zM338.432 143.36a55.9616 55.9616 0 1 0 111.9232 0 55.9616 55.9616 0 0 0-111.9744 0z m169.0112-4.9152a61.5936 61.5936 0 1 0 123.2384 0 61.5936 61.5936 0 0 0-123.2384 0z m154.7776 69.632a67.1744 67.1744 0 1 0 134.3488 0 67.1744 67.1744 0 0 0-134.3488 0z m110.0288 130.816a72.8064 72.8064 0 1 0 145.5616 0 72.8064 72.8064 0 0 0-145.5616 0z m43.7248 169.472a78.3872 78.3872 0 1 0 156.8256 0 78.3872 78.3872 0 0 0-156.8256 0z"
							fill=""
							p-id="2241"></path>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
async function sfc({ defineComponent, markRaw, _ }) {
	const getIconPath = icon => `${ROOT_URL}/assets/images/svg/${icon}.svg`;
	const ICON_STRING_CACHE = {};

	return defineComponent(
		markRaw({
			TEMPLATE_PLACEHOLDER,
			name: "SvgIcon",
			props: ["icon"],
			data() {
				const id = "svg-icon_" + this._.uid;
				return { id };
			},
			async mounted() {
				const targetDom = document.getElementById(this.id);
				let iconSvgString = ICON_STRING_CACHE[this.icon];
				if (!iconSvgString) {
					iconSvgString = await _.asyncLoadText(getIconPath(this.icon));
					ICON_STRING_CACHE[this.icon] = iconSvgString;
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
			}
		})
	);
}
</script>
