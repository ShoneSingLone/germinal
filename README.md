# Info

>非最佳实践，尽量多样： Just for fun :)

- `npm i -g mirror-config-china --registry=https://registry.npm.taobao.org`
~~[Germinal](https://shonesinglone.github.io/germinal/)[![Build Status](https://app.travis-ci.com/ShoneSingLone/germinal.svg?branch=master)](https://app.travis-ci.com/ShoneSingLone/germinal)~~

- [Actions](https://dev.to/pierresaid/deploy-node-projects-to-github-pages-with-github-actions-4jco)

```js
/* README: */
/* NOTICE: */
/* TODO: */
```

## package.json

file:./src 需要添加 package.json 文件
## 常用函数

### $t 多语言转换

```js
return {label:'显示的对应语言',prop:'key'}
```

## 状态管理

```js
/* FILE:src\state\app.js */
/* state AppState 相当于命名空间*/
export const AppState = reactive({ configs: lStorage.appConfigs });

/* getter 就用computed代替;commit直接修改AppState  */
export const APP_LANGUAGE = computed({
    get: () => AppState.configs.language,
    set: (lang) => AppState.configs.language = lang
});

/* 副作用 effect */
/* 同步AppConfigs 到 localStorage */
watchEffect(() => lStorage.appConfigs = AppState.configs);

/* mutation 异步修改 效果同事务 自己去保证原子性 */
export const AppMutation = {
    GetInfo: async () => {},
    Login: async () => {},
    Logout: async () => {}
};
```

## 样式

```less
/* App.less 更新后不会刷新页面  */
/* 变量在configs.jsx中，加载为全应用的css原生变量*/
/* less 样式可以单独使用webpack、rollup等工具打包（build目录下），生成不同主题 */
html,body,#app {
    height: 100%;
    overflow: hidden;
  }
  
@import url('./layout/User.less');

```

## 开发测试demo页面

[/dev-demo](http://localhost:3000/#/dev-demo)

## Reference

- [Vue3](https://v3.cn.vuejs.org/api/)
- [sfc-script-setup](https://v3.cn.vuejs.org/api/sfc-script-setup.html)
- [popper](https://popper.js.org/)
- [antv](https://next.antdv.com/components/overview-cn/)
  - [Ant Design Vue 3.0](https://mp.weixin.qq.com/s?__biz=MzU4NTgyMTM0MQ==&mid=2247484357&idx=1&sn=478c97c3ddd1703f4851863a8f4b2863&chksm=fd85fe37caf27721818cfcef9521116cb54ca4c023951445ed71a1d87786c383f2888d64035f&mpshare=1&scene=23&srcid=10203hvGd6nN3z8bEYuCS1LI&sharer_sharetime=1634692039568&sharer_shareid=966f440169937ddeabee7cec964be6bc#rd)
- [vue-i18n](https://vue-i18n.intlify.dev/guide/advanced/composition.html#mapping-between-vuei18n-instance-and-composer-instance)
- [URL-friendly characters](https://stackoverflow.com/questions/695438/what-are-the-safe-characters-for-making-urls)
- [popover](https://www.jqueryscript.net/blog/best-popover.html)命令式还是香的，我认为像 tips  popover confirm dialog 这类的都应该使用单例命令。

Travis branchs only master

```js
/* main.js 第一行 window._ 工具 常用工具函数 */
import "@ventose/ui/loadCommonUtil.js";
```

```js
import {AppState} from "@state/app";
import {reactiveItemConfigs, ITEM_TYPE} from "@ventose/ui/xForm/itemRenders/common.js";
import {watch} from "vue";

const inputConfigs = reactiveItemConfigs(
    {
      type: ITEM_TYPE.input,
      value: AppState.value,
      onAfterValueChange: (configs) => {
        AppState.count = configs.value;
      }
    }
);


watch(() => AppState.count, (count) => {
  inputConfigs.value = count;
});
  AppState.count: {{ AppState.count }}
  <xItem :configs="inputConfigs"/>

```

## xItem

错误信息可以单独提供，默认是在formItem 下方展示tips ，也可以利用错误信息做其他展现方式，比如popup， 提供id定位，方便滑动定位

## log

1. `no-mutating-props`:`MutatingProps`
2. `pickValueFrom`：从xItem的configs中获取value；
3. xItem 错误提示随语言切换变更 涉及到 $t 的配置项都需要 ()=>

## 20211117

登陆框blur未触发update校验

## 20211122134700

popover click单独使用
UI.Popover 有问题，难道还要考虑多个app同时共存多个UI.Popover????
```js
            /* Vue3 组件方式加载 popover content */
            if (this.options.component) {
                this.$popoverMountDOM = $(`<div id="${this.id}" class="x-popover-content"/>`).prependTo($("body"));
                const popoverApp = createApp(this.options.component);
                addPlugins(popoverApp);
                const vm = popoverApp.mount(`#${this.id}`);
                this.$popoverDOM = $(vm.$el);
                this.$popoverDOM.appendTo(this.$popoverMountDOM);
                return;
            }
```
跟Vue2 有不同的处理方式在于addPlugins的使用。主要是Vue app 化后无法共享component 这类的配置信息


# 20211127022841

v-uiPopover