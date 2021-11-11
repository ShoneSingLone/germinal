import {
    EVENT_TYPE
} from "@ventose/ui/tools/validate";

/* 通过校验，无错 */
const SUCCESS = false;
/* 未通过校验 */
const FAIL = true;

export const regexFn = {
    email: () => /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
}

function makeFormRules(options) {
    const msg = options.msg;
    /* if(_.isFunction(msg)){
        Object.defineProperty(options,"msg",{ get(){
            debugger;
            return msg();
        } });
    } */
    return options
}

export default {
    required(msg = "必填项", trigger = [EVENT_TYPE.update]) {
        return makeFormRules({
            name: "required", msg,
            async validator(value) {
                /*必填的简单验证*/
                if (value) return SUCCESS;
                if (_.isBoolean(value)) return SUCCESS;
                if (_.isNumber(value)&&!_.isNaN(value)) return SUCCESS;
                if (_.isArrayFill(value)) return SUCCESS;
                return FAIL;
            },
            trigger
        });
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