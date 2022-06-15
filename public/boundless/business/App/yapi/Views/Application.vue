<template>
	<div class="g-main">
		<div class="router-main">
			<Notify v-if="State_App.curUserRole === 'admin'" />
			{alertContent()}
			<yapiHeader v-if="State_App.loginState !== 1" />
			<div class="router-container">
				<router-view></router-view>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
async function sfc({
	UI,
	defCol,
	defColActions,
	defColActionsBtnlist,
	defDataGridOption,
	defineComponent,
	VNodeRender,
	defItem,
	setCSSVariables,
	AllWasWell,
	validateForm,
	compileHtmlAndGetVNode,
	setDocumentTitle,
	_,
	hooks,
	h
}) {
	const { useCSS } = hooks;
	debugger;
	return defineComponent({
		TEMPLATE_PLACEHOLDER,
		components: {
			yapiHeader: () =>
				_.asyncImportSFC(`${APP_ROOT_URL}/Views/Login/Login.vue`)
		},
		setup() {
			State_App.curUserRole = "";
			State_App.loginState = "";
			return { State_App };
		},
		data() {
			const vm = this;
			return {};
		},
		async mounted() {},
		methods: {}
	});
}
</script>
