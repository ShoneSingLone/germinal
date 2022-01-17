import { M as Mock } from "./index-413439dd.js";
import { b as builder } from "./util-93ba83bc.js";
import "./index-ec590ee9.js";
import "./vendor-81fcf740.js";
const info = (options) => {
  console.log("options", options);
  const userInfo = {
    id: "4291d7da9005377ec9aec4a71ea837f",
    name: "\u5929\u91CE\u8FDC\u5B50",
    username: "admin",
    password: "",
    avatar: "/avatar2.jpg",
    status: 1,
    telephone: "",
    lastLoginIp: "27.154.74.117",
    lastLoginTime: 1534837621348,
    creatorId: "admin",
    createTime: 1497160610259,
    merchantCode: "TLif2btpzg079h15bk",
    deleted: 0,
    roleId: "admin",
    role: {}
  };
  const roleObj = {
    id: "admin",
    name: "\u7BA1\u7406\u5458",
    describe: "\u62E5\u6709\u6240\u6709\u6743\u9650",
    status: 1,
    creatorId: "system",
    createTime: 1497160610259,
    deleted: 0,
    permissions: [{
      roleId: "admin",
      permissionId: "dashboard",
      permissionName: "\u4EEA\u8868\u76D8",
      actions: '[{"action":"add","defaultCheck":false,"describe":"\u65B0\u589E"},{"action":"query","defaultCheck":false,"describe":"\u67E5\u8BE2"},{"action":"get","defaultCheck":false,"describe":"\u8BE6\u60C5"},{"action":"update","defaultCheck":false,"describe":"\u4FEE\u6539"},{"action":"delete","defaultCheck":false,"describe":"\u5220\u9664"}]',
      actionEntitySet: [{
        action: "add",
        describe: "\u65B0\u589E",
        defaultCheck: false
      }, {
        action: "query",
        describe: "\u67E5\u8BE2",
        defaultCheck: false
      }, {
        action: "get",
        describe: "\u8BE6\u60C5",
        defaultCheck: false
      }, {
        action: "update",
        describe: "\u4FEE\u6539",
        defaultCheck: false
      }, {
        action: "delete",
        describe: "\u5220\u9664",
        defaultCheck: false
      }],
      actionList: null,
      dataAccess: null
    }, {
      roleId: "admin",
      permissionId: "exception",
      permissionName: "\u5F02\u5E38\u9875\u9762\u6743\u9650",
      actions: '[{"action":"add","defaultCheck":false,"describe":"\u65B0\u589E"},{"action":"query","defaultCheck":false,"describe":"\u67E5\u8BE2"},{"action":"get","defaultCheck":false,"describe":"\u8BE6\u60C5"},{"action":"update","defaultCheck":false,"describe":"\u4FEE\u6539"},{"action":"delete","defaultCheck":false,"describe":"\u5220\u9664"}]',
      actionEntitySet: [{
        action: "add",
        describe: "\u65B0\u589E",
        defaultCheck: false
      }, {
        action: "query",
        describe: "\u67E5\u8BE2",
        defaultCheck: false
      }, {
        action: "get",
        describe: "\u8BE6\u60C5",
        defaultCheck: false
      }, {
        action: "update",
        describe: "\u4FEE\u6539",
        defaultCheck: false
      }, {
        action: "delete",
        describe: "\u5220\u9664",
        defaultCheck: false
      }],
      actionList: null,
      dataAccess: null
    }, {
      roleId: "admin",
      permissionId: "result",
      permissionName: "\u7ED3\u679C\u6743\u9650",
      actions: '[{"action":"add","defaultCheck":false,"describe":"\u65B0\u589E"},{"action":"query","defaultCheck":false,"describe":"\u67E5\u8BE2"},{"action":"get","defaultCheck":false,"describe":"\u8BE6\u60C5"},{"action":"update","defaultCheck":false,"describe":"\u4FEE\u6539"},{"action":"delete","defaultCheck":false,"describe":"\u5220\u9664"}]',
      actionEntitySet: [{
        action: "add",
        describe: "\u65B0\u589E",
        defaultCheck: false
      }, {
        action: "query",
        describe: "\u67E5\u8BE2",
        defaultCheck: false
      }, {
        action: "get",
        describe: "\u8BE6\u60C5",
        defaultCheck: false
      }, {
        action: "update",
        describe: "\u4FEE\u6539",
        defaultCheck: false
      }, {
        action: "delete",
        describe: "\u5220\u9664",
        defaultCheck: false
      }],
      actionList: null,
      dataAccess: null
    }, {
      roleId: "admin",
      permissionId: "profile",
      permissionName: "\u8BE6\u7EC6\u9875\u6743\u9650",
      actions: '[{"action":"add","defaultCheck":false,"describe":"\u65B0\u589E"},{"action":"query","defaultCheck":false,"describe":"\u67E5\u8BE2"},{"action":"get","defaultCheck":false,"describe":"\u8BE6\u60C5"},{"action":"update","defaultCheck":false,"describe":"\u4FEE\u6539"},{"action":"delete","defaultCheck":false,"describe":"\u5220\u9664"}]',
      actionEntitySet: [{
        action: "add",
        describe: "\u65B0\u589E",
        defaultCheck: false
      }, {
        action: "query",
        describe: "\u67E5\u8BE2",
        defaultCheck: false
      }, {
        action: "get",
        describe: "\u8BE6\u60C5",
        defaultCheck: false
      }, {
        action: "update",
        describe: "\u4FEE\u6539",
        defaultCheck: false
      }, {
        action: "delete",
        describe: "\u5220\u9664",
        defaultCheck: false
      }],
      actionList: null,
      dataAccess: null
    }, {
      roleId: "admin",
      permissionId: "table",
      permissionName: "\u8868\u683C\u6743\u9650",
      actions: '[{"action":"add","defaultCheck":false,"describe":"\u65B0\u589E"},{"action":"import","defaultCheck":false,"describe":"\u5BFC\u5165"},{"action":"get","defaultCheck":false,"describe":"\u8BE6\u60C5"},{"action":"update","defaultCheck":false,"describe":"\u4FEE\u6539"}]',
      actionEntitySet: [{
        action: "add",
        describe: "\u65B0\u589E",
        defaultCheck: false
      }, {
        action: "import",
        describe: "\u5BFC\u5165",
        defaultCheck: false
      }, {
        action: "get",
        describe: "\u8BE6\u60C5",
        defaultCheck: false
      }, {
        action: "update",
        describe: "\u4FEE\u6539",
        defaultCheck: false
      }],
      actionList: null,
      dataAccess: null
    }, {
      roleId: "admin",
      permissionId: "form",
      permissionName: "\u8868\u5355\u6743\u9650",
      actions: '[{"action":"add","defaultCheck":false,"describe":"\u65B0\u589E"},{"action":"get","defaultCheck":false,"describe":"\u8BE6\u60C5"},{"action":"query","defaultCheck":false,"describe":"\u67E5\u8BE2"},{"action":"update","defaultCheck":false,"describe":"\u4FEE\u6539"},{"action":"delete","defaultCheck":false,"describe":"\u5220\u9664"}]',
      actionEntitySet: [{
        action: "add",
        describe: "\u65B0\u589E",
        defaultCheck: false
      }, {
        action: "get",
        describe: "\u8BE6\u60C5",
        defaultCheck: false
      }, {
        action: "query",
        describe: "\u67E5\u8BE2",
        defaultCheck: false
      }, {
        action: "update",
        describe: "\u4FEE\u6539",
        defaultCheck: false
      }, {
        action: "delete",
        describe: "\u5220\u9664",
        defaultCheck: false
      }],
      actionList: null,
      dataAccess: null
    }, {
      roleId: "admin",
      permissionId: "order",
      permissionName: "\u8BA2\u5355\u7BA1\u7406",
      actions: '[{"action":"add","defaultCheck":false,"describe":"\u65B0\u589E"},{"action":"query","defaultCheck":false,"describe":"\u67E5\u8BE2"},{"action":"get","defaultCheck":false,"describe":"\u8BE6\u60C5"},{"action":"update","defaultCheck":false,"describe":"\u4FEE\u6539"},{"action":"delete","defaultCheck":false,"describe":"\u5220\u9664"}]',
      actionEntitySet: [{
        action: "add",
        describe: "\u65B0\u589E",
        defaultCheck: false
      }, {
        action: "query",
        describe: "\u67E5\u8BE2",
        defaultCheck: false
      }, {
        action: "get",
        describe: "\u8BE6\u60C5",
        defaultCheck: false
      }, {
        action: "update",
        describe: "\u4FEE\u6539",
        defaultCheck: false
      }, {
        action: "delete",
        describe: "\u5220\u9664",
        defaultCheck: false
      }],
      actionList: null,
      dataAccess: null
    }, {
      roleId: "admin",
      permissionId: "permission",
      permissionName: "\u6743\u9650\u7BA1\u7406",
      actions: '[{"action":"add","defaultCheck":false,"describe":"\u65B0\u589E"},{"action":"get","defaultCheck":false,"describe":"\u8BE6\u60C5"},{"action":"update","defaultCheck":false,"describe":"\u4FEE\u6539"},{"action":"delete","defaultCheck":false,"describe":"\u5220\u9664"}]',
      actionEntitySet: [{
        action: "add",
        describe: "\u65B0\u589E",
        defaultCheck: false
      }, {
        action: "get",
        describe: "\u8BE6\u60C5",
        defaultCheck: false
      }, {
        action: "update",
        describe: "\u4FEE\u6539",
        defaultCheck: false
      }, {
        action: "delete",
        describe: "\u5220\u9664",
        defaultCheck: false
      }],
      actionList: null,
      dataAccess: null
    }, {
      roleId: "admin",
      permissionId: "role",
      permissionName: "\u89D2\u8272\u7BA1\u7406",
      actions: '[{"action":"add","defaultCheck":false,"describe":"\u65B0\u589E"},{"action":"get","defaultCheck":false,"describe":"\u8BE6\u60C5"},{"action":"update","defaultCheck":false,"describe":"\u4FEE\u6539"},{"action":"delete","defaultCheck":false,"describe":"\u5220\u9664"}]',
      actionEntitySet: [{
        action: "add",
        describe: "\u65B0\u589E",
        defaultCheck: false
      }, {
        action: "get",
        describe: "\u8BE6\u60C5",
        defaultCheck: false
      }, {
        action: "update",
        describe: "\u4FEE\u6539",
        defaultCheck: false
      }, {
        action: "delete",
        describe: "\u5220\u9664",
        defaultCheck: false
      }],
      actionList: null,
      dataAccess: null
    }, {
      roleId: "admin",
      permissionId: "table",
      permissionName: "\u684C\u5B50\u7BA1\u7406",
      actions: '[{"action":"add","defaultCheck":false,"describe":"\u65B0\u589E"},{"action":"get","defaultCheck":false,"describe":"\u8BE6\u60C5"},{"action":"query","defaultCheck":false,"describe":"\u67E5\u8BE2"},{"action":"update","defaultCheck":false,"describe":"\u4FEE\u6539"},{"action":"delete","defaultCheck":false,"describe":"\u5220\u9664"}]',
      actionEntitySet: [{
        action: "add",
        describe: "\u65B0\u589E",
        defaultCheck: false
      }, {
        action: "get",
        describe: "\u8BE6\u60C5",
        defaultCheck: false
      }, {
        action: "query",
        describe: "\u67E5\u8BE2",
        defaultCheck: false
      }, {
        action: "update",
        describe: "\u4FEE\u6539",
        defaultCheck: false
      }, {
        action: "delete",
        describe: "\u5220\u9664",
        defaultCheck: false
      }],
      actionList: null,
      dataAccess: null
    }, {
      roleId: "admin",
      permissionId: "user",
      permissionName: "\u7528\u6237\u7BA1\u7406",
      actions: '[{"action":"add","defaultCheck":false,"describe":"\u65B0\u589E"},{"action":"import","defaultCheck":false,"describe":"\u5BFC\u5165"},{"action":"get","defaultCheck":false,"describe":"\u8BE6\u60C5"},{"action":"update","defaultCheck":false,"describe":"\u4FEE\u6539"},{"action":"delete","defaultCheck":false,"describe":"\u5220\u9664"},{"action":"export","defaultCheck":false,"describe":"\u5BFC\u51FA"}]',
      actionEntitySet: [{
        action: "add",
        describe: "\u65B0\u589E",
        defaultCheck: false
      }, {
        action: "import",
        describe: "\u5BFC\u5165",
        defaultCheck: false
      }, {
        action: "get",
        describe: "\u8BE6\u60C5",
        defaultCheck: false
      }, {
        action: "update",
        describe: "\u4FEE\u6539",
        defaultCheck: false
      }, {
        action: "delete",
        describe: "\u5220\u9664",
        defaultCheck: false
      }, {
        action: "export",
        describe: "\u5BFC\u51FA",
        defaultCheck: false
      }],
      actionList: null,
      dataAccess: null
    }]
  };
  roleObj.permissions.push({
    roleId: "admin",
    permissionId: "support",
    permissionName: "\u8D85\u7EA7\u6A21\u5757",
    actions: '[{"action":"add","defaultCheck":false,"describe":"\u65B0\u589E"},{"action":"import","defaultCheck":false,"describe":"\u5BFC\u5165"},{"action":"get","defaultCheck":false,"describe":"\u8BE6\u60C5"},{"action":"update","defaultCheck":false,"describe":"\u4FEE\u6539"},{"action":"delete","defaultCheck":false,"describe":"\u5220\u9664"},{"action":"export","defaultCheck":false,"describe":"\u5BFC\u51FA"}]',
    actionEntitySet: [{
      action: "add",
      describe: "\u65B0\u589E",
      defaultCheck: false
    }, {
      action: "import",
      describe: "\u5BFC\u5165",
      defaultCheck: false
    }, {
      action: "get",
      describe: "\u8BE6\u60C5",
      defaultCheck: false
    }, {
      action: "update",
      describe: "\u4FEE\u6539",
      defaultCheck: false
    }, {
      action: "delete",
      describe: "\u5220\u9664",
      defaultCheck: false
    }, {
      action: "export",
      describe: "\u5BFC\u51FA",
      defaultCheck: false
    }],
    actionList: null,
    dataAccess: null
  });
  userInfo.role = roleObj;
  return builder(userInfo);
};
const userNav = (options) => {
  const nav = [
    {
      name: "dashboard",
      parentId: 0,
      id: 1,
      meta: {
        icon: "dashboard",
        title: "\u4EEA\u8868\u76D8",
        show: true
      },
      component: "RouteView",
      redirect: "/dashboard/workplace"
    },
    {
      name: "workplace",
      parentId: 1,
      id: 7,
      meta: {
        title: "\u5DE5\u4F5C\u53F0",
        show: true
      },
      component: "Workplace"
    },
    {
      name: "monitor",
      path: "https://www.baidu.com/",
      parentId: 1,
      id: 3,
      meta: {
        title: "\u76D1\u63A7\u9875\uFF08\u5916\u90E8\uFF09",
        target: "_blank",
        show: true
      }
    },
    {
      name: "Analysis",
      parentId: 1,
      id: 2,
      meta: {
        title: "\u5206\u6790\u9875",
        show: true
      },
      component: "Analysis",
      path: "/dashboard/analysis"
    },
    {
      name: "form",
      parentId: 0,
      id: 10,
      meta: {
        icon: "form",
        title: "\u8868\u5355\u9875"
      },
      redirect: "/form/base-form",
      component: "RouteView"
    },
    {
      name: "basic-form",
      parentId: 10,
      id: 6,
      meta: {
        title: "\u57FA\u7840\u8868\u5355"
      },
      component: "BasicForm"
    },
    {
      name: "step-form",
      parentId: 10,
      id: 5,
      meta: {
        title: "\u5206\u6B65\u8868\u5355"
      },
      component: "StepForm"
    },
    {
      name: "advanced-form",
      parentId: 10,
      id: 4,
      meta: {
        title: "\u9AD8\u7EA7\u8868\u5355"
      },
      component: "AdvanceForm"
    },
    {
      name: "list",
      parentId: 0,
      id: 10010,
      meta: {
        icon: "table",
        title: "\u5217\u8868\u9875",
        show: true
      },
      redirect: "/list/table-list",
      component: "RouteView"
    },
    {
      name: "table-list",
      parentId: 10010,
      id: 10011,
      path: "/list/table-list/:pageNo([1-9]\\d*)?",
      meta: {
        title: "\u67E5\u8BE2\u8868\u683C",
        show: true
      },
      component: "TableList"
    },
    {
      name: "basic-list",
      parentId: 10010,
      id: 10012,
      meta: {
        title: "\u6807\u51C6\u5217\u8868",
        show: true
      },
      component: "StandardList"
    },
    {
      name: "card",
      parentId: 10010,
      id: 10013,
      meta: {
        title: "\u5361\u7247\u5217\u8868",
        show: true
      },
      component: "CardList"
    },
    {
      name: "search",
      parentId: 10010,
      id: 10014,
      meta: {
        title: "\u641C\u7D22\u5217\u8868",
        show: true
      },
      redirect: "/list/search/article",
      component: "SearchLayout"
    },
    {
      name: "article",
      parentId: 10014,
      id: 10015,
      meta: {
        title: "\u641C\u7D22\u5217\u8868\uFF08\u6587\u7AE0\uFF09",
        show: true
      },
      component: "SearchArticles"
    },
    {
      name: "project",
      parentId: 10014,
      id: 10016,
      meta: {
        title: "\u641C\u7D22\u5217\u8868\uFF08\u9879\u76EE\uFF09",
        show: true
      },
      component: "SearchProjects"
    },
    {
      name: "application",
      parentId: 10014,
      id: 10017,
      meta: {
        title: "\u641C\u7D22\u5217\u8868\uFF08\u5E94\u7528\uFF09",
        show: true
      },
      component: "SearchApplications"
    },
    {
      name: "profile",
      parentId: 0,
      id: 10018,
      meta: {
        title: "\u8BE6\u60C5\u9875",
        icon: "profile",
        show: true
      },
      redirect: "/profile/basic",
      component: "RouteView"
    },
    {
      name: "basic",
      parentId: 10018,
      id: 10019,
      meta: {
        title: "\u57FA\u7840\u8BE6\u60C5\u9875",
        show: true
      },
      component: "ProfileBasic"
    },
    {
      name: "advanced",
      parentId: 10018,
      id: 10020,
      meta: {
        title: "\u9AD8\u7EA7\u8BE6\u60C5\u9875",
        show: true
      },
      component: "ProfileAdvanced"
    },
    {
      name: "result",
      parentId: 0,
      id: 10021,
      meta: {
        title: "\u7ED3\u679C\u9875",
        icon: "check-circle-o",
        show: true
      },
      redirect: "/result/success",
      component: "PageView"
    },
    {
      name: "success",
      parentId: 10021,
      id: 10022,
      meta: {
        title: "\u6210\u529F",
        hiddenHeaderContent: true,
        show: true
      },
      component: "ResultSuccess"
    },
    {
      name: "fail",
      parentId: 10021,
      id: 10023,
      meta: {
        title: "\u5931\u8D25",
        hiddenHeaderContent: true,
        show: true
      },
      component: "ResultFail"
    },
    {
      name: "exception",
      parentId: 0,
      id: 10024,
      meta: {
        title: "\u5F02\u5E38\u9875",
        icon: "warning",
        show: true
      },
      redirect: "/exception/403",
      component: "RouteView"
    },
    {
      name: "403",
      parentId: 10024,
      id: 10025,
      meta: {
        title: "403",
        show: true
      },
      component: "Exception403"
    },
    {
      name: "404",
      parentId: 10024,
      id: 10026,
      meta: {
        title: "404",
        show: true
      },
      component: "Exception404"
    },
    {
      name: "500",
      parentId: 10024,
      id: 10027,
      meta: {
        title: "500",
        show: true
      },
      component: "Exception500"
    },
    {
      name: "account",
      parentId: 0,
      id: 10028,
      meta: {
        title: "\u4E2A\u4EBA\u9875",
        icon: "user",
        show: true
      },
      redirect: "/account/center",
      component: "RouteView"
    },
    {
      name: "center",
      parentId: 10028,
      id: 10029,
      meta: {
        title: "\u4E2A\u4EBA\u4E2D\u5FC3",
        show: true
      },
      component: "AccountCenter"
    },
    {
      name: "settings",
      parentId: 10028,
      id: 10030,
      meta: {
        title: "\u4E2A\u4EBA\u8BBE\u7F6E",
        hideHeader: true,
        hideChildren: true,
        show: true
      },
      redirect: "/account/settings/basic",
      component: "AccountSettings"
    },
    {
      name: "BasicSettings",
      path: "/account/settings/basic",
      parentId: 10030,
      id: 10031,
      meta: {
        title: "\u57FA\u672C\u8BBE\u7F6E",
        show: false
      },
      component: "BasicSetting"
    },
    {
      name: "SecuritySettings",
      path: "/account/settings/security",
      parentId: 10030,
      id: 10032,
      meta: {
        title: "\u5B89\u5168\u8BBE\u7F6E",
        show: false
      },
      component: "SecuritySettings"
    },
    {
      name: "CustomSettings",
      path: "/account/settings/custom",
      parentId: 10030,
      id: 10033,
      meta: {
        title: "\u4E2A\u6027\u5316\u8BBE\u7F6E",
        show: false
      },
      component: "CustomSettings"
    },
    {
      name: "BindingSettings",
      path: "/account/settings/binding",
      parentId: 10030,
      id: 10034,
      meta: {
        title: "\u8D26\u6237\u7ED1\u5B9A",
        show: false
      },
      component: "BindingSettings"
    },
    {
      name: "NotificationSettings",
      path: "/account/settings/notification",
      parentId: 10030,
      id: 10034,
      meta: {
        title: "\u65B0\u6D88\u606F\u901A\u77E5",
        show: false
      },
      component: "NotificationSettings"
    }
  ];
  const json = builder(nav);
  console.log("json", json);
  return json;
};
Mock.mock(/\/api\/user\/info/, "get", info);
Mock.mock(/\/api\/user\/nav/, "get", userNav);
