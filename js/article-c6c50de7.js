import { M as Mock } from "./index-65e0048f.js";
import { g as getQueryParameters, b as builder } from "./util-93ba83bc.js";
import "./index-64b7f3a2.js";
import "./vendor-aca27b2a.js";
const titles = ["Alipay", "Angular", "Ant Design", "Ant Design Pro", "Bootstrap", "React", "Vue", "Webpack"];
const avatar = ["https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png", "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png", "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png", "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png", "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png"];
const covers = ["https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png", "https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png", "https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png", "https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png"];
const owner = ["\u4ED8\u5C0F\u5C0F", "\u5434\u52A0\u597D", "\u5468\u661F\u661F", "\u6797\u4E1C\u4E1C", "\u66F2\u4E3D\u4E3D"];
const content = "\u6BB5\u843D\u793A\u610F\uFF1A\u8682\u8681\u91D1\u670D\u8BBE\u8BA1\u5E73\u53F0 ant.design\uFF0C\u7528\u6700\u5C0F\u7684\u5DE5\u4F5C\u91CF\uFF0C\u65E0\u7F1D\u63A5\u5165\u8682\u8681\u91D1\u670D\u751F\u6001\uFF0C\u63D0\u4F9B\u8DE8\u8D8A\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u7684\u4F53\u9A8C\u89E3\u51B3\u65B9\u6848\u3002\u8682\u8681\u91D1\u670D\u8BBE\u8BA1\u5E73\u53F0 ant.design\uFF0C\u7528\u6700\u5C0F\u7684\u5DE5\u4F5C\u91CF\uFF0C\u65E0\u7F1D\u63A5\u5165\u8682\u8681\u91D1\u670D\u751F\u6001\uFF0C\u63D0\u4F9B\u8DE8\u8D8A\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u7684\u4F53\u9A8C\u89E3\u51B3\u65B9\u6848\u3002";
const description = "\u5728\u4E2D\u53F0\u4EA7\u54C1\u7684\u7814\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u51FA\u73B0\u4E0D\u540C\u7684\u8BBE\u8BA1\u89C4\u8303\u548C\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u4F46\u5176\u4E2D\u5F80\u5F80\u5B58\u5728\u5F88\u591A\u7C7B\u4F3C\u7684\u9875\u9762\u548C\u7EC4\u4EF6\uFF0C\u8FD9\u4E9B\u7C7B\u4F3C\u7684\u7EC4\u4EF6\u4F1A\u88AB\u62BD\u79BB\u6210\u4E00\u5957\u6807\u51C6\u89C4\u8303\u3002";
const href = "https://ant.design";
const article = (options) => {
  const queryParameters = getQueryParameters(options);
  console.log("queryParameters", queryParameters);
  if (queryParameters && !queryParameters.count) {
    queryParameters.count = 5;
  }
  const data = [];
  for (let i = 0; i < queryParameters.count; i++) {
    const tmpKey = i + 1;
    const num = parseInt(Math.random() * (4 + 1), 10);
    data.push({
      id: tmpKey,
      avatar: avatar[num],
      owner: owner[num],
      content,
      star: Mock.mock("@integer(1, 999)"),
      percent: Mock.mock("@integer(1, 999)"),
      like: Mock.mock("@integer(1, 999)"),
      message: Mock.mock("@integer(1, 999)"),
      description,
      href,
      title: titles[i % 8],
      updatedAt: Mock.mock("@datetime"),
      members: [{
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png",
        name: "\u66F2\u4E3D\u4E3D",
        id: "member1"
      }, {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png",
        name: "\u738B\u662D\u541B",
        id: "member2"
      }, {
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png",
        name: "\u8463\u5A1C\u5A1C",
        id: "member3"
      }],
      activeUser: Math.ceil(Math.random() * 1e5) + 1e5,
      newUser: Math.ceil(Math.random() * 1e3) + 1e3,
      cover: parseInt(i / 4, 10) % 2 === 0 ? covers[i % 4] : covers[3 - i % 4]
    });
  }
  return builder(data);
};
Mock.mock(/\/list\/article/, "get", article);
