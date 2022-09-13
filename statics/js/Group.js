import { G as GroupList } from "./GroupList.js";
import { _ as _global__, x as Modal, e as defItem, v as validateForm, f as AllWasWell, U as UI } from "./nprogress.js";
import { S as State_App, A as API, M as Methods_App, p as pickRandomProperty, h as handlePath, r as router } from "./yapi.js";
import { F as FormRules } from "./FormRules.js";
import { p as pickValueFrom } from "./form.js";
var ProjectCard$1 = "";
var constants = {
  PAGE_LIMIT: 10,
  NAME_LIMIT: 100,
  HTTP_METHOD: {
    GET: {
      request_body: false,
      default_tab: "query"
    },
    POST: {
      request_body: true,
      default_tab: "body"
    },
    PUT: {
      request_body: true,
      default_tab: "body"
    },
    DELETE: {
      request_body: true,
      default_tab: "body"
    },
    HEAD: {
      request_body: false,
      default_tab: "query"
    },
    OPTIONS: {
      request_body: false,
      default_tab: "query"
    },
    PATCH: {
      request_body: true,
      default_tab: "body"
    }
  },
  PROJECT_COLOR: {
    blue: "#2395f1",
    green: "#00a854",
    yellow: "#ffbf00",
    red: "#f56a00",
    pink: "#f5317f",
    cyan: "#00a2ae",
    gray: "#bfbfbf",
    purple: "#7265e6"
  },
  PROJECT_ICON: ["code-o", "swap", "clock-circle-o", "unlock", "calendar", "play-circle-o", "file-text", "desktop", "hdd", "appstore-o", "line-chart", "mail", "mobile", "notification", "picture", "poweroff", "search", "setting", "share-alt", "shopping-cart", "tag-o", "video-camera", "cloud-o", "star-o", "environment-o", "camera-o", "team", "customer-service", "pay-circle-o", "rocket", "database", "tool", "wifi", "idcard", "medicine-box", "coffee", "safety", "global", "api", "fork", "android-o", "apple-o"],
  HTTP_REQUEST_HEADER: ["Accept", "Accept-Charset", "Accept-Encoding", "Accept-Language", "Accept-Datetime", "Authorization", "Cache-Control", "Connection", "Cookie", "Content-Disposition", "Content-Length", "Content-MD5", "Content-Type", "Date", "Expect", "From", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Range", "If-Unmodified-Since", "Max-Forwards", "Origin", "Pragma", "Proxy-Authorization", "Range", "Referer", "TE", "User-Agent", "Upgrade", "Via", "Warning", "X-Requested-With", "DNT", "X-Forwarded-For", "X-Forwarded-Host", "X-Forwarded-Proto", "Front-End-Https", "X-Http-Method-Override", "X-ATT-DeviceId", "X-Wap-Profile", "Proxy-Connection", "X-UIDH", "X-Csrf-Token"],
  METHOD_COLOR: {
    post: {
      bac: "#d2eafb",
      color: "#108ee9"
    },
    get: {
      bac: "#cfefdf",
      color: "#00a854"
    },
    put: {
      bac: "#fff3cf",
      color: "#ffbf00"
    },
    delete: {
      bac: "#fcdbd9",
      color: "#f04134"
    },
    head: {
      bac: "#fff3cf",
      color: "#ffbf00"
    },
    patch: {
      bac: "#fff3cf",
      color: "#ffbf00"
    },
    options: {
      bac: "#fff3cf",
      color: "#ffbf00"
    }
  },
  MOCK_SOURCE: [{
    name: "\u5B57\u7B26\u4E32",
    mock: "@string"
  }, {
    name: "\u81EA\u7136\u6570",
    mock: "@natural"
  }, {
    name: "\u6D6E\u70B9\u6570",
    mock: "@float"
  }, {
    name: "\u5B57\u7B26",
    mock: "@character"
  }, {
    name: "\u5E03\u5C14",
    mock: "@boolean"
  }, {
    name: "url",
    mock: "@url"
  }, {
    name: "\u57DF\u540D",
    mock: "@domain"
  }, {
    name: "ip\u5730\u5740",
    mock: "@ip"
  }, {
    name: "id",
    mock: "@id"
  }, {
    name: "guid",
    mock: "@guid"
  }, {
    name: "\u5F53\u524D\u65F6\u95F4",
    mock: "@now"
  }, {
    name: "\u65F6\u95F4\u6233",
    mock: "@timestamp"
  }, {
    name: "\u65E5\u671F",
    mock: "@date"
  }, {
    name: "\u65F6\u95F4",
    mock: "@time"
  }, {
    name: "\u65E5\u671F\u65F6\u95F4",
    mock: "@datetime"
  }, {
    name: "\u56FE\u7247\u8FDE\u63A5",
    mock: "@image"
  }, {
    name: "\u56FE\u7247data",
    mock: "@imageData"
  }, {
    name: "\u989C\u8272",
    mock: "@color"
  }, {
    name: "\u989C\u8272hex",
    mock: "@hex"
  }, {
    name: "\u989C\u8272rgba",
    mock: "@rgba"
  }, {
    name: "\u989C\u8272rgb",
    mock: "@rgb"
  }, {
    name: "\u989C\u8272hsl",
    mock: "@hsl"
  }, {
    name: "\u6574\u6570",
    mock: "@integer"
  }, {
    name: "email",
    mock: "@email"
  }, {
    name: "\u5927\u6BB5\u6587\u672C",
    mock: "@paragraph"
  }, {
    name: "\u53E5\u5B50",
    mock: "@sentence"
  }, {
    name: "\u5355\u8BCD",
    mock: "@word"
  }, {
    name: "\u5927\u6BB5\u4E2D\u6587\u6587\u672C",
    mock: "@cparagraph"
  }, {
    name: "\u4E2D\u6587\u6807\u9898",
    mock: "@ctitle"
  }, {
    name: "\u6807\u9898",
    mock: "@title"
  }, {
    name: "\u59D3\u540D",
    mock: "@name"
  }, {
    name: "\u4E2D\u6587\u59D3\u540D",
    mock: "@cname"
  }, {
    name: "\u4E2D\u6587\u59D3",
    mock: "@cfirst"
  }, {
    name: "\u4E2D\u6587\u540D",
    mock: "@clast"
  }, {
    name: "\u82F1\u6587\u59D3",
    mock: "@first"
  }, {
    name: "\u82F1\u6587\u540D",
    mock: "@last"
  }, {
    name: "\u4E2D\u6587\u53E5\u5B50",
    mock: "@csentence"
  }, {
    name: "\u4E2D\u6587\u8BCD\u7EC4",
    mock: "@cword"
  }, {
    name: "\u5730\u5740",
    mock: "@region"
  }, {
    name: "\u7701\u4EFD",
    mock: "@province"
  }, {
    name: "\u57CE\u5E02",
    mock: "@city"
  }, {
    name: "\u5730\u533A",
    mock: "@county"
  }, {
    name: "\u8F6C\u6362\u4E3A\u5927\u5199",
    mock: "@upper"
  }, {
    name: "\u8F6C\u6362\u4E3A\u5C0F\u5199",
    mock: "@lower"
  }, {
    name: "\u6311\u9009\uFF08\u679A\u4E3E\uFF09",
    mock: "@pick"
  }, {
    name: "\u6253\u4E71\u6570\u7EC4",
    mock: "@shuffle"
  }, {
    name: "\u534F\u8BAE",
    mock: "@protocol"
  }],
  IP_REGEXP: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/,
  docHref: {
    adv_mock_case: "https://hellosean1025.github.io/yapi/documents/mock.html",
    adv_mock_script: "https://hellosean1025.github.io/yapi/documents/adv_mock.html"
  }
};
Modal.confirm;
var ProjectCard = Vue.defineComponent({
  props: ["projectData", "uid", "inFollowPage", "callbackResult", "isShow", "getProject", "checkProjectName", "copyProjectMsg", "currPage"],
  setup() {
    return {
      State_App
    };
  },
  methods: {
    add: _global__.debounce(async function() {
      const {
        projectData
      } = this;
      const uid = this.State_App.user.uid;
      const param = {
        uid,
        projectid: projectData._id,
        projectname: projectData.name,
        icon: projectData.icon || constants.PROJECT_ICON[0],
        color: projectData.color || constants.PROJECT_COLOR.blue
      };
      const {
        data
      } = await API.project.addFollow(param);
      if (data) {
        this.callbackResult();
      }
    }, 300),
    del: _global__.debounce(async function() {
      const id = this.projectData.projectid || this.projectData._id;
      const {
        data
      } = await API.project.delFollow(id);
      if (data) {
        this.callbackResult();
      }
    }, 300)
  },
  computed: {
    isFollowStatus() {
      return Boolean(this.projectData.follow || this.inFollowPage);
    },
    followIconTitle() {
      return this.isFollowStatus ? "\u53D6\u6D88\u5173\u6CE8" : "\u6DFB\u52A0\u5173\u6CE8";
    },
    followIconIcon() {
      return this.isFollowStatus ? "follow" : "unfollow";
    },
    followIconClickHandler() {
      return this.isFollowStatus ? this.del : this.add;
    }
  },
  render() {
    const projectData = this.projectData;
    const isShow = this.isShow;
    const followIcon = Vue.createVNode("span", {
      "class": "pointer",
      "onClick": this.followIconClickHandler
    }, [Vue.createVNode(Vue.resolveComponent("aTooltip"), {
      "placement": "rightTop",
      "title": this.followIconTitle
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("xIcon"), {
        "icon": this.followIconIcon
      }, null)]
    })]);
    const copyIcon = (() => {
      if (isShow) {
        return Vue.createVNode("span", {
          "class": "pointer",
          "onClick": this.showConfirm
        }, [Vue.createVNode(Vue.resolveComponent("aTooltip"), {
          "placement": "rightTop",
          "title": "\u590D\u5236\u9879\u76EE"
        }, {
          default: () => [Vue.createVNode(Vue.resolveComponent("xIcon"), {
            "icon": "copy"
          }, null)]
        })]);
      }
      return null;
    })();
    return Vue.createVNode("div", {
      "class": "card-container"
    }, [Vue.createVNode(Vue.resolveComponent("aCard"), {
      "hoverable": true,
      "class": "m-card",
      "onClick": () => this.$router.push({
        path: "/project/" + (projectData.projectid || projectData._id)
      })
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("xIcon"), {
        "icon": projectData.icon || "star-o",
        "class": "ui-logo",
        "style": {
          backgroundColor: constants.PROJECT_COLOR[projectData.color] || constants.PROJECT_COLOR.blue
        }
      }, null), Vue.createVNode("h4", {
        "class": "ui-title"
      }, [projectData.name || projectData.projectname])]
    }), Vue.createVNode("div", {
      "class": "card-btns flex"
    }, [copyIcon, Vue.createVNode(Vue.resolveComponent("xGap"), {
      "l": "10"
    }, null), followIcon])]);
  }
});
var Addproject = "";
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !Vue.isVNode(s);
}
var ViewAddProject = Vue.defineComponent({
  props: {
    options: {
      type: Object,
      default() {
        return {
          __elId: false
        };
      }
    }
  },
  setup() {
    return {
      State_App
    };
  },
  data() {
    const vm = this;
    return {
      dataXItem: {
        ...defItem({
          value: vm.options.groupId || "",
          prop: "group_id",
          label: "\u6240\u5C5E\u5206\u7EC4",
          placeholder: "\u8BF7\u9009\u62E9\u9879\u76EE\u6240\u5C5E\u7684\u5206\u7EC4",
          itemType: "Select",
          options: [],
          rules: [FormRules.required("\u8BF7\u9009\u62E9\u9879\u76EE\u6240\u5C5E\u7684\u5206\u7EC4!")],
          once() {
            vm.$watch("State_App.groupList", (groupList) => {
              vm.dataXItem.group_id.options = _global__.map(groupList, (i) => {
                return {
                  label: i.group_name,
                  value: String(i._id),
                  disabled: !["dev", "owner", "admin"].includes(i.role)
                };
              });
            }, {
              immediate: true
            });
          }
        }),
        ...defItem({
          itemType: "Input",
          label: "\u9879\u76EE\u540D\u79F0",
          prop: "name",
          value: "",
          rules: [FormRules.required("\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"), FormRules.custom({
            msg: "",
            name: "",
            trigger: "",
            validator(value, {
              configs,
              rule
            }) {
              const type = "\u9879\u76EE";
              const strLength = (str) => {
                let length = 0;
                for (let i = 0; i < str.length; i++) {
                  str.charCodeAt(i) > 255 ? length += 2 : length++;
                }
                return length;
              };
              const len = value ? strLength(value) : 0;
              if (len > constants.NAME_LIMIT) {
                rule.msg = "\u8BF7\u8F93\u5165" + type + "\u540D\u79F0\uFF0C\u957F\u5EA6\u4E0D\u8D85\u8FC7" + constants.NAME_LIMIT + "\u5B57\u7B26(\u4E2D\u6587\u7B97\u4F5C2\u5B57\u7B26)!";
                return FormRules.FAIL;
              } else if (len === 0) {
                rule.msg = "\u8BF7\u8F93\u5165" + type + "\u540D\u79F0\uFF0C\u957F\u5EA6\u4E0D\u8D85\u8FC7" + constants.NAME_LIMIT + "\u5B57\u7B26(\u4E2D\u6587\u7B97\u4F5C2\u5B57\u7B26)!";
                return FormRules.FAIL;
              } else {
                return FormRules.SUCCESS;
              }
            }
          })]
        }),
        ...defItem({
          value: "",
          prop: "basepath",
          label: defItem.labelWithTips({
            label: "\u57FA\u672C\u8DEF\u5F84",
            tips: "\u63A5\u53E3\u57FA\u672C\u8DEF\u5F84\uFF0C\u4E3A\u7A7A\u662F\u6839\u8DEF\u5F84",
            icon: Vue.createVNode(Vue.resolveComponent("xIcon"), {
              "icon": "question"
            }, null)
          }),
          placeholder: "\u63A5\u53E3\u57FA\u672C\u8DEF\u5F84\uFF0C\u4E3A\u7A7A\u662F\u6839\u8DEF\u5F84",
          rules: [FormRules.required("\u8BF7\u8F93\u5165\u9879\u76EE\u57FA\u672C\u8DEF\u5F84!")]
        }),
        ...defItem({
          value: "",
          prop: "desc",
          label: "\u63CF\u8FF0",
          isTextarea: true,
          placeholder: "\u63CF\u8FF0\u4E0D\u8D85\u8FC7144\u5B57!",
          showCount: true,
          maxlength: 144
        }),
        ...defItem({
          itemType: "RadioGroup",
          value: "private",
          prop: "project_type",
          label: "\u6743\u9650",
          options: [{
            label: Vue.createVNode("span", {
              "class": "flex"
            }, [Vue.createVNode(Vue.resolveComponent("xIcon"), {
              "icon": "lockStrok"
            }, null), Vue.createVNode("span", null, [Vue.createTextVNode("\u79C1\u6709")])]),
            value: "private"
          }, {
            label: Vue.createVNode("span", {
              "class": "flex"
            }, [Vue.createVNode(Vue.resolveComponent("xIcon"), {
              "icon": "unlock"
            }, null), Vue.createVNode("span", null, [Vue.createTextVNode("\u516C\u5F00")])]),
            value: "public"
          }]
        })
      },
      configs: {
        btn_addProject: {
          text: "\u521B\u5EFA\u9879\u76EE",
          type: "primary",
          icon: Vue.createVNode(Vue.resolveComponent("xIcon"), {
            "icon": "add"
          }, null),
          async onClick() {
          }
        }
      },
      state: {
        groupList: []
      }
    };
  },
  mounted() {
    this.options.vm = this;
    this.init();
  },
  methods: {
    async init() {
      Methods_App.setBreadcrumb([{
        name: "\u65B0\u5EFA\u9879\u76EE"
      }]);
      if (!State_App.currGroup._id) {
        await Methods_App.fetchGroupList();
      }
      if (State_App.groupList.length === 0) {
        return null;
      }
    },
    async submit() {
      const vm = this;
      try {
        const validateResults = await validateForm(vm.dataXItem);
        if (AllWasWell(validateResults)) {
          const formData = pickValueFrom(vm.dataXItem);
          formData.icon = constants.PROJECT_ICON[0];
          formData.color = pickRandomProperty(constants.PROJECT_COLOR);
          const {
            data
          } = await API.project.addProject(formData);
          UI.notification.success("\u521B\u5EFA\u6210\u529F! ");
          return true;
        } else {
          throw new Error("\u672A\u901A\u8FC7\u9A8C\u8BC1");
        }
      } catch (e) {
        console.error(e);
      }
    },
    handlePath(e) {
      let val = e.target.value;
      this.props.form.setFieldsValue({
        basepath: handlePath(val)
      });
    }
  },
  render() {
    let _slot;
    return Vue.createVNode("div", {
      "class": "g-row flex1 height100"
    }, [Vue.createVNode("div", {
      "class": "g-row m-container"
    }, [Vue.createVNode(Vue.resolveComponent("xForm"), {
      "class": "flex vertical",
      "labelStyle": {
        "min-width": "120px",
        width: "unset"
      }
    }, _isSlot$1(_slot = _global__.map(this.dataXItem, (configs, prop) => {
      return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode(Vue.resolveComponent("xGap"), {
        "t": "10"
      }, null), Vue.createVNode(Vue.resolveComponent("xItem"), {
        "configs": configs
      }, null)]);
    })) ? _slot : {
      default: () => [_slot]
    })])]);
  }
});
var ErrMsg$1 = "";
const ErrMsg = Vue.defineComponent({
  props: ["type", "history", "title", "desc", "opration"],
  render() {
    let {
      type,
      title,
      desc,
      opration
    } = this;
    let icon = "frown-o";
    if (type) {
      switch (type) {
        case "noFollow":
          title = "\u4F60\u8FD8\u6CA1\u6709\u5173\u6CE8\u9879\u76EE\u5462";
          desc = Vue.createVNode("span", null, [Vue.createTextVNode("\u5148\u53BB"), " ", Vue.createVNode("a", {
            "onClick": () => router.push({
              path: "/group"
            })
          }, [Vue.createTextVNode("\u201C\u9879\u76EE\u5E7F\u573A\u201D")]), " ", Vue.createTextVNode("\u901B\u901B\u5427, \u90A3\u91CC\u53EF\u4EE5\u6DFB\u52A0\u5173\u6CE8\u3002")]);
          break;
        case "noInterface":
          title = "\u8BE5\u9879\u76EE\u8FD8\u6CA1\u6709\u63A5\u53E3\u5462";
          desc = "\u5728\u5DE6\u4FA7 \u201C\u63A5\u53E3\u5217\u8868\u201D \u4E2D\u6DFB\u52A0\u63A5\u53E3";
          break;
        case "noMemberInProject":
          title = "\u8BE5\u9879\u76EE\u8FD8\u6CA1\u6709\u6210\u5458\u5462";
          break;
        case "noMemberInGroup":
          title = "\u8BE5\u5206\u7EC4\u8FD8\u6CA1\u6709\u6210\u5458\u5462";
          break;
        case "noProject":
          title = "\u8BE5\u5206\u7EC4\u8FD8\u6CA1\u6709\u9879\u76EE\u5462";
          desc = Vue.createVNode("span", null, [Vue.createTextVNode("\u8BF7\u70B9\u51FB\u53F3\u4E0A\u89D2\u6DFB\u52A0\u9879\u76EE\u6309\u94AE\u65B0\u5EFA\u9879\u76EE")]);
          break;
        case "noData":
          title = "\u6682\u65E0\u6570\u636E";
          desc = "\u5148\u53BB\u522B\u5904\u901B\u901B\u5427";
          break;
        case "noChange":
          title = "\u6CA1\u6709\u6539\u52A8";
          desc = "\u8BE5\u64CD\u4F5C\u672A\u6539\u52A8 Api \u6570\u636E";
          icon = "meh-o";
          break;
        default:
          console.log("default");
      }
    }
    return Vue.createVNode("div", {
      "class": "err-msg",
      "style": "margin:auto;"
    }, [Vue.createVNode(Vue.resolveComponent("aIcon"), {
      "type": icon,
      "class": "icon"
    }, null), Vue.createVNode("p", {
      "class": "title"
    }, [title]), Vue.createVNode("p", {
      "class": "desc"
    }, [desc]), Vue.createVNode("p", {
      "class": "opration"
    }, [opration])]);
  }
});
var ProjectList$1 = "";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !Vue.isVNode(s);
}
var ProjectList = Vue.defineComponent({
  props: ["form", "addProject", "delProject", "changeUpdateModal", "projectList", "userInfo", "tableLoading", "currGroup", "setBreadcrumb", "currPage", "studyTip", "study"],
  setup() {
    return {
      State_App
    };
  },
  data() {
    const vm = this;
    vm.fetchProjectList = _global__.debounce(async function() {
      await Methods_App.fetchProjectList(vm.$route.params.groupId);
      vm.isLoading = false;
    });
    vm.updateProjectList = () => {
      vm.isLoading = true;
      vm.fetchProjectList();
    };
    return {
      configs: {},
      isLoading: false,
      state: {
        visible: false,
        protocol: "http://",
        projectData: []
      }
    };
  },
  computed: {
    projectData() {
      return this.State_App.project.projectList;
    },
    isShow() {
      return /(admin)|(owner)|(dev)/.test(this.State_App.user.role);
    }
  },
  watch: {
    "$route.params.groupId": {
      immediate: true,
      handler() {
        this.isLoading = true;
        this.updateProjectList();
      }
    }
  },
  methods: {
    openAddProjectDialog() {
      const vm = this;
      UI.dialog.component({
        title: "\u6DFB\u52A0\u9879\u76EE",
        component: ViewAddProject,
        area: ["840px", "550px"],
        okText: "\u521B\u5EFA\u9879\u76EE",
        groupId: vm.$route.params.groupId,
        onOk: async (dialog) => {
          const res = await dialog.vm.submit();
          if (res) {
            dialog.close();
            vm.updateProjectList();
          }
        }
      });
    },
    protocolChange(value) {
      this.setState({
        protocol: value
      });
    }
  },
  render() {
    let projectData = this.projectData;
    let noFollow = [];
    let followProject = [];
    for (var i in projectData) {
      if (projectData[i].follow) {
        followProject.push(projectData[i]);
      } else {
        noFollow.push(projectData[i]);
      }
    }
    followProject = followProject.sort((a, b) => {
      return b.up_time - a.up_time;
    });
    noFollow = noFollow.sort((a, b) => {
      return b.up_time - a.up_time;
    });
    projectData = [...followProject, ...noFollow];
    const Follow = () => {
      if (followProject.length) {
        return Vue.createVNode(Vue.resolveComponent("aRow"), {
          "style": {
            borderBottom: "1px solid #eee",
            marginBottom: "15px"
          }
        }, {
          default: () => [Vue.createVNode("h3", {
            "class": "owner-type"
          }, [Vue.createTextVNode("\u6211\u7684\u5173\u6CE8")]), _global__.map(followProject, (item, index) => {
            return Vue.createVNode(Vue.resolveComponent("aCol"), {
              "xs": 8,
              "lg": 6,
              "xxl": 4,
              "key": index
            }, {
              default: () => [Vue.createVNode(ProjectCard, {
                "projectData": item,
                "callbackResult": this.updateProjectList
              }, null)]
            });
          })]
        });
      }
      return null;
    };
    const NoFollow = () => {
      if (noFollow.length) {
        return Vue.createVNode(Vue.resolveComponent("aRow"), {
          "style": {
            borderBottom: "1px solid #eee",
            marginBottom: "15px"
          }
        }, {
          default: () => [Vue.createVNode("h3", {
            "class": "owner-type"
          }, [Vue.createTextVNode("\u6211\u7684\u9879\u76EE")]), _global__.map(noFollow, (item, index) => {
            return Vue.createVNode(Vue.resolveComponent("aCol"), {
              "xs": 8,
              "lg": 6,
              "xxl": 4,
              "key": index
            }, {
              default: () => [Vue.createVNode(ProjectCard, {
                "projectData": item,
                "callbackResult": this.updateProjectList,
                "isShow": this.isShow
              }, null)]
            });
          })]
        });
      }
      return null;
    };
    const OwnerSpace = () => {
      return projectData.length ? Vue.createVNode("div", null, [Vue.createVNode(NoFollow, null, null), Vue.createVNode(Follow, null, null)]) : Vue.createVNode(ErrMsg, {
        "type": "noProject"
      }, null);
    };
    const addProjectButton = (() => {
      if (this.isShow) {
        return Vue.createVNode(Vue.resolveComponent("aButton"), {
          "type": "primary",
          "onClick": this.openAddProjectDialog
        }, {
          default: () => [Vue.createTextVNode("\u6DFB\u52A0\u9879\u76EE")]
        });
      } else {
        return Vue.createVNode(Vue.resolveComponent("aTooltip"), {
          "title": "\u60A8\u6CA1\u6709\u6743\u9650,\u8BF7\u8054\u7CFB\u8BE5\u5206\u7EC4\u7EC4\u957F\u6216\u7BA1\u7406\u5458"
        }, {
          default: () => [Vue.createVNode(Vue.resolveComponent("aButton"), {
            "type": "primary",
            "disabled": true
          }, {
            default: () => [Vue.createTextVNode("\u6DFB\u52A0\u9879\u76EE")]
          })]
        });
      }
    })();
    return Vue.withDirectives(Vue.createVNode("div", {
      "style": {
        paddingTop: "24px"
      },
      "class": "m-panel card-panel card-panel-s project-list"
    }, [Vue.createVNode(Vue.resolveComponent("aRow"), {
      "class": "project-list-header"
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("aCol"), {
        "span": 16,
        "style": {
          textAlign: "left"
        }
      }, {
        default: () => [Vue.createVNode("span", null, [Vue.createTextVNode(" "), this.$route.params]), Vue.createVNode("span", null, [this.State_App.currGroup.group_name, Vue.createTextVNode(" ")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u5206\u7EC4\u5171")]), Vue.createVNode("span", null, [Vue.createTextVNode(" ("), this.State_App.project.projectList.length, Vue.createTextVNode(")")]), Vue.createVNode("span", null, [Vue.createTextVNode("\u4E2A\u9879\u76EE")])]
      }), Vue.createVNode(Vue.resolveComponent("aCol"), {
        "span": 8,
        "class": "flex end"
      }, _isSlot(addProjectButton) ? addProjectButton : {
        default: () => [addProjectButton]
      })]
    }), Vue.createVNode(Vue.resolveComponent("aRow"), null, {
      default: () => [this.State_App.currGroup.type === "private" ? Vue.createVNode(OwnerSpace, null, null) : projectData.length ? projectData.map((item, index) => {
        return Vue.createVNode(Vue.resolveComponent("aCol"), {
          "xs": 8,
          "lg": 6,
          "xxl": 4,
          "key": index
        }, {
          default: () => [Vue.createVNode(ProjectCard, {
            "projectData": item,
            "callbackResult": this.updateProjectList,
            "isShow": this.isShow
          }, null)]
        });
      }) : Vue.createVNode("div", {
        "class": "flex center width100"
      }, [Vue.createVNode(ErrMsg, {
        "type": "noProject"
      }, null)])]
    })]), [[Vue.resolveDirective("loading"), this.isLoading]]);
  }
});
var Group = "";
var _sfc_main = Vue.defineComponent({
  setup() {
    return {
      State_App
    };
  },
  data() {
    const groupId = this.$route.params.groupId || false;
    return {
      state: {
        groupId
      }
    };
  },
  mounted() {
    this.ifUrlNoGroupIdGetAndAddIdToUrl();
  },
  methods: {
    async ifUrlNoGroupIdGetAndAddIdToUrl() {
      try {
        let jump = () => null;
        if (!this.state.groupId) {
          let {
            data: group
          } = await API.group.getMyGroup();
          this.state.groupId = group._id;
          jump = () => this.$router.push({
            path: `/group/${this.state.groupId}`
          });
        }
        await Methods_App.setCurrGroup(this.state.groupId);
        jump();
      } catch (e) {
        console.error(e);
        this.state.groupId = false;
        this.ifUrlNoGroupIdGetAndAddIdToUrl();
      }
    }
  },
  render() {
    if (!this.state.groupId) {
      return Vue.createVNode(Vue.resolveComponent("aSpin"), {
        "class": "flex vertical middle center height100"
      }, null);
    }
    return Vue.createVNode(Vue.resolveComponent("aLayout"), {
      "style": {
        marginLeft: "24px",
        marginTop: "24px"
      }
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("aLayoutSider"), {
        "width": 300,
        "class": "flex vertical height100"
      }, {
        default: () => [Vue.createVNode("div", {
          "class": "logo"
        }, [Vue.createTextVNode("Logo")]), Vue.createVNode(GroupList, null, null)]
      }), Vue.createVNode(Vue.resolveComponent("aLayout"), null, {
        default: () => [Vue.createVNode(Vue.resolveComponent("aLayoutContent"), {
          "style": {
            height: "100%",
            margin: "0 24px 0 16px",
            overflow: "initial",
            backgroundColor: "#fff"
          }
        }, {
          default: () => [Vue.createVNode(Vue.resolveComponent("aTabs"), {
            "type": "card",
            "class": "m-tab tabs-large height100"
          }, {
            default: () => [Vue.createVNode(Vue.resolveComponent("aTabPane"), {
              "tab": "\u9879\u76EE\u5217\u8868",
              "key": "1"
            }, {
              default: () => [Vue.createVNode(ProjectList, null, null)]
            })]
          })]
        })]
      })]
    });
  }
});
export { _sfc_main as default };
