import _ from "lodash";

export const IS = {
    arrayFill: (arr: any) => _.isArray(arr) && arr.length > 0
};
