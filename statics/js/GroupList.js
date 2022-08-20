import { U as UI, v as validateForm, e as AllWasWell, k as API, _ as _global__ } from "./index.js";
import { S as State_App, M as Methods_App } from "./yapi.js";
import { V as ViewAddGroup, p as pickValueFrom } from "./ViewAddGroup.js";
var GroupList$1 = "";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !Vue.isVNode(s);
}
Vue.createVNode("div", {
  "class": "title-container"
}, [Vue.createVNode("h3", {
  "class": "title"
}, [Vue.createTextVNode("\u6B22\u8FCE\u4F7F\u7528 YApi ~")]), Vue.createVNode("p", null, [Vue.createTextVNode("\u8FD9\u91CC\u7684 "), Vue.createVNode("b", null, [Vue.createTextVNode("\u201C\u4E2A\u4EBA\u7A7A\u95F4\u201D")]), " ", Vue.createTextVNode("\u662F\u4F60\u81EA\u5DF1\u624D\u80FD\u770B\u5230\u7684\u5206\u7EC4\uFF0C\u4F60\u62E5\u6709\u8FD9\u4E2A\u5206\u7EC4\u7684\u5168\u90E8\u6743\u9650\uFF0C\u53EF\u4EE5\u5728\u8FD9\u4E2A\u5206\u7EC4\u91CC\u63A2\u7D22 YApi \u7684\u529F\u80FD\u3002")])]);
var GroupList = Vue.defineComponent({
  props: ["groupList", "currGroup", "fetchGroupList", "setCurrGroup", "setGroupList", "match", "history", "curUserRole", "curUserRoleInGroup", "studyTip", "study", "fetchNewsData", "setCurrGroup"],
  setup() {
    return {
      State_App
    };
  },
  data() {
    return {
      configsSearch: {
        isSearch: true,
        value: "",
        placeholder: "\u641C\u7D22\u5206\u7C7B",
        onSearch: this.searchGroup
      },
      groupListForShow: [],
      state: {
        addGroupModalVisible: false,
        newGroupName: "",
        newGroupDesc: "",
        currGroupName: "",
        currGroupDesc: "",
        groupList: [],
        owner_uids: []
      }
    };
  },
  async mounted() {
    await this.initGroupList();
  },
  methods: {
    async initGroupList() {
      try {
        await Methods_App.fetchGroupList();
        this.searchGroup();
      } catch (error) {
        console.error(error);
      }
    },
    showAddGroupView(row = {}) {
      UI.dialog.component({
        title: "\u6DFB\u52A0\u5206\u7EC4",
        component: ViewAddGroup,
        area: ["480px", "360px"],
        onOk: async (instance) => {
          const validateResults = await validateForm(instance.vm.formItems);
          if (AllWasWell(validateResults)) {
            const {
              newGroupName,
              newGroupDesc,
              owner_uids
            } = pickValueFrom(instance.vm.formItems);
            await this.upsert({
              ...row,
              group_name: newGroupName,
              group_desc: newGroupDesc,
              owner_uids
            });
            instance.close();
          } else {
            throw new Error("\u672A\u901A\u8FC7\u9A8C\u8BC1");
          }
        }
      });
    },
    async upsert({
      group_name,
      group_desc,
      owner_uids,
      id
    }) {
      if (id) {
        await API.group.updateGroup({
          group_name,
          group_desc,
          id
        });
      } else {
        await API.group.addGroup({
          group_name,
          group_desc,
          owner_uids
        });
      }
      await Methods_App.fetchGroupList();
      if (id) {
        const currGroup = _global__.find(this.State_App.groupList, (group) => {
          return +group._id === +id;
        });
        Methods_App.setCurrGroup(currGroup);
      }
      await Methods_App.setCurrGroup(State_App.currGroup._id);
      await Methods_App.fetchNewsData(State_App.currGroup._id, "group", 1, 10);
    },
    async selectGroup({
      key: groupId
    }) {
      const currGroup = _global__.find(this.State_App.groupList, {
        _id: +groupId
      });
      await Methods_App.setCurrGroup(currGroup);
      this.$router.push({
        path: `/group/${currGroup._id}`
      });
      await Methods_App.fetchNewsData(groupId, "group", 1, 10);
    },
    searchGroup: _global__.debounce(function() {
      const {
        groupList
      } = this.State_App;
      const keywords = this.configsSearch.value;
      if (keywords === "") {
        this.groupListForShow = groupList;
      } else {
        this.groupListForShow = _global__.filter(groupList, (group) => new RegExp(keywords, "i").test(group.group_name));
      }
    }, 300)
  },
  watch: {
    "State_App.groupList"() {
      this.searchGroup();
    }
  },
  render() {
    let _slot;
    const {
      currGroup
    } = this.State_App;
    return Vue.createVNode("div", {
      "class": "m-group flex1 height100"
    }, [Vue.withDirectives(Vue.createVNode("div", {
      "class": "group-bar flex vertical"
    }, [Vue.createVNode("div", {
      "class": "curr-group"
    }, [Vue.createVNode("div", {
      "class": "curr-group-name"
    }, [Vue.createVNode("span", {
      "class": "name"
    }, [currGroup.group_name]), Vue.createVNode(Vue.resolveComponent("aTooltip"), {
      "title": "\u6DFB\u52A0\u5206\u7EC4"
    }, {
      default: () => [Vue.createVNode("a", {
        "class": "editSet"
      }, [Vue.createVNode(Vue.resolveComponent("xIcon"), {
        "class": "btn",
        "icon": "addGroup",
        "onClick": this.showAddGroupView,
        "style": "width:16px;"
      }, null)])]
    })]), Vue.createVNode("div", {
      "class": "curr-group-desc"
    }, [Vue.createTextVNode("\u7B80\u4ECB: "), currGroup.group_desc])]), Vue.createVNode("div", {
      "class": "group-operate"
    }, [Vue.createVNode("div", {
      "class": "search"
    }, [Vue.createVNode(Vue.resolveComponent("xItem"), {
      "configs": this.configsSearch
    }, null)])]), Vue.createVNode(Vue.resolveComponent("aMenu"), {
      "class": "group-list",
      "mode": "inline",
      "onClick": this.selectGroup,
      "selectedKeys": [`${currGroup._id}`]
    }, _isSlot(_slot = this.groupListForShow.map((group) => {
      let icon = "folderOpen";
      if (group.type === "private") {
        icon = "user";
      }
      return Vue.createVNode(Vue.resolveComponent("aMenuItem"), {
        "key": `${group._id}`,
        "class": "group-item flex"
      }, {
        default: () => [Vue.createVNode("div", {
          "class": "flex"
        }, [Vue.createVNode(Vue.resolveComponent("xIcon"), {
          "icon": icon,
          "style": "width:16px;"
        }, null), Vue.createVNode("span", null, [group.group_name])])]
      });
    })) ? _slot : {
      default: () => [_slot]
    })]), [[Vue.resolveDirective("loading"), this.groupListForShow.length === 0]])]);
  }
});
export { GroupList as G };
