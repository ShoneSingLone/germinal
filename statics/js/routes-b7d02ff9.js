import { _ as _sfc_main } from "./index-797ae185.js";
import { _ } from "./vendor-1427bb8e.js";
const {
  genId
} = _;
const routeNames = {
  shell: "shell",
  404: "404"
};
const toPath = (name) => `/${name}`;
const NewRoute = (name, component, options = {}) => _.merge({
  name,
  path: `/${name}`,
  component
}, options);
const routes = [NewRoute(routeNames[404], _sfc_main)];
function Menu(id, label, icon = "mail", children = []) {
  return {
    id,
    label,
    icon,
    children
  };
}
const menuTree = [Menu(genId("menu"), genId("label"), "user", [Menu(genId("menu"), genId("label")), Menu(genId("menu"), genId("label")), Menu(genId("menu"), genId("label")), Menu(genId("menu"), genId("label")), Menu(genId("menu"), genId("label"))]), {
  id: genId("menu"),
  icon: "mail",
  label: genId("label"),
  children: [{
    id: genId("menu"),
    icon: "mail",
    label: genId("label"),
    children: [{
      id: genId("menu"),
      icon: "mail",
      label: genId("label")
    }, {
      id: genId("menu"),
      icon: "mail",
      label: genId("label")
    }, {
      id: genId("menu"),
      icon: "mail",
      label: genId("label")
    }, {
      id: genId("menu"),
      icon: "mail",
      label: genId("label")
    }, {
      id: genId("menu"),
      icon: "mail",
      label: genId("label")
    }, {
      id: genId("menu"),
      icon: "mail",
      label: genId("label")
    }]
  }, {
    id: genId("menu"),
    icon: "mail",
    label: genId("label")
  }, {
    id: genId("menu"),
    icon: "mail",
    label: genId("label")
  }, {
    id: genId("menu"),
    icon: "mail",
    label: genId("label")
  }, {
    id: genId("menu"),
    icon: "mail",
    label: genId("label")
  }, {
    id: genId("menu"),
    icon: "mail",
    label: genId("label")
  }]
}, {
  id: genId("menu"),
  label: genId("label"),
  children: [{
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }]
}, {
  id: genId("menu"),
  label: genId("label"),
  children: [{
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }]
}, {
  id: genId("menu"),
  label: genId("label"),
  children: [{
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }]
}, {
  id: genId("menu"),
  label: genId("label"),
  children: [{
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }, {
    id: genId("menu"),
    label: genId("label")
  }]
}];
export { NewRoute, menuTree, routeNames, routes, toPath };
