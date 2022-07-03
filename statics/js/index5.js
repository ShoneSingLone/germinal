const LogoSVG = Vue.defineComponent({
  props: {
    length: {
      type: String
    }
  },
  render() {
    const length = this.length;
    return Vue.createVNode("svg", {
      "class": "svg",
      "width": length,
      "height": length,
      "viewBox": "0 0 64 64",
      "version": "1.1"
    }, [Vue.createVNode("title", null, [Vue.createTextVNode("Icon")]), Vue.createVNode("desc", null, [Vue.createTextVNode("Created with Sketch.")]), Vue.createVNode("defs", null, [Vue.createVNode("linearGradient", {
      "x1": "50%",
      "y1": "0%",
      "x2": "50%",
      "y2": "100%",
      "id": "linearGradient-1"
    }, [Vue.createVNode("stop", {
      "stopColor": "#FFFFFF",
      "offset": "0%"
    }, null), Vue.createVNode("stop", {
      "stopColor": "#F2F2F2",
      "offset": "100%"
    }, null)]), Vue.createVNode("circle", {
      "id": "path-2",
      "cx": "31.9988602",
      "cy": "31.9988602",
      "r": "2.92886048"
    }, null), Vue.createVNode("filter", {
      "x": "-85.4%",
      "y": "-68.3%",
      "width": "270.7%",
      "height": "270.7%",
      "filterUnits": "objectBoundingBox",
      "id": "filter-3"
    }, [Vue.createVNode("feOffset", {
      "dx": "0",
      "dy": "1",
      "in": "SourceAlpha",
      "result": "shadowOffsetOuter1"
    }, null), Vue.createVNode("feGaussianBlur", {
      "stdDeviation": "1.5",
      "in": "shadowOffsetOuter1",
      "result": "shadowBlurOuter1"
    }, null), Vue.createVNode("feColorMatrix", {
      "values": "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.159703351 0",
      "type": "matrix",
      "in": "shadowBlurOuter1"
    }, null)])]), Vue.createVNode("g", {
      "id": "\u9996\u9875",
      "stroke": "none",
      "strokeWidth": "1",
      "fill": "none",
      "fillRule": "evenodd"
    }, [Vue.createVNode("g", {
      "id": "\u5927\u5C4F\u5E55"
    }, [Vue.createVNode("g", {
      "id": "Icon"
    }, [Vue.createVNode("circle", {
      "id": "Oval-1",
      "fill": "white",
      "cx": "32",
      "cy": "32",
      "r": "32"
    }, null), Vue.createVNode("path", {
      "d": "M36.7078009,31.8054514 L36.7078009,51.7110548 C36.7078009,54.2844537 34.6258634,56.3695395 32.0579205,56.3695395 C29.4899777,56.3695395 27.4099998,54.0704461 27.4099998,51.7941246 L27.4099998,31.8061972 C27.4099998,29.528395 29.4909575,27.218453 32.0589004,27.230043 C34.6268432,27.241633 36.7078009,29.528395 36.7078009,31.8054514 Z",
      "id": "blue",
      "fill": "#2359F1",
      "fillRule": "nonzero"
    }, null), Vue.createVNode("path", {
      "d": "M45.2586091,17.1026914 C45.2586091,17.1026914 45.5657231,34.0524383 45.2345291,37.01141 C44.9033351,39.9703817 43.1767091,41.6667796 40.6088126,41.6667796 C38.040916,41.6667796 35.9609757,39.3676862 35.9609757,37.0913646 L35.9609757,17.1034372 C35.9609757,14.825635 38.0418959,12.515693 40.6097924,12.527283 C43.177689,12.538873 45.2586091,14.825635 45.2586091,17.1026914 Z",
      "id": "green",
      "fill": "#57CF27",
      "fillRule": "nonzero",
      "transform": "translate(40.674608, 27.097010) rotate(60.000000) translate(-40.674608, -27.097010) "
    }, null), Vue.createVNode("path", {
      "d": "M28.0410158,17.0465598 L28.0410158,36.9521632 C28.0410158,39.525562 25.9591158,41.6106479 23.3912193,41.6106479 C20.8233227,41.6106479 18.7433824,39.3115545 18.7433824,37.035233 L18.7433824,17.0473055 C18.7433824,14.7695034 20.8243026,12.4595614 23.3921991,12.4711513 C25.9600956,12.4827413 28.0410158,14.7695034 28.0410158,17.0465598 Z",
      "id": "red",
      "fill": "#FF561B",
      "fillRule": "nonzero",
      "transform": "translate(23.392199, 27.040878) rotate(-60.000000) translate(-23.392199, -27.040878) "
    }, null), Vue.createVNode("g", {
      "id": "inner-round"
    }, [Vue.createVNode("use", {
      "fill": "black",
      "fillOpacity": "1",
      "filter": "url(#filter-3)",
      "xlink:href": "#path-2"
    }, null), Vue.createVNode("use", {
      "fill": "#F7F7F7",
      "fillRule": "evenodd",
      "xlink:href": "#path-2"
    }, null)])])])])]);
  }
});
export { LogoSVG as L };
