export const EVENT_TYPE = {
    update: "update",
    change: "change",
    input: "input",
    blur: "blur",
    focus: "focus",
};
export const TIPS_TYPE = {
    success: "success",
    error: "error"
};
export const checkXItem = async (xItemConfigs, handlerResult) => {
    xItemConfigs.checking = true;
    try {
        const {
            rules,
            prop
        } = xItemConfigs;

        let dontCheck = 0;
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i];
            const trigger = rule.trigger || [];
            /* isFail */
            let isFail = await (async () => {
                const needValidate = _.some(trigger, eventName => xItemConfigs.validate.triggerEventsObj[eventName]);
                if (needValidate) {
                    return await rule.validator(xItemConfigs.value);
                } else {
                    dontCheck++;
                }
                return false;
            })();

            /* 但凡有一个校验不通过就可以停止循环返回结果了 */
            if (isFail) {
                handlerResult({
                    [prop]: rule.msg
                });
                return;
            }
            /*false 继续*/
        }

        if (dontCheck === rules.length) {
            /*不需要修改tips*/
            handlerResult(false);
        } else {
            handlerResult({
                [prop]: ""
            });
            return;
        }
    } catch (error) {
        console.error(error);
    } finally {
        /*校验过了*/
        xItemConfigs.validate.triggerEventsObj = {};
    }
};
