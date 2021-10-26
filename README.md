# Info

>非最佳实践，尽量多样： Just for fun :)

- []
- [Germinal](https://shonesinglone.github.io/germinal/)[![Build Status](https://app.travis-ci.com/ShoneSingLone/germinal.svg?branch=master)](https://app.travis-ci.com/ShoneSingLone/germinal)

```js
/* README: */
/* NOTICE: */
/* TODO: */
```

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

## Reference

- [Vue3](https://v3.cn.vuejs.org/api/)
- [sfc-script-setup](https://v3.cn.vuejs.org/api/sfc-script-setup.html)
- [antv](https://next.antdv.com/components/overview-cn/)
  - [Ant Design Vue 3.0](https://mp.weixin.qq.com/s?__biz=MzU4NTgyMTM0MQ==&mid=2247484357&idx=1&sn=478c97c3ddd1703f4851863a8f4b2863&chksm=fd85fe37caf27721818cfcef9521116cb54ca4c023951445ed71a1d87786c383f2888d64035f&mpshare=1&scene=23&srcid=10203hvGd6nN3z8bEYuCS1LI&sharer_sharetime=1634692039568&sharer_shareid=966f440169937ddeabee7cec964be6bc#rd)
- [vue-i18n](https://vue-i18n.intlify.dev/guide/advanced/composition.html#mapping-between-vuei18n-instance-and-composer-instance)
- [URL-friendly characters](https://stackoverflow.com/questions/695438/what-are-the-safe-characters-for-making-urls)

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