import { G as GroupList } from "./GroupList.js";
import { S as State_App, A as API, M as Mutations_App } from "./yapi.js";
import "./each.js";
import "./common2.js";
import "./form.js";
var Group = /* @__PURE__ */ (() => ".g-doc {\n  max-width: 12.2rem;\n  min-width: 10.2rem;\n  padding: 0 0.24rem;\n  margin: 0 auto 0.24rem;\n}\n\n.news-box .news-timeline .ant-timeline-item .ant-timeline-item-content {\n  min-width: 300px !important;\n  width: 75% !important;\n}")();
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
        await Mutations_App.setCurrGroup(this.state.groupId);
        jump();
      } catch (e) {
        console.error(e);
      }
    }
  },
  render() {
    if (!this.state.groupId) {
      return Vue.createVNode(Vue.resolveComponent("aSpin"), null, null);
    }
    return Vue.createVNode(Vue.resolveComponent("aLayout"), {
      "style": {
        marginLeft: "24px",
        marginTop: "24px"
      }
    }, {
      default: () => [Vue.createVNode(Vue.resolveComponent("aLayoutSider"), {
        "style": {
          height: "100%"
        },
        "width": 300
      }, {
        default: () => [Vue.createVNode("div", {
          "class": "logo"
        }, [Vue.createTextVNode("Logo")]), Vue.createVNode(GroupList, null, null)]
      })]
    });
  }
});
export { _sfc_main as default };
