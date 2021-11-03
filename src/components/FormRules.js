/* 通过校验，无错 */
const SUCCESS = false;
/* 未通过校验 */
const FAIL = true;

export default {
    /*
     * @dataObje {name:'some words',...}
     * @rulesObj {name:[formRule.required('校验未通过显示的提示文字')],...}
     * return [isFail, resultAll]
     * */
    async validate(dataObj, rulesObj) {
        let resultAll = await Promise.all(_.map(rulesObj, async (ruleArray, prop) => {
            const value = dataObj[prop];
            for (let i = 0; i < ruleArray.length; i++) {
                const rule = ruleArray[i];
                const isFail = await rule.validator(value);
                if (isFail) {
                    return {
                        [prop]: rule.msg
                    };
                }
            }
            return {
                [prop]: ""
            };
        }));
        const isSomeOneFail = _.some(resultAll, obj => _.some(obj, (value) => !!value));
        return [isSomeOneFail, resultAll];
    },
    required(msg = "必填项") {
        return {
            name: "required",
            msg,
            async validator(value) {
                /*必填的简单验证*/
                if (value) return SUCCESS;
                if (_.isBoolean(value)) return SUCCESS;
                if (_.isNumber(value)) return SUCCESS;
                if (_.isArrayFill(value)) return SUCCESS;
                return FAIL;
            },
            trigger: ["change", "input", "blur"]
        };
    }
};