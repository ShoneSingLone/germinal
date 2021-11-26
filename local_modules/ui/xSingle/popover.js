import $ from "jquery";
import {genId} from "../common";
import layer from "./layer/layer";

const timeoutDelay = 400;
/* 缓存 popover 的配置信息 */
const popverOptionsCollection = {};
/**/
const popverIndexCollection = {};
const appAddPlugin = {};
const timerCollection = {};
const visibleArea = {};

/* 监听 触发popover的事件 hover click */
export function installPopoverDirective(app, appSettings) {
    const appId = genId("appId");
    appAddPlugin[appId] = appSettings.addPlugins;
    app.directive("uiPopover", {
        mounted(el, binding) {
            const followId = genId("xPopoverTarget");
            $(el).addClass("x-ui-popover").attr("id", followId);
            el.dataset["followId"] = followId;
            el.dataset["appId"] = appId;

            if (binding.value) {
                popverOptionsCollection[followId] = binding.value;
            }
        },
        unmounted(el) {
            const followId = el.dataset["followId"];
            layer.close(popverIndexCollection[followId]);
            delete popverOptionsCollection[followId];
            delete popverIndexCollection[followId];
        }
    });

}

/* listener */
$(document).on("click.uiPopver", "[data-follow-id]", function (event) {
    const followId = this.dataset["followId"];
    const popverOptions = popverOptionsCollection[followId];
    new Popover(this, popverOptions);
    /*记录当前的popover 点击到其他位置即消除当前，只允许同时有一个框，添加的是click标识*/
});


function inVisibleArea(followId) {
    /*不关闭，取消定时器*/
    if (timerCollection[followId]) {
        clearTimeout(timerCollection[followId]);
        delete timerCollection[followId];
    }
    visibleArea[followId] = true;
}

function closeTips(followId) {
    delete visibleArea[followId];
    timerCollection[followId] = setTimeout(
        () => {
            layer.close(popverIndexCollection[followId]);
            delete popverIndexCollection[followId];
        },
        timeoutDelay
    );
}

$(document).on("mouseenter.uiPopver", "[data-follow-id]", function (event) {
    console.log("hover.uiPopver,this", this.dataset);
    const followId = this.dataset.followId;
    inVisibleArea(followId);
    /*如果存在，不重复添加*/
    if (popverIndexCollection[followId]) {
        console.log("如果存在，不重复添加");
        return;
    }
    const options = popverOptionsCollection[followId] || {};

    const popoverIndex = layer.tips(
        options.content || "",
        `#${followId}`,
        {
            tips: [layer.UP, "#0FA6D8"],
            /*hover 不允许 同时多个 tips出现*/
            /*tipsMore: false,*/
            time: 0
        });
    popverIndexCollection[followId] = popoverIndex;
});

$(document).on("mouseleave.uiPopver", "[data-follow-id]", function (event) {
    /*如果鼠标又移动到TIPS范围内，则不close*/
    closeTips(this.dataset.followId);
});


/*鼠标滑动到弹出的tips上，不关闭tips*/
$(document).on("mouseenter.uiPopverTips", "[data-layer-tips-id]", function (event) {
    inVisibleArea(this.dataset.layerTipsId);
});

$(document).on("mouseleave.uiPopverTips", "[data-layer-tips-id]", function (event) {
    /*如果鼠标又移动到TIPS范围内，则不close*/
    closeTips(this.dataset.layerTipsId);
});
