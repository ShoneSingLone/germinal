import { G as GroupList } from "./GroupList.js";
import { c as constants } from "./variable.js";
import { C as Card, M as Meta, G as Grid, b as _global__, r as Modal } from "./each.js";
import { r as router, S as State_App, A as API, M as Methods_App } from "./yapi.js";
import "./FormRules.js";
import "./form.js";
Card.Meta = Meta;
Card.Grid = Grid;
Card.install = function(app) {
  app.component(Card.name, Card);
  app.component(Meta.name, Meta);
  app.component(Grid.name, Grid);
  return app;
};
var ProjectCard$1 = "";
Modal.confirm;
var ProjectCard = Vue.defineComponent({
  props: ["projectData", "uid", "inFollowPage", "callbackResult", "history", "delFollow", "addFollow", "isShow", "getProject", "checkProjectName", "copyProjectMsg", "currPage"],
  mounted() {
    this.add = _global__.debounce(this.add, 400);
    this.del = _global__.debounce(this.del, 400);
  },
  methods: {},
  render() {
    const {
      projectData,
      inFollowPage,
      isShow
    } = this.props;
    return Vue.createVNode("div", {
      "class": "card-container"
    }, [Vue.createVNode(Card, {
      "bordered": false,
      "class": "m-card",
      "onClick": () => this.props.history.push("/project/" + (projectData.projectid || projectData._id))
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("aIcon"), {
        "type": projectData.icon || "star-o",
        "class": "ui-logo",
        "style": {
          backgroundColor: constants.PROJECT_COLOR[projectData.color] || constants.PROJECT_COLOR.blue
        }
      }, null), Vue.createVNode("h4", {
        "class": "ui-title"
      }, [projectData.name || projectData.projectname])]
    }), Vue.createVNode("div", {
      "class": "card-btns",
      "onClick": projectData.follow || inFollowPage ? this.del : this.add
    }, [Vue.createVNode(Vue.resolveComponent("aTooltip"), {
      "placement": "rightTop",
      "title": projectData.follow || inFollowPage ? "\u53D6\u6D88\u5173\u6CE8" : "\u6DFB\u52A0\u5173\u6CE8"
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("aIcon"), {
        "type": projectData.follow || inFollowPage ? "star" : "star-o",
        "class": "icon " + (projectData.follow || inFollowPage ? "active" : "")
      }, null)]
    })]), isShow && Vue.createVNode("div", {
      "class": "copy-btns",
      "onClick": this.showConfirm
    }, [Vue.createVNode(Vue.resolveComponent("aTooltip"), {
      "placement": "rightTop",
      "title": "\u590D\u5236\u9879\u76EE"
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("LazySvg"), {
        "icon": "copy",
        "class": "icon"
      }, null)]
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
var ProjectList = Vue.defineComponent({
  props: ["form", "fetchProjectList", "addProject", "delProject", "changeUpdateModal", "projectList", "userInfo", "tableLoading", "currGroup", "setBreadcrumb", "currPage", "studyTip", "study"],
  setup() {
    return {
      State_App
    };
  },
  data() {
    return {
      configs: {},
      state: {
        visible: false,
        protocol: "http://",
        projectData: []
      }
    };
  },
  computed: {
    isShow() {
      return /(admin)|(owner)|(dev)/.test(this.State_App.currGroup.role);
    }
  },
  methods: {
    handleCancel() {
      this.props.form.resetFields();
      this.setState({
        visible: false
      });
    },
    protocolChange(value) {
      this.setState({
        protocol: value
      });
    },
    receiveRes() {
      {
        this.props.fetchProjectList(this.State_App.currGroup._id, this.props.currPage);
      }
    }
  },
  render() {
    let projectData = this.state.projectData;
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
      return followProject.length ? Vue.createVNode(Vue.resolveComponent("aRow"), null, {
        default: () => [Vue.createVNode("h3", {
          "class": "owner-type"
        }, [Vue.createTextVNode("\u6211\u7684\u5173\u6CE8")]), followProject.map((item, index) => {
          return Vue.createVNode(Vue.resolveComponent("aCol"), {
            "xs": 8,
            "lg": 6,
            "xxl": 4,
            "key": index
          }, {
            default: () => [Vue.createVNode(ProjectCard, {
              "projectData": item,
              "callbackResult": this.receiveRes
            }, null)]
          });
        })]
      }) : null;
    };
    const NoFollow = () => {
      return noFollow.length ? Vue.createVNode(Vue.resolveComponent("aRow"), {
        "style": {
          borderBottom: "1px solid #eee",
          marginBottom: "15px"
        }
      }, {
        default: () => [Vue.createVNode("h3", {
          "class": "owner-type"
        }, [Vue.createTextVNode("\u6211\u7684\u9879\u76EE")]), noFollow.map((item, index) => {
          return Vue.createVNode(Vue.resolveComponent("aCol"), {
            "xs": 8,
            "lg": 6,
            "xxl": 4,
            "key": index
          }, {
            default: () => [Vue.createVNode(ProjectCard, {
              "projectData": item,
              "callbackResult": this.receiveRes,
              "isShow": this.isShow
            }, null)]
          });
        })]
      }) : null;
    };
    const OwnerSpace = () => {
      return projectData.length ? Vue.createVNode("div", null, [Vue.createVNode(NoFollow, null, null), Vue.createVNode(Follow, null, null)]) : Vue.createVNode(ErrMsg, {
        "type": "noProject"
      }, null);
    };
    return Vue.createVNode("div", {
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
        default: () => [this.State_App.currGroup.group_name, Vue.createTextVNode(" \u5206\u7EC4\u5171 ("), projectData.length, Vue.createTextVNode(") \u4E2A\u9879\u76EE"), " "]
      }), Vue.createVNode(Vue.resolveComponent("aCol"), {
        "span": 8,
        "class": "flex end"
      }, {
        default: () => [this.isShow ? Vue.createVNode(Vue.resolveComponent("RouterLink"), {
          "to": "/add-project"
        }, {
          default: () => [Vue.createVNode(Vue.resolveComponent("aButton"), {
            "type": "primary"
          }, {
            default: () => [Vue.createTextVNode("\u6DFB\u52A0\u9879\u76EE")]
          }), " "]
        }) : Vue.createVNode(Vue.resolveComponent("aTooltip"), {
          "title": "\u60A8\u6CA1\u6709\u6743\u9650,\u8BF7\u8054\u7CFB\u8BE5\u5206\u7EC4\u7EC4\u957F\u6216\u7BA1\u7406\u5458"
        }, {
          default: () => [Vue.createVNode(Vue.resolveComponent("aButton"), {
            "type": "primary",
            "disabled": true
          }, {
            default: () => [Vue.createTextVNode("\u6DFB\u52A0\u9879\u76EE")]
          })]
        })]
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
            "callbackResult": this.receiveRes,
            "isShow": this.isShow
          }, null)]
        });
      }) : Vue.createVNode("div", {
        "class": "flex center width100"
      }, [Vue.createVNode(ErrMsg, {
        "type": "noProject"
      }, null)])]
    })]);
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
    this.ifUrlNoGroupIdGetAddAddIdToUrl();
  },
  methods: {
    async ifUrlNoGroupIdGetAddAddIdToUrl() {
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
        this.ifUrlNoGroupIdGetAddAddIdToUrl();
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
