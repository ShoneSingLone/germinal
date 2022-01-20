# Info

> ***非*** 最佳实践，尽量多样： Just for fun :)

- `npm i -g mirror-config-china --registry=https://registry.npm.taobao.org`
  ~~[Germinal](https://shonesinglone.github.io/germinal/)[![Build
  Status](https://app.travis-ci.com/ShoneSingLone/germinal.svg?branch=master)](https://app.travis-ci.com/ShoneSingLone/germinal)~~

- [Actions: deploy app](https://dev.to/pierresaid/deploy-node-projects-to-github-pages-with-github-actions-4jco)
- [TODO](./README.todo.md)

```js
/* README: */
/* NOTICE: */
/* TODO: */
```

初次运行：

```bash
# install package and generate language
npm run bs npm start
```

## package.json

- `file:./local_moduels/**`
  - 有朝一日稳定了，可以独立发布出去（UI）。
  - 放一些不与业务代码耦合的代码（单纯API发请求，Mock数据）

## 样式

```less
/* App.less TODO:更新后不会刷新页面  */
/* 变量在configs.jsx中，加载为全应用的css原生变量*/
/* less 样式可以单独使用webpack、rollup等工具打包（build目录下），生成不同主题 */
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

@import url("./layout/User.less");
...

```

## 开发测试 demo 页面

[http://localhost:3000/#/dev-demo](http://localhost:3000/#/dev-demo)

## Reference

- [Vue3](https://v3.cn.vuejs.org/api/)
- [Vue-Router](https://next.router.vuejs.org/zh/introduction.html)
- [sfc-script-setup](https://v3.cn.vuejs.org/api/sfc-script-setup.html)
- [popper](https://popper.js.org/)
- [antv](https://next.antdv.com/components/overview-cn/)
- [ant-design-vue-pro](https://github.com/vueComponent/ant-design-vue-pro)
- [pro-layout](https://github.com/vueComponent/pro-layout)
    - [Ant Design Vue 3.0](https://mp.weixin.qq.com/s?__biz=MzU4NTgyMTM0MQ==&mid=2247484357&idx=1&sn=478c97c3ddd1703f4851863a8f4b2863&chksm=fd85fe37caf27721818cfcef9521116cb54ca4c023951445ed71a1d87786c383f2888d64035f&mpshare=1&scene=23&srcid=10203hvGd6nN3z8bEYuCS1LI&sharer_sharetime=1634692039568&sharer_shareid=966f440169937ddeabee7cec964be6bc#rd)
- [vue-i18n](https://vue-i18n.intlify.dev/guide/advanced/composition.html#mapping-between-vuei18n-instance-and-composer-instance)
- [URL-friendly characters](https://stackoverflow.com/questions/695438/what-are-the-safe-characters-for-making-urls)
- [popover](https://www.jqueryscript.net/blog/best-popover.htm)

> 关于命令式代码，私以为诸如 `tips`、`popover`、`confirm`、`dialog` 这类的场景都是合适的，一味无脑使用声明，颇有一种手里只有一把锤子的意思。

## jsx slot 的写法

> [vue-jsx-next](https://github.com/vuejs/jsx-next)

```js
const genMenu = () => {
    const MenuItemRender = menuInfo => {
        if (isArrayFill(menuInfo.children)) {
            /* 第一种 */
            return (
                <SubMenu
                    v-slots={{
                        icon: () => <AppleOutlined/>,
                        title: () => menuInfo.label,
                        default: () => _.map(menuInfo.children, MenuItemRender)
                    }}
                />
            );
        } else {
            /* 第二种 */
            return (
                <MenuItem key={menuInfo.id}>
                    {{
                        icon: () => <UserOutlined/>,
                        default: () => <span>{menuInfo.label}</span>
                    }}
                </MenuItem>
            );
        }
    };
    return _.map(props.tree, MenuItemRender);
};
```
## 常用函数

### $t 多语言转换

单一数据源`build/make/language.js`

```json
{
  "make:language": "node ./build/make.js language"
}
```
```js
return {label: "显示的对应语言", prop: "key"};
```

```js
/* main.js 第一行 window._ 工具 常用工具函数 */
import "@ventose/ui/loadCommonUtil.js";
```

## addPlugins

针对popover 单例的使用，Vue3 以应用为单位配置属性的方式相较于Vue2的全局配置，带来了灵活，就需要但对每个应用单独配置，

```js
/* Vue3 组件方式加载 popover content */
if (this.options.component) {
    this.$popoverMountDOM = $(
        `<div id="${this.id}" class="x-popover-content"/>`
    ).prependTo($("body"));
    const popoverApp = createApp(this.options.component);
    /* 独立应用，配置是否共享、同步，可以配置，此处用addPlugins方法，保持一致 */
    addPlugins(popoverApp);
    const vm = popoverApp.mount(`#${this.id}`);
    this.$popoverDOM = $(vm.$el);
    this.$popoverDOM.appendTo(this.$popoverMountDOM);
    return;
}
```

跟 Vue2 有不同的处理方式在于 addPlugins 的使用。主要是 Vue app 化后无法共享 component 这类的配置信息

## 状态管理 (VueX下岗)

> 视图归视图，状态归状态

Vue2 中的this就是用来保存状态，Vue3的进步之处在于状态的解耦。

xItem的设计与使用充分基于这种原则，xItem视图本身，与configs相关，状态与v-model绑定相关。

```js
/* FILE:src\state\StateApp.js */
/* state StateApp 相当于命名空间*/
export const StateApp = reactive({configs: lStorage.appConfigs});

/* getter 就用computed代替;commit直接修改StateApp  */
export const APP_LANGUAGE = computed({
    get: () => StateApp.configs.language,
    set: lang => (StateApp.configs.language = lang)
});

/* 副作用 effect */
/* 同步AppConfigs 到 localStorage */
watchEffect(() => (lStorage.appConfigs = StateApp.configs));

/* mutation 异步修改 效果同事务 自己去保证原子性 */
export const AppActions = {
    GetInfo: async () => {
    },
    Login: async () => {
    },
    Logout: async () => {
    }
};
```

## pro-component

### xItem

错误信息可以单独提供，默认是在 formItem 下方展示 tips ，也可以利用错误信息做其他展现方式，比如 popup， 提供 id 定位，方便滑动定位 vModel 与配置信息分开
- 参考
  - `src/views/user/LoginCredentials.vue`
  - `src/views/user/StateLogin.jsx`
```js
import {StateApp} from "lsrc/state/StateApp";
import {defineXItem, ITEM_TYPE} from "@ventose/ui/xForm/itemRenders/common.js";
import {watch} from "vue";

const inputConfigs = defineXItem({
    type: ITEM_TYPE.input,
    onAfterValueChange: (configs) => {
        StateApp.count++;
    }
});
const state = reactive({name: ''})

watch(() => StateApp.count, (count) => {
    StateApp.count = count;
});
```

```html
StateApp.count: {{StateApp.count}}
<xItem :configs="inputConfigs" v-model="state.name"/>
```

### xTable

- 拖动排序 字典下拉顺序=> order的修改

## 自定义的折叠按钮(未使用)

```html
<!--    <xRender :render="render.collapsedButton" :collapsed="StateApp.collapsed"/>-->


```

## log

1. `no-mutating-props`:`MutatingProps`
2. `pickValueFrom`：从 xItem 的 configs 中获取 value；
3. xItem 错误提示随语言切换变更 涉及到 $t 的配置项都需要 ()=>

- 20211117 登陆框 blur 未触发 update 校验
- 20211127022841 v-uiPopover
- 20220110095314
    - LazySvg ：异步，动态懒加载 src\assets\svg 目录下单个文件，经过插件处理，分别打包成独立文件
    - SvgRender: 同步，首页不想让用户看到loading状态，可提前加载图标

```html
<!-- src\assets\svg\lockStrok.svg -->
<LazySvg
        icon="lockStrok"
        style="
      color: red;
      height: 100px;
      width: 100px;
      outline: 1px solid black;
      margin: 10px;
    "/>
```
