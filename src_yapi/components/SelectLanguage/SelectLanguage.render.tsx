export const render = state => {
	const { prefixCls } = state;
	const changeLang = ({ key }) => {
		this.setLang(key);
	};
	const langMenu = (
		<aMenu
			class={["menu", "ant-pro-header-menu"]}
			selectedKeys={[this.currentLang]}
			onClick={changeLang}>
			{locales.map(locale => (
				<aMenu.Item key={locale}>
					<span role="img" aria-label={languageLabels[locale]}>
						{languageIcons[locale]}
					</span>{" "}
					{languageLabels[locale]}
				</aMenu.Item>
			))}
		</aMenu>
	);
	return (
		<Dropdown overlay={langMenu} placement="bottomRight">
			<span class={prefixCls}>
				<aIcon type="global" title={i18nRender("navBar.lang")} />
			</span>
		</Dropdown>
	);
};
