import { c as _global_$, U as UI, b as _global__, a as _export_sfc, _ as __vitePreload, N as NProgress, s as setDocumentTitle, S as State_UI, e as each, i as isFunction_1, L as LoadingOutlined, d as dayjs, V as VentoseUIWithInstall } from "./each.js";
var Footer = /* @__PURE__ */ (() => '@charset "UTF-8";\nhtml {\n  font-size: 100px;\n}\nhtml, body {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n::selection {\n  background-color: #2395f1;\n}\n/* \u8BBE\u7F6E\u6EDA\u52A8\u6761\u7684\u6837\u5F0F */\n::-webkit-scrollbar {\n  width: 6px;\n}\n/* \u5916\u5C42\u8F68\u9053 */\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset006pxrgba(255, 0, 0, 0.3);\n  background: rgba(255, 255, 255, 0.1);\n}\n/* \u6EDA\u52A8\u6761\u6ED1\u5757 */\n::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);\n}\n::-webkit-scrollbar-thumb:window-inactive {\n  background: rgba(0, 0, 0, 0.2);\n}\ndiv, article, p, table, tr, td, th, ul, ol, li, h1, h2, h3, form, dl, dt, dd {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nul {\n  list-style-type: none;\n}\na {\n  text-decoration: none;\n}\na:active, a:hover, a:visited, a:focus {\n  text-decoration: none;\n}\na:hover {\n  color: #636363;\n}\nem {\n  font-style: normal;\n}\n[data-reactroot], .g-main, .router-main {\n  height: 100%;\n}\n.router-main {\n  padding-bottom: 0.24rem;\n  min-height: 100%;\n  height: auto !important;\n  height: 100%;\n  margin-bottom: -2.4rem;\n  background-color: #eceef1;\n}\n.router-main::after {\n  content: "";\n  display: block;\n  height: 2.4rem;\n}\n.m-tab .ant-tabs-nav-wrap {\n  background-color: #eceef1;\n}\n.hidden {\n  display: none;\n}\n.g-row {\n  min-width: 7.52rem;\n  margin: 0 auto;\n  padding: 0 0.24rem;\n}\n.m-container {\n  margin: 0.24rem auto;\n  padding: 0.24rem;\n}\n.ant-dropdown .user-menu {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);\n}\n.ant-confirm .ant-modal-body {\n  padding: 0.24rem !important;\n}\n.card-panel {\n  padding: 0.36rem 0.24rem 0;\n}\n.pannel-without-tab {\n  min-height: 5rem;\n}\n.panel-title {\n  margin-bottom: 0.16rem;\n  border-left: 3px solid #2395f1;\n  padding-left: 8px;\n}\n.panel-title .title {\n  font-weight: normal;\n}\n.panel-title .desc {\n  font-size: 13px;\n  color: #919191;\n}\n/* \n@media (max-width: 768px) {\n  html {\n    width: min-content !important;\n  }\n} */\n.tag-status::before {\n  content: "";\n  display: inline-block;\n  margin-right: 6px;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  position: relative;\n  bottom: 1px;\n}\n.tag-status.done::before {\n  background-color: #57cf27;\n}\n.tag-status.undone::before {\n  background-color: #ff561b;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {\n  border: none;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {\n  border: none;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-content {\n  margin-top: -1px;\n}\n.tabs-large .ant-tabs-nav-container {\n  font-size: 16px;\n}\n.ant-tree li .ant-tree-node-content-wrapper {\n  padding: 3px 5px;\n  height: unset;\n}\n.ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {\n  background-color: #d5ebfc;\n}\n.popover-index {\n  max-width: 3.2rem;\n}\n.popover-index .ant-popover-title {\n  height: auto;\n}\n.popover-index .title-container {\n  padding: 0.16rem 0;\n}\n.popover-index .title-container .title {\n  text-align: center;\n}\n.popover-index .btn-container {\n  text-align: center;\n}\n.popover-index .btn-container .btn {\n  margin: 0 0.04rem;\n}\n.study-mask {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 2;\n}\n.link-tooltip {\n  color: #56b2fd;\n}\n.link-tooltip:hover {\n  color: #2395f1;\n}\n.footer-wrapper {\n  height: 192px;\n  width: 100%;\n  background-color: #32363a;\n  position: relative;\n  z-index: 0;\n  transition: height 3s ease-in-out;\n}\n.footer-container {\n  margin: 0 auto !important;\n  padding: 0.48rem 0.24rem;\n  max-width: 12.2rem;\n}\n.footer-container .icon {\n  font-size: 0.16rem;\n  margin-right: 0.08rem;\n}\n.footer-container .title {\n  color: #8898aa;\n  font-size: 0.14rem;\n  margin-bottom: 0.08rem;\n}\n.footer-container .link {\n  font-size: 0.14rem;\n  font-weight: 200;\n  color: #8898aa;\n  line-height: 0.3rem;\n  transition: color 0.2s;\n}\n.footer-container .link:hover {\n  color: #ececec;\n}\n.footItem {\n  padding: 24px 2%;\n  width: 25%;\n  float: left;\n}\n.footItem div {\n  margin: 6px 0;\n}\n.footItem a {\n  font-weight: 200;\n  color: #b3bdc1;\n}\n.footItem a:hover {\n  color: white;\n}\n.copyRight {\n  padding: 24px 2%;\n  width: 25%;\n  float: left;\n  font-size: 13px;\n  text-indent: 1em;\n}\n.copyRight h4 {\n  font-size: 14px;\n  margin: 0 auto 13px;\n  font-weight: 500;\n  position: relative;\n  text-indent: 0;\n}')();
function _isSlot(s) {
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
    }, _isSlot(_slot = this.footList.map((item, i) => {
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
const ajax = axios.create({
  timeout: 2e4
});
ajax.interceptors.request.use((config) => {
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
  regActions(data) {
    return ajax({
      method: "post",
      url: "/api/user/reg",
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
  getGroupAuth(groupId) {
    return ajax({
      method: "get",
      url: "/api/group/get",
      params: {
        id: groupId
      }
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
  news
};
const State_App = Vue.reactive({
  user: {
    loginWrapActiveKey: "",
    canRegister: true,
    isLDAP: true,
    isLogin: false,
    role: {}
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
const GUEST_STATUS = 1;
const MEMBER_STATUS = 2;
const Actions_App = {
  setUser(user2) {
    State_App.user = _global__.merge({}, State_App.user, user2);
  },
  setNews(news2) {
    State_App.news = _global__.merge({}, State_App.news, news2);
  }
};
const Mutations_App = {
  async checkLoginState() {
    const {
      data,
      response
    } = await API.user.getUserStatus();
    Actions_App.setUser({
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
  },
  async setCurrGroup(groupIdOrObject) {
    if (!_global__.isPlainObject(groupIdOrObject)) {
      const {
        data
      } = await API.group.getMyGroupBy(groupIdOrObject);
      groupIdOrObject = data;
    }
    State_App.currGroup = _global__.merge({}, State_App.currGroup, groupIdOrObject);
  },
  async fetchGroupList() {
    const {
      data: groupList
    } = await API.group.getMyGroupList();
    State_App.groupList = groupList;
  },
  async fetchGroupMsg(groupId) {
    const {
      data
    } = await API.group.getGroupAuth(groupId);
    await Mutations_App.setCurrGroup(data);
    Actions_App.setUser({
      role: data.role,
      field: {
        name: data.custom_field1.name,
        enable: data.custom_field1.enable
      }
    });
  },
  async fetchNewsData(typeid, type, page, limit, selectValue) {
    const {
      data
    } = await API.news.getLogList({
      typeid,
      type,
      page,
      limit,
      selectValue
    });
    Actions_App.setNews({
      curpage: 1,
      newsData: {
        total: data.total,
        list: _global__.sortBy(data.list, function(a, b) {
          return b.add_time - a.add_time;
        })
      }
    });
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
  async setBreadcrumb() {
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
  changeStudyTip() {
  },
  finishStudy() {
  }
};
var App_less_vue_type_style_index_0_src_lang = /* @__PURE__ */ (() => 'html,\nbody,\n#app {\n  height: 100%;\n  overflow: hidden;\n}\n.flex {\n  display: flex;\n}\n.flex1 {\n  flex: 1;\n}\n.flex2 {\n  flex: 2;\n}\n.flex3 {\n  flex: 3;\n}\n.flex4 {\n  flex: 4;\n}\n.flex5 {\n  flex: 5;\n}\n.flex025 {\n  flex: 0 0 25%;\n}\n.flex024 {\n  flex: 0 0 24%;\n}\n.flex.vertical {\n  flex-flow: column nowrap;\n}\n.flex.like-float {\n  flex-flow: row wrap;\n}\n.flex.like-float .el-button + .el-button {\n  margin-left: 0;\n}\n.flex.between {\n  justify-content: space-between;\n}\n.flex.start {\n  justify-content: flex-start;\n}\n.flex.end {\n  justify-content: flex-end;\n}\n.flex.center {\n  justify-content: center;\n}\n.flex.middle {\n  align-items: center;\n}\n.flex.baseline {\n  align-items: baseline;\n}\n.width100 {\n  width: 100%;\n}\n.height100 {\n  height: 100%;\n}\n.width50 {\n  width: 50px;\n}\n.width70 {\n  width: 70px;\n}\n.width80 {\n  width: 80px;\n}\n.width120 {\n  width: 120px;\n}\n.width150 {\n  width: 150px;\n}\n.width180 {\n  width: 180px;\n}\n.width240 {\n  width: 240px !important;\n}\n.width360 {\n  width: 360px;\n}\n.width501 {\n  width: 50%;\n}\n/* gap-gap-gap-gap-gap */\n.mt5 {\n  margin-top: 5px;\n}\n.pt5 {\n  padding-top: 5px;\n}\n.mr5 {\n  margin-right: 5px;\n}\n.pr5 {\n  padding-right: 5px;\n}\n.mb5 {\n  margin-bottom: 5px;\n}\n.pb5 {\n  padding-bottom: 5px;\n}\n.ml5 {\n  margin-left: 5px;\n}\n.pl5 {\n  padding-left: 5px;\n}\n.mt8 {\n  margin-top: 8px;\n}\n.pt8 {\n  padding-top: 8px;\n}\n.mr8 {\n  margin-right: 8px;\n}\n.pr8 {\n  padding-right: 8px;\n}\n.mb8 {\n  margin-bottom: 8px;\n}\n.pb8 {\n  padding-bottom: 8px;\n}\n.ml8 {\n  margin-left: 8px;\n}\n.pl8 {\n  padding-left: 8px;\n}\n.mt10 {\n  margin-top: 10px;\n}\n.pt10 {\n  padding-top: 10px;\n}\n.mr10 {\n  margin-right: 10px;\n}\n.pr10 {\n  padding-right: 10px;\n}\n.mb10 {\n  margin-bottom: 10px;\n}\n.pb10 {\n  padding-bottom: 10px;\n}\n.ml10 {\n  margin-left: 10px;\n}\n.pl10 {\n  padding-left: 10px;\n}\n.mt20 {\n  margin-top: 20px;\n}\n.pt20 {\n  padding-top: 20px;\n}\n.mr20 {\n  margin-right: 20px;\n}\n.pr20 {\n  padding-right: 20px;\n}\n.mb20 {\n  margin-bottom: 20px;\n}\n.pb20 {\n  padding-bottom: 20px;\n}\n.ml20 {\n  margin-left: 20px;\n}\n.pl20 {\n  padding-left: 20px;\n}\n/* gap-gap-gap-gap-gap */\n.tr {\n  text-align: right;\n}\n.mlt {\n  margin-left: 10px;\n  margin-top: 10px;\n}\n.grid {\n  display: grid;\n}\n.grid.col1 {\n  grid-template-columns: repeat(1, 1fr);\n}\n.grid.col2 {\n  grid-template-columns: repeat(2, 1fr);\n}\n.grid.col3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n.grid.col4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n.grid.col5 {\n  grid-template-columns: repeat(5, 1fr);\n}\n.grid.col11 {\n  grid-template-columns: 1fr 1fr;\n}\n.grid.col12 {\n  grid-template-columns: 1fr 2fr;\n}\n.grid.col211 {\n  grid-template-columns: 2fr 1fr 1fr;\n}\n.grid.row11 {\n  grid-template-rows: 1fr 1fr;\n}\n.grid.row45 {\n  grid-template-rows: 4fr 5fr;\n}\n.grid.gap16 {\n  grid-row-gap: 16px;\n  grid-column-gap: 16px;\n}\n.gap16 {\n  grid-row-gap: 16px;\n  grid-column-gap: 16px;\n}\n.grid-column-gap15 {\n  grid-column-gap: 15px;\n}\n.grid-row-gap20 {\n  grid-row-gap: 20px;\n}\n.gridcol1 {\n  grid-template-columns: repeat(1, 1fr);\n}\n.gridcol2 {\n  grid-template-columns: repeat(2, 1fr);\n}\n.gridcol3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n.gridcol4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n.gridcol5 {\n  grid-template-columns: repeat(5, 1fr);\n}\n.grid-response {\n  display: grid;\n  grid-template-columns: repeat(24, 1fr);\n}\n.grid-response .grid-col-1 {\n  grid-column: span 1;\n}\n.grid-response .grid-col-2 {\n  grid-column: span 2;\n}\n.grid-response .grid-col-3 {\n  grid-column: span 3;\n}\n.grid-response .grid-col-4 {\n  grid-column: span 4;\n}\n.grid-response .grid-col-5 {\n  grid-column: span 5;\n}\n.grid-response .grid-col-6 {\n  grid-column: span 6;\n}\n.grid-response .grid-col-7 {\n  grid-column: span 7;\n}\n.grid-response .grid-col-8 {\n  grid-column: span 8;\n}\n.grid-response .grid-col-9 {\n  grid-column: span 9;\n}\n.grid-response .grid-col-10 {\n  grid-column: span 10;\n}\n.grid-response .grid-col-11 {\n  grid-column: span 11;\n}\n.grid-response .grid-col-12 {\n  grid-column: span 12;\n}\n.grid-response .grid-col-13 {\n  grid-column: span 13;\n}\n.grid-response .grid-col-14 {\n  grid-column: span 14;\n}\n.grid-response .grid-col-15 {\n  grid-column: span 15;\n}\n.grid-response .grid-col-16 {\n  grid-column: span 16;\n}\n.grid-response .grid-col-17 {\n  grid-column: span 17;\n}\n.grid-response .grid-col-18 {\n  grid-column: span 18;\n}\n.grid-response .grid-col-19 {\n  grid-column: span 19;\n}\n.grid-response .grid-col-20 {\n  grid-column: span 20;\n}\n.grid-response .grid-col-21 {\n  grid-column: span 21;\n}\n.grid-response .grid-col-22 {\n  grid-column: span 22;\n}\n.grid-response .grid-col-23 {\n  grid-column: span 23;\n}\n.grid-response .grid-col-24 {\n  grid-column: span 24;\n}\n.ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.flexWrap {\n  flex-wrap: wrap;\n}\n/* \u7F8E\u5316\u6ED1\u52A8\u6761 */\n.beautiful-scroll::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background-color: white;\n  /* or add it to the track */\n}\n.beautiful-scroll::-webkit-scrollbar-thumb {\n  background: rgba(144, 147, 153, 0.5);\n  border-radius: 4px;\n  border: 1px solid white;\n}\n.ant-descriptions.customer .ant-descriptions-header .ant-descriptions-title {\n  font-size: 16px;\n  font-weight: 400;\n  position: relative;\n  padding-left: 8px;\n}\n.ant-descriptions.customer .ant-descriptions-header .ant-descriptions-title::after {\n  position: absolute;\n  top: 20%;\n  left: 0;\n  bottom: 20%;\n  border-left: 3px solid #1890ff;\n  opacity: 1;\n  transition: transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n  content: "";\n}\n.ant-descriptions.customer .ant-descriptions-view {\n  margin: 0 10px;\n}\n/* \u53D8\u91CF\u5728configs.jsx\u4E2D\uFF0Cless \u6837\u5F0F\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528webpack \u6253\u5305\u4E0D\u540C\u4E3B\u9898 */\n')();
var Home_scss_vue_type_style_index_1_src_lang = /* @__PURE__ */ (() => ".g-body {\n  position: relative;\n}\n.home-header {\n  font-size: 0;\n}\n.home-header .item {\n  text-decoration: none;\n  display: inline-block;\n  color: #fff;\n  font-size: 0.17rem;\n  padding: 0.16rem 0.24rem;\n  -webkit-font-smoothing: antialiased;\n}\n.home-header .item:hover {\n  color: #27cdfd;\n}\n.btn-group {\n  padding: 0.3rem 0.24rem;\n}\n.btn-group .btn-home {\n  font-size: 0.15rem;\n  font-weight: 200;\n  letter-spacing: 1px;\n  border: none;\n  line-height: 0.4rem;\n  height: 0.4rem;\n  padding: 0 0.24rem;\n  margin-right: 0.24rem;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n  transform: translateY(0);\n  transition: all 0.2s;\n}\n.btn-group .btn-home:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n}\n.btn-group .btn-home:active {\n  transform: translateY(1px);\n}\n.btn-group .btn-login {\n  background-color: #32325d;\n}\n.btn-group .btn-login:hover {\n  background-color: #43459a;\n}\n.btn-group .btn-login:active, .btn-group .btn-login:focus {\n  color: #e6ebf1;\n  background-color: #32325d;\n}\n.btn-group .btn-home-normal {\n  border-radius: 4px;\n  color: #43459a;\n  background-color: #fff;\n  cursor: pointer;\n}\n.btn-group .btn-home-normal:hover {\n  color: #7795f8;\n}\n.btn-group .btn-home-normal:hover, .btn-group .btn-home-normal:focus {\n  background-color: #f6f9fc;\n}\n.m-bg {\n  position: absolute;\n  left: 0;\n  top: -400px;\n  height: 1000px;\n  width: 100%;\n  transform: skewY(-11deg);\n  background-image: linear-gradient(-20deg, #21d4fd 0%, #b721ff 100%);\n}\n.m-bg .m-bg-mask {\n  position: absolute;\n  height: 180px;\n}\n.m-bg .m-bg-mask0 {\n  bottom: 0;\n  left: 0;\n  width: 30%;\n  background-image: linear-gradient(120deg, #6ab3fd 0%, #8ba3fd 102%);\n}\n.m-bg .m-bg-mask1 {\n  bottom: 180px;\n  right: 0;\n  width: 36%;\n  background-image: linear-gradient(120deg, #28c5f5 0%, #6682fe 100%);\n}\n.m-bg .m-bg-mask2 {\n  bottom: 540px;\n  left: 0;\n  width: 20%;\n  height: 240px;\n  background-image: linear-gradient(120deg, #8121ff 0%, #5e5ef7 100%);\n}\n.m-bg .m-bg-mask3 {\n  bottom: 540px;\n  left: 20%;\n  width: 70%;\n  height: 240px;\n  background-image: linear-gradient(-225deg, #5f2bff 0%, #6088fe 48%, #22ccf6 100%);\n}\n.home-main {\n  background-color: #fff;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n.home-main .main-one {\n  height: 600px;\n}\n.home-main .main-one .home-des {\n  padding: 1rem 0 0;\n  color: #fff;\n}\n.home-main .main-one .home-des .title {\n  font-size: 0.6rem;\n}\n.home-main .main-one .home-des .detail {\n  font-size: 0.2rem;\n}\n.home-main .main-one .home-des .logo {\n  display: flex;\n  align-items: center;\n  padding: 0 0.24rem;\n}\n.home-main .main-one .home-des .svg {\n  animation: spin 5s linear infinite;\n}\n.home-main .main-one .home-des .name {\n  vertical-align: middle;\n  font-size: 0.48rem;\n  margin-left: 0.24rem;\n  font-weight: 200;\n}\n.home-main .main-one .home-des .detail {\n  padding: 0.24rem;\n  font-size: 0.24rem;\n  font-weight: 200;\n}\n.home-main .main-one .home-des .desc {\n  font-size: 0.18rem;\n}\n.home-main .main-one .login-form {\n  color: #fff;\n}\n.home-main .main-one .main-one-left {\n  padding-right: 0.15rem;\n  margin-top: 0.2rem;\n}\n.home-main .main-one .main-one-right {\n  padding-left: 0.5rem;\n  padding-top: 0.3rem;\n}\n.home-main .user-home {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  margin: 1rem auto 0;\n}\n.home-main .user-home .user-des {\n  margin: 0 auto 0.5rem;\n  text-align: center;\n}\n.home-main .user-home .user-des .title {\n  font-size: 0.8rem;\n  margin-bottom: 0.2rem;\n}\n.home-main .user-home .user-des .des {\n  font-size: 0.25rem;\n  margin-bottom: 0.3rem;\n}\n.home-main .user-home .user-des .btn button {\n  font-size: 0.2rem;\n  line-height: 0.2rem;\n  height: 0.5rem;\n  padding: 0.15rem 0.5rem;\n}\n.home-main .main-part {\n  padding: 1.5rem 0;\n  height: 5.8rem;\n}\n.home-main .main-part:nth-child(odd) {\n  background-color: #f1f5ff;\n}\n.home-main .main-part:nth-child(even) {\n  background-color: #fff;\n}\n.home-main .feat-part {\n  padding: 1.5rem 0;\n  background-color: #fff;\n}\n.home-main .section-feature {\n  min-height: 6rem;\n}\n.home-main .container {\n  margin: 0 auto;\n  height: 100%;\n  position: relative;\n  max-width: 12.2rem;\n}\n.home-main .feat-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.home-main .feat-wrapper .feat-img {\n  height: 1.2rem;\n  width: 1.2rem;\n  border-radius: 100%;\n  margin-bottom: 0.2rem;\n  color: #fff;\n}\n.home-main .feat-wrapper .feat-img i {\n  line-height: 1.2rem;\n  font-size: 0.6rem;\n}\n.home-main .feat-wrapper .feat-title {\n  font-size: 0.16rem;\n  line-height: 0.3rem;\n}\n.home-main .feat-wrapper:first-child .feat-img {\n  background-color: rgb(248, 88, 96);\n}\n.home-main .feat-wrapper:nth-child(2) .feat-img {\n  background-color: #f9bb13;\n}\n.home-main .feat-wrapper:nth-child(3) .feat-img {\n  background-color: #20ab8e;\n}\n.home-main .feat-wrapper:nth-child(4) .feat-img {\n  background-color: rgb(66, 165, 245);\n}\n.home-main .img-container {\n  width: 100%;\n  position: absolute;\n  top: 0.74rem;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: right;\n}\n.home-main .img-container .img {\n  width: 7.12rem;\n  border-radius: 4px;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);\n}\n.home-main .m-skew {\n  position: relative;\n}\n.home-main .m-skew .skew-container {\n  padding: 0 1rem;\n}\n.home-main .m-skew .m-skew-bg {\n  position: absolute;\n  left: 0;\n  top: 5%;\n  height: 600px;\n  width: 100%;\n  transform: skewY(-11deg);\n  background-image: linear-gradient(180deg, #93a5cf 0%, #e4efe9 100%);\n}\n.home-main .m-skew .m-skew-bg .m-bg-mask {\n  position: absolute;\n  height: 200px;\n}\n.home-main .m-skew .m-skew-bg .m-bg-mask0 {\n  bottom: 0;\n  left: 0;\n  width: 30%;\n  background-image: linear-gradient(120deg, #6ab3fd 0%, #c1cfde 102%);\n}\n.home-main .m-skew .m-skew-bg .m-bg-mask1 {\n  bottom: 200px;\n  right: 0;\n  width: 36%;\n  background-image: linear-gradient(219deg, #84a1ce 0%, #e4efe9 100%);\n}\n.home-main .m-skew .m-skew-bg .m-bg-mask2 {\n  top: 0;\n  left: 0;\n  width: 30%;\n  background-image: linear-gradient(219deg, #93a5cf 0%, #d7e3e5 100%);\n}\n.home-section {\n  text-align: center;\n  -webkit-font-smoothing: antialiased;\n}\n.home-section .title {\n  color: #2e2e5a;\n  line-height: 0.32rem;\n  margin-bottom: 0.08rem;\n  font-size: 0.24rem;\n}\n.home-section .desc {\n  color: #6d7c90;\n  font-size: 0.16rem;\n}\n.home-section .section-item {\n  text-align: left;\n  padding: 0.24rem;\n}\n.home-section .section-item .img {\n  width: 0.48rem;\n  height: 0.48rem;\n  background-image: linear-gradient(-20deg, #21d4fd 0%, #b721ff 100%);\n  border-radius: 50%;\n  text-align: center;\n  line-height: 0.48rem;\n  font-size: 0.24rem;\n  color: #fff;\n  margin-bottom: 0.24rem;\n}\n.home-section .section-item .title {\n  color: #2e2e5a;\n  font-size: 0.2rem;\n}\n.home-section .section-item .desc {\n  color: #6d7c90;\n  font-size: 0.16rem;\n}\n.home-section .row-card {\n  margin-top: 0.48rem;\n  padding: 0 0.24rem;\n}\n.home-section .section-card {\n  padding-bottom: 1rem;\n  padding: 0.08rem;\n}\n.home-section .section-card .ant-card {\n  font-size: 0.17rem;\n  border-radius: 0.04rem;\n  box-shadow: 0 16px 35px rgba(50, 50, 93, 0.1), 0 5px 16px rgba(0, 0, 0, 0.07);\n  border: none;\n}\n.home-section .section-card .ant-card:not(.ant-card-no-hovering):hover {\n  box-shadow: 0 16px 35px rgba(50, 50, 93, 0.1), 0 5px 16px rgba(0, 0, 0, 0.07);\n}\n.home-section .section-card .ant-card-head {\n  background-color: #f7fafc;\n  border-top-left-radius: 0.04rem;\n  border-top-right-radius: 0.04rem;\n}\n.home-section .section-card .ant-card-head-title {\n  font-size: 0.17rem;\n  color: #2e2e5a;\n}\n.home-section .section-card .ant-card-body {\n  text-align: left;\n  padding: 0;\n}\n.home-section .section-card .mock-desc {\n  padding: 0.32rem;\n  min-height: 8em;\n}\n.home-section .code {\n  color: #6d7c90;\n  background-color: #f7fafc;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.home-section .code .orderNum {\n  background-color: #c6e2ff;\n  display: inline-block;\n  text-align: center;\n  width: 0.4rem;\n  margin-right: 0.5em;\n  user-select: none;\n}\n.home-section .code .orderNum-first {\n  padding-top: 0.5em;\n}\n.home-section .code .orderNum-last {\n  border-bottom-left-radius: 4px;\n  padding-bottom: 0.5em;\n}\n.home-section .code .string {\n  color: #ff561b;\n}\n.home-section .code .number {\n  color: #57cf27;\n}\n.home-section .code .keyword {\n  color: #2359f1;\n}\n.home-section .code .item {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.home-section .mock-after .ant-card-head {\n  background-color: #c6e2ff;\n}\n.home-section .mock-after .ant-card-head-title {\n  color: #4074af;\n}\n.section-manage .section-card {\n  padding-top: 0.24rem;\n}\n.section-manage .section-card .ant-card {\n  border-radius: 0.04rem;\n}\n.section-manage .section-card .ant-card-body {\n  padding: 0;\n}\n.section-manage .section-block {\n  padding: 0.24rem;\n}\n.section-manage .section-block .item {\n  font-size: 0.14rem;\n}\n.section-manage .block-first {\n  background-color: #5f48fe;\n  border-top-left-radius: 0.04rem;\n  border-top-right-radius: 0.04rem;\n}\n.section-manage .block-second {\n  background-color: #5f79fe;\n}\n.section-manage .block-third {\n  background-color: #3ab1f9;\n  border-bottom-left-radius: 0.04rem;\n  border-bottom-right-radius: 0.04rem;\n}\n.section-manage .ant-card-body, .section-manage h4 {\n  color: #fff;\n}\n.section-manage .manage-word {\n  text-align: left;\n  padding-left: 0.48rem;\n}\n.section-manage .manage-word .icon {\n  width: 0.72rem;\n  height: 0.72rem;\n  line-height: 0.72rem;\n  text-align: center;\n  background-color: #5f48fe;\n  border-radius: 50%;\n  font-size: 0.4rem;\n  color: #fff;\n  margin-bottom: 0.24rem;\n}\n.section-manage .manage-word .desc {\n  margin-bottom: 0.16rem;\n}\n.row-tip {\n  margin-top: 0.48rem;\n  padding-top: 0.48rem;\n  padding-bottom: 0.24rem;\n  background-color: #ececec;\n}\n.row-tip .container {\n  display: flex;\n  align-items: center;\n  max-width: 12.2rem;\n}\n.row-tip .container .tip-title {\n  flex: 2;\n}\n.row-tip .container .tip-btns {\n  flex: 1;\n}\n.row-tip .btn-group {\n  white-space: nowrap;\n}\n.row-tip .title {\n  -webkit-font-smoothing: antialiased;\n  padding-left: 0.24rem;\n  color: #2e2e5a;\n  line-height: 0.32rem;\n  margin-bottom: 0.08rem;\n  font-size: 0.24rem;\n}\n.row-tip .desc {\n  -webkit-font-smoothing: antialiased;\n  padding-left: 0.24rem;\n  color: #6d7c90;\n  font-size: 0.16rem;\n}\n@keyframes spin {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@media (max-width: 1200px) {\n.home-header, .home-des {\n    text-align: center;\n}\n.home-main .main-one .home-des .logo {\n    justify-content: center;\n}\n}")();
const _sfc_main = Vue.defineComponent({
  components: { Footer: _sfc_main$1 },
  data() {
    return {
      isLoading: true
    };
  },
  async mounted() {
    await Mutations_App.checkLoginState();
    this.isLoading = false;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterView = Vue.resolveComponent("RouterView");
  const _component_Footer = Vue.resolveComponent("Footer");
  const _directive_loading = Vue.resolveDirective("loading");
  return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
    Vue.withDirectives(Vue.createVNode(_component_RouterView, null, null, 512), [
      [_directive_loading, _ctx.isLoading]
    ]),
    Vue.createVNode(_component_Footer)
  ], 64);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const {
  $t
} = State_UI;
const routes = [
  {
    path: "/",
    name: "home",
    component: () => __vitePreload(() => import("./Home.js"), true ? ["statics/js/Home.js","statics/js/index5.js","statics/js/each.js","statics/assets/each.c0d42f81.css"] : void 0)
  },
  {
    path: "/dev",
    name: "home",
    component: () => __vitePreload(() => import("./Dev.js"), true ? ["statics/js/Dev.js","statics/js/GroupList.js","statics/assets/GroupList.e4486c95.css","statics/js/each.js","statics/assets/each.c0d42f81.css","statics/js/common2.js","statics/js/form.js"] : void 0)
  },
  {
    path: `/login`,
    name: "login",
    component: () => __vitePreload(() => import("./LoginContainer.js"), true ? ["statics/js/LoginContainer.js","statics/assets/LoginContainer.85dd3e18.css","statics/js/each.js","statics/assets/each.c0d42f81.css","statics/js/common2.js","statics/js/UserOutlined.js","statics/js/index5.js"] : void 0),
    meta: {
      title: $t("\u7528\u6237\u767B\u5F55").label
    }
  },
  {
    path: `/group`,
    name: "group",
    component: () => __vitePreload(() => import("./Group.js"), true ? ["statics/js/Group.js","statics/assets/Group.357541e4.css","statics/js/GroupList.js","statics/assets/GroupList.e4486c95.css","statics/js/each.js","statics/assets/each.c0d42f81.css","statics/js/common2.js","statics/js/form.js"] : void 0)
  },
  {
    path: `/group/:groupId`,
    name: "groupView",
    component: () => __vitePreload(() => import("./Group.js"), true ? ["statics/js/Group.js","statics/assets/Group.357541e4.css","statics/js/GroupList.js","statics/assets/GroupList.e4486c95.css","statics/js/each.js","statics/assets/each.c0d42f81.css","statics/js/common2.js","statics/js/form.js"] : void 0)
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => __vitePreload(() => import("./NotFound.js"), true ? ["statics/js/NotFound.js","statics/js/router.js","statics/js/each.js","statics/assets/each.c0d42f81.css","statics/js/common2.js","statics/js/UserOutlined.js","statics/js/form.js"] : void 0)
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
var LazySvg$1 = /* @__PURE__ */ (() => 'div[id^="lazy-svg_"] {\n  display: inline-block;\n  width: 16px;\n}\n.next-loading {\n  height: 100%;\n  width: 100%;\n}\n.next-loading.next-open {\n  pointer-events: none;\n}\n.next-loading .next-loading-component {\n  opacity: 0.7;\n  filter: blur(1px);\n  filter: "progid:DXImageTransform.Microsoft.Blur(PixelRadius=1, MakeShadow=false)";\n  position: relative;\n  pointer-events: none;\n}\n.next-loading-masker {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  opacity: 0.2;\n  background: #fff;\n}\n.next-loading-inline {\n  display: inline-block;\n}\n.next-loading-tip {\n  display: block;\n  position: absolute;\n  z-index: 4;\n  text-align: center;\n}\n')();
const icons = { "../../assets/svg/addGroup.svg": () => true ? __vitePreload(() => import("./addGroup.js"), []) : null, "../../assets/svg/feedback.svg": () => true ? __vitePreload(() => import("./feedback.js"), []) : null, "../../assets/svg/folderOpen.svg": () => true ? __vitePreload(() => import("./folderOpen.js"), []) : null, "../../assets/svg/github.svg": () => true ? __vitePreload(() => import("./github.js"), []) : null, "../../assets/svg/lockStrok.svg": () => true ? __vitePreload(() => import("./lockStrok2.js"), []) : null, "../../assets/svg/logout.svg": () => true ? __vitePreload(() => import("./logout2.js"), []) : null, "../../assets/svg/mail.svg": () => true ? __vitePreload(() => import("./mail2.js"), []) : null, "../../assets/svg/mobile.svg": () => true ? __vitePreload(() => import("./mobile2.js"), []) : null, "../../assets/svg/team.svg": () => true ? __vitePreload(() => import("./team.js"), []) : null, "../../assets/svg/user.svg": () => true ? __vitePreload(() => import("./user2.js"), []) : null };
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
async function main() {
  Vue.createApp(App).use(appPlugins, {
    dependState: State_App
  }).mount("#app");
}
main();
export { API as A, Mutations_App as M, State_App as S, router as r };
