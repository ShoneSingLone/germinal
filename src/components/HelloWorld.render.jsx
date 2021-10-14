export const renders = {
	staticNode() {
		return (
			<>
				<p>
					Recommended IDE setup:
					<a href="https://code.visualstudio.com/" target="_blank">
						VSCode
					</a>
					<a href="https://github.com/johnsoncodehk/volar" target="_blank">
						Volar
					</a>
				</p>

				<p>
					See <code>README.md</code> for more information.
				</p>

				<p>
					<a href="https://vitejs.dev/guide/features.html" target="_blank">
						Vite Docs
					</a>
					|
					<a href="https://v3.vuejs.org/" target="_blank">
						Vue 3 Docs
					</a>
				</p>
				<p>
					Edit <code>components/HelloWorld.vue</code> to test hot module
					replacement.
				</p>
			</>
		);
	},
	countAuto(state) {
		if (state.count % 2 === 0) {
			return <h1>even:{state.count}</h1>;
		} else {
			return <h1>odd:{state.count}</h1>;
		}
	},
};
