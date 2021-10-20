export const render = state => {
    const {prefixCls} = state;
    const changeLang = ({key}) => {
        this.setLang(key);
    };
    const langMenu = (
        <Menu class={["menu", "ant-pro-header-menu"]} selectedKeys={[this.currentLang]} onClick={changeLang}>
            {locales.map(locale => (
                <Menu.Item key={locale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{" "}
                    {languageLabels[locale]}
                </Menu.Item>
            ))}
        </Menu>
    );
    return (
        <Dropdown overlay={langMenu} placement="bottomRight">
      <span class={prefixCls}>
        <Icon type="global" title={i18nRender("navBar.lang")}/>
      </span>
        </Dropdown>;
)
};
