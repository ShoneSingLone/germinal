export const pickValueFrom = (configs) => {
    return _.reduce(configs, (target, config, prop) => {
        target[prop] = config.value;
        return target;
    }, {});
};
