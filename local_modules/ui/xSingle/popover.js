import $ from "jquery";
import {createApp, h,} from "vue";
import {genId} from "../common";
// Default settings
const DEFAULT_SETTINGS = {
    width: 250, // Width of the popover
    fadeInDuration: 65, // Duration of popover fade-in animation
    fadeOutDuration: 65, // Duration of popover fade-out animation
    viewportSideMargin: 10, // Space to leave the side if out the viewport
    preventHide: false, // Prevent hide when clicking within popover
    onShow: function () {
    }, // Called upon showing the popover
    onHide: function () {
    } // Called upon hiding the popover
};


/*
{
    popoverSelector,
    component
}
 */
function genPopover(addPlugins) {

    return class Popover {
        constructor(targetSelectorString, options) {
            this.id = genId("xPopover");
            this.targetSelectorString = targetSelectorString;
            this.$triggerDOM = $(this.targetSelectorString);
            if (!_.is$Selected(this.$triggerDOM)) {
                console.error("no popover target");
                return null;
            }
            this.options = options;
            this.$popoverDOM = null;
            this.$popoverMountDOM = null;
            this.init();
            return this;
        }

        init() {
            this.ensurePopoverContent();
        }

        /* 确定有popover内容，hide的时候需要 destroy */
        ensurePopoverContent() {
            /* 提供 popoverSelector */
            if (_.isString(this.options.popoverSelector)) {
                this.$popoverDOM = $(this.options.popoverSelector);
                if (!_.is$Selected(this.$popoverDOM)) {
                    console.error("no popover content DOM");
                    return null;
                }
            }

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
            console.error("no popover settings");
        }
    };
}

/* 缓存 popover 的配置信息 */
const popverOptionsCollection = {};

/* 监听 触发popover的事件 hover click */
export function installPopoverDirective(app, UI, addPlugins) {
    UI.Popover = genPopover(addPlugins);
    app.directive("uiPopover", {
        mounted(el, binding) {
            const id = genId("xPopoverTarget");
            const $el = $(el).addClass("x-ui-popover");
            el.dataset["popoverId"] = id;
            /* TODO:remove */
            $el.text(id);
            popverOptionsCollection[id] = binding.value;
        },
        unmounted(el) {
            const id = el.dataset["popoverId"];
            delete popverOptionsCollection[id];
        }
    });

}

/* listener */
$(document).on("click.uiPopver", "[data-popover-id]", function (event) {
    const id = this.dataset["popoverId"];
    const popverOptions = popverOptionsCollection[id];
    new Popover(this, popverOptions);
});

$(document).on("mouseenter.uiPopver", "[data-popover-id]", function (event) {
    console.log("hover.uiPopver,this");
});

$(document).on("mouseenter.uiPopver", "[data-popover-id]", function (event) {
    console.log("hover.uiPopver,this");
});
