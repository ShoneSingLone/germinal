import { M as Mock } from "./index-65e0048f.js";
import { g as getQueryParameters, b as builder } from "./util-93ba83bc.js";
import "./index-64b7f3a2.js";
import "./vendor-aca27b2a.js";
const totalCount = 5701;
const serverList = (options) => {
  const parameters = getQueryParameters(options);
  const result = [];
  const pageNo = parseInt(parameters.pageNo);
  const pageSize = parseInt(parameters.pageSize);
  const totalPage = Math.ceil(totalCount / pageSize);
  const key = (pageNo - 1) * pageSize;
  const next = (pageNo >= totalPage ? totalCount % pageSize : pageSize) + 1;
  for (let i = 1; i < next; i++) {
    const tmpKey = key + i;
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: "No " + tmpKey,
      description: "\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0",
      callNo: Mock.mock("@integer(1, 999)"),
      status: Mock.mock("@integer(0, 3)"),
      updatedAt: Mock.mock("@datetime"),
      editable: false
    });
  }
  return builder({
    pageSize,
    pageNo,
    totalCount,
    totalPage,
    data: result
  });
};
const projects = () => {
  return builder({
    data: [{
      id: 1,
      cover: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      title: "Alipay",
      description: "\u90A3\u662F\u4E00\u79CD\u5185\u5728\u7684\u4E1C\u897F\uFF0C \u4ED6\u4EEC\u5230\u8FBE\u4E0D\u4E86\uFF0C\u4E5F\u65E0\u6CD5\u89E6\u53CA\u7684",
      status: 1,
      updatedAt: "2018-07-26 00:00:00"
    }, {
      id: 2,
      cover: "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
      title: "Angular",
      description: "\u5E0C\u671B\u662F\u4E00\u4E2A\u597D\u4E1C\u897F\uFF0C\u4E5F\u8BB8\u662F\u6700\u597D\u7684\uFF0C\u597D\u4E1C\u897F\u662F\u4E0D\u4F1A\u6D88\u4EA1\u7684",
      status: 1,
      updatedAt: "2018-07-26 00:00:00"
    }, {
      id: 3,
      cover: "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",
      title: "Ant Design",
      description: "\u57CE\u9547\u4E2D\u6709\u90A3\u4E48\u591A\u7684\u9152\u9986\uFF0C\u5979\u5374\u504F\u504F\u8D70\u8FDB\u4E86\u6211\u7684\u9152\u9986",
      status: 1,
      updatedAt: "2018-07-26 00:00:00"
    }, {
      id: 4,
      cover: "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",
      title: "Ant Design Pro",
      description: "\u90A3\u65F6\u5019\u6211\u53EA\u4F1A\u60F3\u81EA\u5DF1\u60F3\u8981\u4EC0\u4E48\uFF0C\u4ECE\u4E0D\u60F3\u81EA\u5DF1\u62E5\u6709\u4EC0\u4E48",
      status: 1,
      updatedAt: "2018-07-26 00:00:00"
    }, {
      id: 5,
      cover: "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",
      title: "Bootstrap",
      description: "\u51DB\u51AC\u5C06\u81F3",
      status: 1,
      updatedAt: "2018-07-26 00:00:00"
    }, {
      id: 6,
      cover: "https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png",
      title: "Vue",
      description: "\u751F\u547D\u5C31\u50CF\u4E00\u76D2\u5DE7\u514B\u529B\uFF0C\u7ED3\u679C\u5F80\u5F80\u51FA\u4EBA\u610F\u6599",
      status: 1,
      updatedAt: "2018-07-26 00:00:00"
    }],
    pageSize: 10,
    pageNo: 0,
    totalPage: 6,
    totalCount: 57
  });
};
const activity = () => {
  return builder([{
    id: 1,
    user: {
      nickname: "@name",
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
    },
    project: {
      name: "\u767D\u9E6D\u9171\u6CB9\u5F00\u53D1\u7EC4",
      action: "\u66F4\u65B0",
      event: "\u756A\u7EC4\u8BA1\u5212"
    },
    time: "2018-08-23 14:47:00"
  }, {
    id: 1,
    user: {
      nickname: "\u84DD\u8393\u9171",
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png"
    },
    project: {
      name: "\u767D\u9E6D\u9171\u6CB9\u5F00\u53D1\u7EC4",
      action: "\u66F4\u65B0",
      event: "\u756A\u7EC4\u8BA1\u5212"
    },
    time: "2018-08-23 09:35:37"
  }, {
    id: 1,
    user: {
      nickname: "@name",
      avatar: "@image(64x64)"
    },
    project: {
      name: "\u767D\u9E6D\u9171\u6CB9\u5F00\u53D1\u7EC4",
      action: "\u521B\u5EFA",
      event: "\u756A\u7EC4\u8BA1\u5212"
    },
    time: "2017-05-27 00:00:00"
  }, {
    id: 1,
    user: {
      nickname: "\u66F2\u4E3D\u4E3D",
      avatar: "@image(64x64)"
    },
    project: {
      name: "\u9AD8\u903C\u683C\u8BBE\u8BA1\u5929\u56E2",
      action: "\u66F4\u65B0",
      event: "\u516D\u6708\u8FED\u4EE3"
    },
    time: "2018-08-23 14:47:00"
  }, {
    id: 1,
    user: {
      nickname: "@name",
      avatar: "@image(64x64)"
    },
    project: {
      name: "\u9AD8\u903C\u683C\u8BBE\u8BA1\u5929\u56E2",
      action: "created",
      event: "\u516D\u6708\u8FED\u4EE3"
    },
    time: "2018-08-23 14:47:00"
  }, {
    id: 1,
    user: {
      nickname: "\u66F2\u4E3D\u4E3D",
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
    },
    project: {
      name: "\u9AD8\u903C\u683C\u8BBE\u8BA1\u5929\u56E2",
      action: "created",
      event: "\u516D\u6708\u8FED\u4EE3"
    },
    time: "2018-08-23 14:47:00"
  }]);
};
const teams = () => {
  return builder([{
    id: 1,
    name: "\u79D1\u5B66\u642C\u7816\u7EC4",
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
  }, {
    id: 2,
    name: "\u7A0B\u5E8F\u5458\u65E5\u5E38",
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png"
  }, {
    id: 1,
    name: "\u8BBE\u8BA1\u5929\u56E2",
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png"
  }, {
    id: 1,
    name: "\u4E2D\u4E8C\u5C11\u5973\u56E2",
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png"
  }, {
    id: 1,
    name: "\u9A97\u4F60\u5B66\u8BA1\u7B97\u673A",
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png"
  }]);
};
const radar = () => {
  return builder([{
    item: "\u5F15\u7528",
    \u4E2A\u4EBA: 70,
    \u56E2\u961F: 30,
    \u90E8\u95E8: 40
  }, {
    item: "\u53E3\u7891",
    \u4E2A\u4EBA: 60,
    \u56E2\u961F: 70,
    \u90E8\u95E8: 40
  }, {
    item: "\u4EA7\u91CF",
    \u4E2A\u4EBA: 50,
    \u56E2\u961F: 60,
    \u90E8\u95E8: 40
  }, {
    item: "\u8D21\u732E",
    \u4E2A\u4EBA: 40,
    \u56E2\u961F: 50,
    \u90E8\u95E8: 40
  }, {
    item: "\u70ED\u5EA6",
    \u4E2A\u4EBA: 60,
    \u56E2\u961F: 70,
    \u90E8\u95E8: 40
  }, {
    item: "\u5F15\u7528",
    \u4E2A\u4EBA: 70,
    \u56E2\u961F: 50,
    \u90E8\u95E8: 40
  }]);
};
Mock.mock(/\/service/, "get", serverList);
Mock.mock(/\/list\/search\/projects/, "get", projects);
Mock.mock(/\/workplace\/activity/, "get", activity);
Mock.mock(/\/workplace\/teams/, "get", teams);
Mock.mock(/\/workplace\/radar/, "get", radar);
