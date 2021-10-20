# Info

- [Germinal](https://shonesinglone.github.io/germinal/)[![Build Status](https://app.travis-ci.com/ShoneSingLone/germinal.svg?branch=master)](https://app.travis-ci.com/ShoneSingLone/germinal)

## Reference

- [antv](https://next.antdv.com/components/overview-cn/)
  - [Ant Design Vue 3.0](https://mp.weixin.qq.com/s?__biz=MzU4NTgyMTM0MQ==&mid=2247484357&idx=1&sn=478c97c3ddd1703f4851863a8f4b2863&chksm=fd85fe37caf27721818cfcef9521116cb54ca4c023951445ed71a1d87786c383f2888d64035f&mpshare=1&scene=23&srcid=10203hvGd6nN3z8bEYuCS1LI&sharer_sharetime=1634692039568&sharer_shareid=966f440169937ddeabee7cec964be6bc#rd)

Travis branchs only master

```js
/* main.js 第一行 window._ 工具 常用工具函数 */
import "@ventose/ui/loadCommonUtil.js";
```

```js
import {AppState} from "@s/app";
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