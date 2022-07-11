import { _ as _global__ } from "./each.js";
const pickValueFrom = (configs) => {
  return _global__.reduce(configs, (target, config, prop) => {
    target[prop] = JSON.parse(JSON.stringify(config.value));
    return target;
  }, {});
};
export { pickValueFrom as p };
