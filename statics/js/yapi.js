import { m as _global_$, _ as _global__, U as UI, a as __vitePreload, N as NProgress, b as setDocumentTitle, S as State_UI, n as AutoComplete, c as _export_sfc, j as isFunction_1, L as LoadingOutlined, i as each, k as dayjs, V as VentoseUIWithInstall } from "./each.js";
var Footer = "";
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !Vue.isVNode(s);
}
const version = Date.now();
const FootItem = ({
  linkList,
  title,
  iconType
}) => {
  return Vue.createVNode(Vue.resolveComponent("aCol"), {
    "span": 6
  }, {
    default: () => [Vue.createVNode("h4", {
      "class": "title flex horizon middle"
    }, [iconType ? Vue.createVNode(Vue.resolveComponent("LazySvg"), {
      "icon": iconType,
      "style": "width: 24px;height: 24px;display: inline-block;"
    }, null) : "", title]), linkList.map((item, i) => {
      return Vue.createVNode("p", {
        "key": i
      }, [Vue.createVNode("a", {
        "href": item.itemLink,
        "class": "link"
      }, [item.itemTitle])]);
    })]
  });
};
var _sfc_main$1 = Vue.defineComponent({
  data() {
    return {
      wrapperStyle: {
        height: "192px"
      },
      footList: [{
        title: "GitHub",
        iconType: "github",
        linkList: [{
          itemTitle: "YApi \u6E90\u7801\u4ED3\u5E93",
          itemLink: "https://github.com/YMFE/yapi"
        }]
      }, {
        title: "\u56E2\u961F",
        iconType: "team",
        linkList: [{
          itemTitle: "YMFE",
          itemLink: "https://ymfe.org"
        }]
      }, {
        title: "\u53CD\u9988",
        iconType: "feedback",
        linkList: [{
          itemTitle: "Github Issues",
          itemLink: "https://github.com/YMFE/yapi/issues"
        }, {
          itemTitle: "Github Pull Requests",
          itemLink: "https://github.com/YMFE/yapi/pulls"
        }]
      }, {
        title: `Copyright \xA9 2018-${new Date().getFullYear()} YMFE`,
        linkList: [{
          itemTitle: `\u7248\u672C: ${version} `,
          itemLink: "https://github.com/YMFE/yapi/blob/master/CHANGELOG.md"
        }, {
          itemTitle: "\u4F7F\u7528\u6587\u6863",
          itemLink: "https://hellosean1025.github.io/yapi/"
        }]
      }]
    };
  },
  mounted() {
    _global_$("#app").addClass("flex vertical");
    setTimeout(() => {
      this.wrapperStyle.height = 0;
    }, 1e3 * 10);
  },
  unmounted() {
    _global_$("#app").removeClass("flex vertical");
  },
  render() {
    let _slot;
    return Vue.createVNode("div", {
      "class": "footer-wrapper",
      "style": this.wrapperStyle
    }, [Vue.createVNode(Vue.resolveComponent("aRow"), {
      "class": "footer-container"
    }, _isSlot$1(_slot = this.footList.map((item, i) => {
      return Vue.createVNode(FootItem, {
        "key": i,
        "linkList": item.linkList,
        "title": item.title,
        "iconType": item.iconType
      }, null);
    })) ? _slot : {
      default: () => [_slot]
    })]);
  }
});
var Header$1 = "";
var Search = "";
const ajax = axios.create({
  timeout: 2e4
});
ajax.interceptors.request.use((config) => {
  if (config.data) {
    _global__.each(["name"], (prop) => {
      config.data[prop] = _global__.htmlFilter(config.data[prop]);
    });
  }
  return config;
}, (error) => Promise.reject(error));
ajax.interceptors.response.use(async (response) => {
  var _a, _b;
  if (((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.errcode) !== 0) {
    UI.message.error((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.errmsg);
    return Promise.reject(response);
  }
  return Promise.resolve({
    data: response.data.data,
    response
  });
}, async (error) => {
  var _a;
  const {
    response
  } = error;
  console.log(response);
  logError((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.data);
  return Promise.reject(error);
});
function logError(msg) {
  if (!msg)
    return;
  UI.notification.error(msg);
  console.error(msg);
}
const user = {
  getUserStatus() {
    return ajax({
      method: "get",
      url: "/api/user/status"
    });
  },
  searchUser(params) {
    return ajax({
      method: "get",
      url: "/api/user/search",
      params
    });
  },
  loginActions(data) {
    return ajax({
      method: "post",
      url: "/api/user/login",
      data
    });
  },
  logoutActions() {
    return ajax({
      method: "get",
      url: "/api/user/logout"
    });
  },
  regActions(data) {
    return ajax({
      method: "post",
      url: "/api/user/reg",
      data
    });
  }
};
const project = {
  addProject(data) {
    return ajax({
      method: "post",
      url: "/api/project/add",
      data
    });
  }
};
const group = {
  getMyGroup() {
    return ajax({
      method: "get",
      url: "/api/group/get_mygroup"
    });
  },
  addGroup(data) {
    return ajax({
      method: "post",
      url: "/api/group/add",
      data
    });
  },
  updateGroup(data) {
    return ajax({
      method: "post",
      url: "/api/group/up",
      data
    });
  },
  getMyGroupList() {
    return ajax({
      method: "get",
      url: "/api/group/list"
    });
  },
  getMyGroupBy(groupId) {
    return ajax({
      method: "get",
      url: "/api/group/get",
      params: {
        id: groupId
      }
    });
  }
};
const news = {
  getLogList({
    typeid,
    type,
    page,
    limit,
    selectValue
  }) {
    return ajax({
      method: "get",
      url: "/api/log/list",
      params: {
        typeid,
        type,
        page,
        limit: limit ? limit : 10,
        selectValue
      }
    });
  }
};
const API = {
  user,
  group,
  news,
  project
};
const {
  $t
} = State_UI;
const routes = [
  {
    path: "/dev",
    name: "home",
    component: () => __vitePreload(() => import("./Dev.js"), true ? ["statics/js/Dev.js","statics/js/GroupList.js","statics/assets/GroupList.ebf21596.css","statics/js/each.js","statics/assets/each.60e59025.css","statics/js/FormRules.js","statics/js/form.js"] : void 0)
  },
  {
    path: `/login`,
    name: "login",
    component: () => __vitePreload(() => import("./LoginContainer.js"), true ? ["statics/js/LoginContainer.js","statics/assets/LoginContainer.3ebe9e70.css","statics/js/each.js","statics/assets/each.60e59025.css","statics/js/FormRules.js","statics/js/UserOutlined.js"] : void 0),
    meta: {
      title: $t("\u7528\u6237\u767B\u5F55").label
    }
  },
  {
    path: `/group`,
    name: "group",
    component: () => __vitePreload(() => import("./Group.js"), true ? ["statics/js/Group.js","statics/assets/Group.516e3701.css","statics/js/GroupList.js","statics/assets/GroupList.ebf21596.css","statics/js/each.js","statics/assets/each.60e59025.css","statics/js/FormRules.js","statics/js/form.js","statics/js/variable.js"] : void 0)
  },
  {
    path: `/group/:groupId`,
    name: "groupView",
    component: () => __vitePreload(() => import("./Group.js"), true ? ["statics/js/Group.js","statics/assets/Group.516e3701.css","statics/js/GroupList.js","statics/assets/GroupList.ebf21596.css","statics/js/each.js","statics/assets/each.60e59025.css","statics/js/FormRules.js","statics/js/form.js","statics/js/variable.js"] : void 0)
  },
  {
    path: `/add-project`,
    name: "AddProject",
    component: () => __vitePreload(() => import("./AddProject.js"), true ? ["statics/js/AddProject.js","statics/assets/AddProject.ab64bc0f.css","statics/js/variable.js","statics/js/each.js","statics/assets/each.60e59025.css","statics/js/FormRules.js","statics/js/form.js"] : void 0)
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => __vitePreload(() => import("./NotFound.js"), true ? [] : void 0)
  },
  {
    path: "/",
    name: "home",
    redirect: (to) => {
      return {
        path: "/group"
      };
    }
  }
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});
NProgress.configure({
  showSpinner: false
});
router.beforeEach(async (to, from) => {
  var _a;
  NProgress.start();
  try {
    if (!await Methods_App.checkLoginState()) {
      if (["/login"].includes(to.path)) {
        return true;
      }
      router.push({
        path: "/login"
      });
      return false;
    }
    if (State_App.user.isLogin) {
      if (["/login"].includes(to.path)) {
        setTimeout(() => {
          router.push({
            path: "/"
          });
        }, 300);
        return false;
      }
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    if ((_a = to == null ? void 0 : to.meta) == null ? void 0 : _a.title) {
      setDocumentTitle(to.meta.title);
    } else {
      setDocumentTitle("YApi-\u9AD8\u6548\u3001\u6613\u7528\u3001\u529F\u80FD\u5F3A\u5927\u7684\u53EF\u89C6\u5316\u63A5\u53E3\u7BA1\u7406\u5E73\u53F0");
    }
  }
});
router.afterEach(() => {
  NProgress.done();
});
const LOADING_STATUS = 0;
const GUEST_STATUS = 1;
const MEMBER_STATUS = 2;
const State_App = Vue.reactive({
  user: {
    isLogin: false,
    canRegister: true,
    isLDAP: false,
    userName: null,
    uid: null,
    email: "",
    loginState: LOADING_STATUS,
    loginWrapActiveKey: "1",
    role: "",
    type: "",
    breadcrumb: [],
    studyTip: 0,
    study: false,
    imageUrl: ""
  },
  project: {
    currPage: "",
    projectList: "",
    userInfo: "",
    tableLoading: ""
  },
  news: {
    newsData: {
      list: [],
      total: 0
    },
    curpage: 1
  },
  groupList: [],
  currGroup: {
    group_name: "",
    group_desc: "",
    custom_field1: {
      name: "",
      enable: false
    }
  },
  group: {
    field: {
      name: "",
      enable: false
    },
    member: [],
    role: ""
  }
});
window.State_App = State_App;
const Methods_App = {
  setMenu(menu) {
    State_App.menu = Object.assign({}, State_App.menu, menu);
  },
  setUser(user2) {
    State_App.user = Object.assign({}, State_App.user, user2);
  },
  setNews(news2) {
    State_App.news = Object.assign({}, State_App.news, news2);
  },
  setBreadcrumb(breadcrumb) {
    Methods_App.setUser({
      breadcrumb
    });
  },
  async checkLoginState() {
    if (State_App.user.isLogin) {
      return true;
    }
    try {
      const {
        data,
        response
      } = await API.user.getUserStatus();
      Methods_App.setUser({
        isLogin: response.data.errcode == 0,
        isLDAP: response.data.ladp,
        canRegister: response.data.canRegister,
        role: data ? data.role : null,
        loginState: response.data.errcode == 0 ? MEMBER_STATUS : GUEST_STATUS,
        userName: data ? data.username : null,
        uid: data ? data._id : null,
        type: data ? data.type : null,
        study: data ? data.study : false
      });
    } catch (error) {
      console.error(error);
    } finally {
      return State_App.user.isLogin;
    }
  },
  async fetchGroupList() {
    const {
      data: groupList
    } = await API.group.getMyGroupList();
    State_App.groupList = groupList;
  },
  async setCurrGroup(group2) {
    let groupId;
    if (!_global__.isPlainObject(group2)) {
      groupId = parseInt(group2);
      if (!_global__.isNumber(groupId)) {
        throw new Error("miss groupId");
      }
      const {
        data
      } = await API.group.getMyGroupBy(groupId);
      group2 = data;
    }
    State_App.currGroup = _global__.merge({}, State_App.currGroup, group2);
    Methods_App.setUser({
      role: group2.role,
      field: {
        name: group2.custom_field1.name,
        enable: group2.custom_field1.enable
      }
    });
  },
  async fetchNewsData(typeid, type, page, limit, selectValue) {
    try {
      const {
        data
      } = await API.news.getLogList({
        typeid,
        type,
        page,
        limit,
        selectValue
      });
      Methods_App.setNews({
        curpage: 1,
        newsData: {
          total: data.total,
          list: _global__.sortBy(data.list, (a, b) => {
            if (a && b) {
              return b.add_time - a.add_time;
            }
            return false;
          })
        }
      });
    } catch (error) {
      console.error(error);
    }
  },
  async changeStudyTip() {
    State_App.user.studyTip++;
  },
  async finishStudy() {
    Methods_App.setUser({
      study: true,
      studyTip: 0
    });
  },
  async logoutActions() {
    try {
      const {
        data
      } = await API.user.logoutActions();
      Methods_App.setUser({
        isLogin: false,
        loginState: GUEST_STATUS,
        userName: null,
        uid: null,
        role: "",
        type: ""
      });
      if (data === "ok") {
        router.push({
          path: "/login"
        });
        UI.notification.success("\u9000\u51FA\u6210\u529F! ");
      }
    } catch (error) {
      console.error(error);
    }
  },
  async fetchInterfaceListMenu() {
  },
  async fetchProjectList() {
  },
  async changeMenuItem() {
  },
  async loginActions() {
  },
  async loginLdapActions() {
  },
  async fetchGroupMemberList() {
  },
  async addMember() {
  },
  async delMember() {
  },
  async changeMemberRole() {
  },
  async fetchMoreNews() {
  },
  async fetchInterfaceList() {
  },
  async setGroupList() {
  },
  async addProject() {
  },
  async delProject() {
  },
  async changeUpdateModal() {
  },
  delFollow() {
  },
  addFollow() {
  },
  getProject() {
  },
  checkProjectName() {
  },
  copyProjectMsg() {
  },
  loginTypeAction() {
  }
};
const Option = AutoComplete.Option;
var Srch = Vue.defineComponent({
  props: ["groupList", "projectList", "router", "history", "location", "setCurrGroup", "changeMenuItem", "fetchInterfaceListMenu"],
  data() {
    return {
      state: {
        dataSource: []
      }
    };
  },
  methods: {
    async onSelect(value, option) {
      if (option.props.type === "\u5206\u7EC4") {
        this.props.changeMenuItem("/group");
        this.$router.push({
          path: "/group/" + option.props["id"]
        });
        Methods_App.setCurrGroup({
          group_name: value,
          _id: option.props["id"] - 0
        });
      } else if (option.props.type === "\u9879\u76EE") {
        await Methods_App.setCurrGroup(option.props["groupId"]);
        this.$router.push({
          path: "/project/" + option.props["id"]
        });
      } else if (option.props.type === "\u63A5\u53E3") {
        await this.props.fetchInterfaceListMenu(option.props["projectId"]);
        this.props.history.push("/project/" + option.props["projectId"] + "/interface/api/" + option.props["id"]);
      }
    },
    handleSearch(value) {
      axios.get("/api/project/search?q=" + value).then((res) => {
        if (res.data && res.data.errcode === 0) {
          const dataSource = [];
          for (let title in res.data.data) {
            res.data.data[title].map((item) => {
              switch (title) {
                case "group":
                  dataSource.push(Vue.createVNode(Option, {
                    "key": `\u5206\u7EC4${item._id}`,
                    "type": "\u5206\u7EC4",
                    "value": `${item.groupName}`,
                    "id": `${item._id}`
                  }, {
                    default: () => [`\u5206\u7EC4: ${item.groupName}`]
                  }));
                  break;
                case "project":
                  dataSource.push(Vue.createVNode(Option, {
                    "key": `\u9879\u76EE${item._id}`,
                    "type": "\u9879\u76EE",
                    "id": `${item._id}`,
                    "groupId": `${item.groupId}`
                  }, {
                    default: () => [`\u9879\u76EE: ${item.name}`]
                  }));
                  break;
                case "interface":
                  dataSource.push(Vue.createVNode(Option, {
                    "key": `\u63A5\u53E3${item._id}`,
                    "type": "\u63A5\u53E3",
                    "id": `${item._id}`,
                    "projectId": `${item.projectId}`
                  }, {
                    default: () => [`\u63A5\u53E3: ${item.title}`]
                  }));
                  break;
              }
            });
          }
          this.setState({
            dataSource
          });
        } else {
          console.log("\u67E5\u8BE2\u9879\u76EE\u6216\u5206\u7EC4\u5931\u8D25");
        }
      }).catch((err) => {
        console.log(err);
      });
    }
  },
  render() {
    const {
      dataSource
    } = this.state;
    return Vue.createVNode("div", {
      "class": "search-wrapper"
    }, [Vue.createVNode(AutoComplete, {
      "class": "search-dropdown",
      "dataSource": dataSource,
      "style": {
        width: "100%"
      },
      "defaultActiveFirstOption": false,
      "onSelect": this.onSelect,
      "onSearch": this.handleSearch
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("aInput"), {
        "prefix": Vue.createVNode(Vue.resolveComponent("LazySvg"), {
          "icon": "search",
          "class": "srch-icon"
        }, null),
        "placeholder": "\u641C\u7D22\u5206\u7EC4/\u9879\u76EE/\u63A5\u53E3",
        "class": "search-input"
      }, null)]
    })]);
  }
});
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
var Breadcrumb = "";
const BreadcrumbNavigation = Vue.defineComponent({
  setup() {
    return {
      State_App
    };
  },
  computed: {
    breadcrumbItems() {
      return _global__.map(this.State_App.user.breadcrumb, (item, index) => {
        if (item.href) {
          return Vue.createVNode(Vue.resolveComponent("aBreadcrumbItem"), {
            "key": index
          }, {
            default: () => [Vue.createVNode(Vue.resolveComponent("RouterLink"), {
              "to": item.href
            }, {
              default: () => [item.name]
            })]
          });
        } else {
          return Vue.createVNode(Vue.resolveComponent("aBreadcrumbItem"), {
            "key": index
          }, {
            default: () => [item.name]
          });
        }
      });
    }
  },
  render() {
    return Vue.createVNode("div", {
      "class": "breadcrumb-container"
    }, [Vue.createVNode(Vue.resolveComponent("aBreadcrumb"), null, {
      default: () => [this.breadcrumbItems]
    })]);
  }
});
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !Vue.isVNode(s);
}
Vue.createVNode("div", {
  "class": "title-container"
}, [Vue.createVNode("h3", {
  "class": "title"
}, [Vue.createVNode(Vue.resolveComponent("LazySvg"), {
  "icon": "star"
}, null), Vue.createTextVNode("\u5173\u6CE8")]), Vue.createVNode("p", null, [Vue.createTextVNode("\u8FD9\u91CC\u662F\u4F60\u7684\u4E13\u5C5E\u6536\u85CF\u5939\uFF0C\u4FBF\u4E8E\u4F60\u627E\u5230\u81EA\u5DF1\u7684\u9879\u76EE")])]);
Vue.createVNode("div", {
  "class": "title-container"
}, [Vue.createVNode("h3", {
  "class": "title"
}, [Vue.createVNode(Vue.resolveComponent("LazySvg"), {
  "icon": "plus-circle"
}, null), Vue.createTextVNode("\u65B0\u5EFA\u9879\u76EE")]), Vue.createVNode("p", null, [Vue.createTextVNode("\u5728\u4EFB\u4F55\u9875\u9762\u90FD\u53EF\u4EE5\u5FEB\u901F\u65B0\u5EFA\u9879\u76EE")])]);
Vue.createVNode("div", {
  "class": "title-container"
}, [Vue.createVNode("h3", {
  "class": "title"
}, [Vue.createTextVNode("\u4F7F\u7528\u6587\u6863 "), Vue.createVNode(Vue.resolveComponent("aTag"), {
  "color": "orange"
}, {
  default: () => [Vue.createTextVNode("\u63A8\u8350!")]
})]), Vue.createVNode("p", null, [Vue.createTextVNode("\u521D\u6B21\u4F7F\u7528 YApi\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u4F60\u9605\u8BFB"), " ", Vue.createVNode("a", {
  "target": "_blank",
  "href": "https://hellosean1025.github.io/yapi/",
  "rel": "noopener noreferrer"
}, [Vue.createTextVNode("\u4F7F\u7528\u6587\u6863")]), Vue.createTextVNode("\uFF0C\u6211\u4EEC\u4E3A\u4F60\u63D0\u4F9B\u4E86\u901A\u4FD7\u6613\u61C2\u7684\u5FEB\u901F\u5165\u95E8\u6559\u7A0B\uFF0C\u66F4\u6709\u8BE6\u7EC6\u7684\u4F7F\u7528\u8BF4\u660E\uFF0C\u6B22\u8FCE\u9605\u8BFB\uFF01"), " "])]);
var Header = Vue.defineComponent({
  props: ["router", "user", "msg", "uid", "role", "login", "relieveLink", "logoutActions", "loginTypeAction", "changeMenuItem", "history", "location", "study", "studyTip", "imageUrl"],
  setup() {
    return {
      State_App
    };
  },
  methods: {
    setBreadcrumb() {
      Methods_App.setBreadcrumb([]);
    },
    linkTo(e) {
      if (e.key != "/doc") {
        this.props.changeMenuItem(e.key);
        if (!this.props.login) {
          UI.notification.info("\u8BF7\u5148\u767B\u5F55");
        }
      }
    },
    relieveLink() {
      this.props.changeMenuItem("");
    },
    handleLogin(e) {
      e.preventDefault();
      this.props.loginTypeAction("1");
    },
    handleReg(e) {
      e.preventDefault();
      this.props.loginTypeAction("2");
    }
  },
  computed: {
    ToolUser() {
      let {
        imageUrl,
        uid,
        groupList,
        study,
        studyTip,
        user: user2,
        msg,
        role,
        logout,
        isLogin
      } = this.State_App.user;
      if (!isLogin) {
        return null;
      }
      imageUrl = imageUrl ? imageUrl : `/api/user/avatar?uid=${uid}`;
      const items = [{
        content: "\u6211\u7684\u5173\u6CE8",
        path: "/follow",
        icon: "star"
      }, {
        content: "\u65B0\u5EFA\u9879\u76EE",
        path: "/follow",
        icon: "add"
      }, {
        content: "\u4F7F\u7528\u6587\u6863",
        href: "https://hellosean1025.github.io/yapi",
        icon: "question"
      }].map((i) => {
        let link = null;
        const iconStyle = {
          fontSize: 16,
          color: "white"
        };
        if (i.path) {
          link = Vue.createVNode(Vue.resolveComponent("RouterLink"), {
            "to": i.path
          }, {
            default: () => [Vue.createVNode(Vue.resolveComponent("LazySvg"), {
              "icon": i.icon,
              "style": iconStyle
            }, null)]
          });
        }
        if (i.href) {
          link = Vue.createVNode("a", {
            "target": "_blank",
            "href": i.href,
            "rel": "noopener noreferrer"
          }, [Vue.createVNode(Vue.resolveComponent("LazySvg"), {
            "icon": i.icon,
            "style": iconStyle
          }, null)]);
        }
        return Vue.withDirectives(Vue.createVNode("div", {
          "class": "toolbar-li"
        }, [link]), [[Vue.resolveDirective("uiPopover"), {
          content: i.content
        }]]);
      });
      const avatarUrl = imageUrl ? imageUrl : `/api/user/avatar?uid=${uid}`;
      return Vue.createVNode("div", {
        "class": "user-toolbar flex"
      }, [Vue.createVNode("div", {
        "class": "toolbar-li item-search"
      }, [Vue.createVNode(Srch, {
        "groupList": groupList
      }, null)]), items, Vue.createVNode("div", {
        "class": "toolbar-li"
      }, [Vue.createVNode(Vue.resolveComponent("aDropdown"), {
        "trigger": ["click"]
      }, {
        default: () => Vue.createVNode("a", {
          "class": "dropdown-link"
        }, [Vue.createVNode(Vue.resolveComponent("aAvatar"), {
          "src": avatarUrl
        }, null)]),
        overlay: () => this.MenuUser
      })])]);
    },
    MenuUser() {
      let _slot;
      const {
        uid,
        role
      } = this.State_App.user;
      return Vue.createVNode(Vue.resolveComponent("aMenu"), {
        "class": "user-menu",
        "onClick": ({
          key
        }) => {
          if (key === "logout") {
            Methods_App.logoutActions();
          }
        }
      }, _isSlot(_slot = _global__.map({
        user: {
          path: `/user/profile/${uid}`,
          name: "\u4E2A\u4EBA\u4E2D\u5FC3",
          icon: "user",
          adminFlag: false
        },
        solution: {
          path: "/user/list",
          name: "\u7528\u6237\u7BA1\u7406",
          icon: "solution",
          adminFlag: true
        },
        logout: {
          name: "\u9000\u51FA",
          icon: "logout"
        }
      }, (item, key) => {
        const isAdmin = role === "admin";
        if (item.adminFlag && !isAdmin) {
          return null;
        }
        const menuContent = Vue.createVNode(Vue.Fragment, null, [Vue.createVNode(Vue.resolveComponent("LazySvg"), {
          "icon": item.icon
        }, null), Vue.createVNode("span", {
          "class": "ml4"
        }, [item.name])]);
        let menuLink = Vue.createVNode(Vue.resolveComponent("RouterLink"), {
          "to": item.path || "",
          "class": "flex horizon"
        }, _isSlot(menuContent) ? menuContent : {
          default: () => [menuContent]
        });
        if (key === "logout") {
          Vue.createVNode("div", {
            "class": "flex horizon"
          }, [menuContent]);
        }
        return Vue.createVNode(Vue.resolveComponent("aMenuItem"), {
          "key": key
        }, _isSlot(menuLink) ? menuLink : {
          default: () => [menuLink]
        });
      })) ? _slot : {
        default: () => [_slot]
      });
    }
  },
  render() {
    return Vue.createVNode(Vue.resolveComponent("aLayoutHeader"), {
      "class": "header-box m-header elevation-4"
    }, {
      default: () => [Vue.createVNode("div", {
        "class": "content g-row flex middle"
      }, [Vue.createVNode("span", {
        "onClick": this.setBreadcrumb
      }, [Vue.createVNode(Vue.resolveComponent("RouterLink"), {
        "to": "/",
        "class": "flex"
      }, {
        default: () => [Vue.createVNode(LogoSVG, {
          "length": "32px"
        }, null)]
      })]), Vue.createVNode(BreadcrumbNavigation, null, null), Vue.createVNode("span", {
        "class": "flex1"
      }, null), this.ToolUser])]
    });
  }
});
var App_less_vue_type_style_index_0_src_lang = "";
var Home_scss_vue_type_style_index_1_src_lang = "";
const _sfc_main = Vue.defineComponent({
  components: { Footer: _sfc_main$1, Header },
  setup() {
    return {
      State_App
    };
  },
  data() {
    return {
      isLoading: true
    };
  },
  async mounted() {
    this.isLoading = false;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Header = Vue.resolveComponent("Header");
  const _component_RouterView = Vue.resolveComponent("RouterView");
  const _component_Footer = Vue.resolveComponent("Footer");
  const _directive_loading = Vue.resolveDirective("loading");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    _ctx.State_App.user.loginState !== 1 ? (Vue.openBlock(), Vue.createBlock(_component_Header, { key: 0 })) : Vue.createCommentVNode("", true),
    Vue.withDirectives(Vue.createVNode(_component_RouterView, null, null, 512), [
      [_directive_loading, _ctx.isLoading]
    ]),
    Vue.createVNode(_component_Footer)
  ], 64);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var LazySvg$1 = "";
const icons = { "../../assets/svg/add.svg": () => true ? __vitePreload(() => import("./add.js"), []) : null, "../../assets/svg/addGroup.svg": () => true ? __vitePreload(() => import("./addGroup.js"), []) : null, "../../assets/svg/feedback.svg": () => true ? __vitePreload(() => import("./feedback.js"), []) : null, "../../assets/svg/folderOpen.svg": () => true ? __vitePreload(() => import("./folderOpen.js"), []) : null, "../../assets/svg/github.svg": () => true ? __vitePreload(() => import("./github.js"), []) : null, "../../assets/svg/lockStrok.svg": () => true ? __vitePreload(() => import("./lockStrok2.js"), []) : null, "../../assets/svg/logout.svg": () => true ? __vitePreload(() => import("./logout2.js"), []) : null, "../../assets/svg/mail.svg": () => true ? __vitePreload(() => import("./mail2.js"), []) : null, "../../assets/svg/mobile.svg": () => true ? __vitePreload(() => import("./mobile2.js"), []) : null, "../../assets/svg/question.svg": () => true ? __vitePreload(() => import("./question.js"), []) : null, "../../assets/svg/search.svg": () => true ? __vitePreload(() => import("./search.js"), []) : null, "../../assets/svg/solution.svg": () => true ? __vitePreload(() => import("./solution.js"), []) : null, "../../assets/svg/star.svg": () => true ? __vitePreload(() => import("./star.js"), []) : null, "../../assets/svg/team.svg": () => true ? __vitePreload(() => import("./team.js"), []) : null, "../../assets/svg/unlock.svg": () => true ? __vitePreload(() => import("./unlock.js"), []) : null, "../../assets/svg/user.svg": () => true ? __vitePreload(() => import("./user2.js"), []) : null };
const modules = {};
each(icons, (icon, path) => {
  const prop = path.replace(/(.*)\/(.*)\.svg$/g, (match, p1, p2) => `${p2}`);
  modules[prop] = icon;
});
const ICON_STRING_CACHE = {};
var LazySvg = Vue.defineComponent(Vue.markRaw({
  props: ["icon"],
  data() {
    const id = "lazy-svg_" + this._.uid;
    return {
      id
    };
  },
  async mounted() {
    const targetDom = document.getElementById(this.id);
    let iconSvgString = ICON_STRING_CACHE[this.icon];
    if (!iconSvgString) {
      const getComponent = modules[this.icon];
      if (isFunction_1(getComponent)) {
        const {
          default: iconString
        } = await getComponent();
        ICON_STRING_CACHE[this.icon] = iconSvgString = iconString;
      }
    }
    if (iconSvgString) {
      const $svg = $(iconSvgString).css("height", "100%").css("width", "100%");
      if (targetDom) {
        setTimeout(() => {
          targetDom.innerHTML = $svg[0].outerHTML;
        }, 30);
      }
    }
  },
  render(h) {
    return Vue.createVNode("div", {
      "id": this.id
    }, [Vue.createVNode("div", {
      "class": "next-loading next-open next-loading-inline",
      "style": "width:100%;height:100%;overflow:hidden"
    }, [Vue.createVNode("div", {
      "class": "next-loading-tip"
    }, [Vue.createVNode("div", {
      "class": "next-loading-indicator"
    }, null)]), Vue.createVNode("div", {
      "class": "next-loading-component next-loading-wrap"
    }, [Vue.createVNode("div", {
      "class": "next-loading-masker"
    }, null), Vue.createVNode("div", {
      "class": "demo-basic"
    }, [Vue.createVNode(LoadingOutlined, null, null)])])])]);
  }
}));
dayjs.locale("zh-cn");
const appPlugins = {
  install: (app, options) => {
    app.use(VentoseUIWithInstall, {
      appPlugins,
      dependState: options.dependState
    });
    app.use({
      install: (app2, {
        watch
      } = {}) => {
        app2.config.globalProperties.$t = State_UI.$t;
        _global_$("html").attr("lang", State_UI.language);
        watch && watch();
      }
    });
    app.use(router);
    app.component("LazySvg", LazySvg);
    return app;
  }
};
const pickRandomProperty = (obj) => {
  let result;
  let count = 0;
  for (let prop in obj) {
    if (Math.random() < 1 / ++count) {
      result = prop;
    }
  }
  return result;
};
const handlePath = (path) => {
  path = _global__.trim(path);
  if (!path) {
    return path;
  }
  if (path === "/") {
    return "";
  }
  path = path[0] !== "/" ? "/" + path : path;
  path = path[path.length - 1] === "/" ? path.substr(0, path.length - 1) : path;
  return path;
};
async function main() {
  Vue.createApp(App).use(appPlugins, {
    dependState: State_App
  }).mount("#app");
}
main();
export { API as A, LogoSVG as L, Methods_App as M, State_App as S, LazySvg as a, handlePath as h, pickRandomProperty as p, router as r };
