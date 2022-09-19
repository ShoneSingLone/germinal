import { b as __vitePreload, d as _export_sfc } from "./index.js";
import { S as State_App } from "./main.js";
import "./FormRules.js";
import "./UserOutlined.js";
import "./form.js";
var _sfc_main = Vue.defineComponent({
  components: {
    LayoutMusicMobile: Vue.defineAsyncComponent(() => __vitePreload(() => import("./LayoutMusicMobile.js"), true ? ["statics/js/LayoutMusicMobile.js","statics/assets/LayoutMusicMobile.ed216530.css","statics/js/MusicPlayer.js","statics/assets/MusicPlayer.a8215aec.css","statics/js/index.js","statics/assets/index.5a8a9b62.css","statics/js/main.js","statics/assets/main.cf820984.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0)),
    LayoutMusicPc: Vue.defineAsyncComponent(() => __vitePreload(() => import("./LayoutMusicPc.js"), true ? ["statics/js/LayoutMusicPc.js","statics/assets/LayoutMusicPc.06551fe4.css","statics/js/MusicPlayer.js","statics/assets/MusicPlayer.a8215aec.css","statics/js/index.js","statics/assets/index.5a8a9b62.css","statics/js/main.js","statics/assets/main.cf820984.css","statics/js/FormRules.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0))
  },
  setup() {
    return {
      State_App
    };
  },
  mounted_demo() {
    var audioCtx = new AudioContext();
    var button = this.$refs.button;
    var pre = this.$refs.pre;
    var myScript = this.$refs.script;
    pre.innerHTML = myScript.innerHTML;
    var channels = 2;
    var frameCount = audioCtx.sampleRate * 2;
    var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
    button.onclick = function() {
      for (var channel = 0; channel < channels; channel++) {
        var nowBuffering = myArrayBuffer.getChannelData(channel);
        for (var i = 0; i < frameCount; i++) {
          nowBuffering[i] = Math.random() * 2 - 1;
        }
      }
      var source = audioCtx.createBufferSource();
      source.buffer = myArrayBuffer;
      source.connect(audioCtx.destination);
      source.start();
    };
  }
});
var LayoutMusic_vue_vue_type_style_index_0_lang = "";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LayoutMusicMobile = Vue.resolveComponent("LayoutMusicMobile");
  const _component_LayoutMusicPc = Vue.resolveComponent("LayoutMusicPc");
  return _ctx.State_App.isCurrentClientMobile ? (Vue.openBlock(), Vue.createBlock(_component_LayoutMusicMobile, {
    key: 0,
    class: "music-app"
  })) : (Vue.openBlock(), Vue.createBlock(_component_LayoutMusicPc, {
    key: 1,
    class: "music-app"
  }));
}
var LayoutMusic = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { LayoutMusic as default };
