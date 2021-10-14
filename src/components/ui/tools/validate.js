import _ from "lodash";

export const IS = {
	arrayFill: (arr) => _.isArray(arr) && arr.length > 0,
	even: (num) => num % 2 === 0,
	odd: (num) => num % 2 !== 0,
};
