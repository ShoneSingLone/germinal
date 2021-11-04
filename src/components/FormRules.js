import {
    EVENT_TYPE
} from "@ventose/ui/tools/validate";

/* 通过校验，无错 */
const SUCCESS = false;
/* 未通过校验 */
const FAIL = true;

export default {
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
            trigger: [EVENT_TYPE.update]
        };
    },
    demo() {
        return {
            name: "Demo",
            msg: "Demo",
            async validator() {
                await _.sleep(1000);
                return FAIL;
            },
            trigger: [EVENT_TYPE.update, EVENT_TYPE.input, EVENT_TYPE.change, EVENT_TYPE.blur]
        };
    },
    validator({
        name,
        msg,
        validator,
        trigger
    }) {
        return {
            name,
            msg,
            validator,
            trigger
        };
    }

};