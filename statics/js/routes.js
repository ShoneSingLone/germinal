import { a as _sfc_main } from "./index.js";
import "dayjs";
VentoseUI._;
const routeNames = {
  shell: "shell",
  404: "404"
};
const toPath = (name) => `/${name}`;
const NewRoute = (name, component, options = {}) => VentoseUI._.merge({
  name,
  path: `/${name}`,
  component
}, options);
const routes = [NewRoute(routeNames[404], _sfc_main)];
const menuTree = [];
export { NewRoute, menuTree, routeNames, routes, toPath };
