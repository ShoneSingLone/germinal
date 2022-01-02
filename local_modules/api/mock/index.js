// 导入mockjs
import Mock from "mockjs";
import _ from "lodash";

const mockList = {
    "login": ({ url, type, body }) => {
        return { "user": "username" };
    },
};

_.map(mockList, (controller, pattern) => {
    Mock.mock(new RegExp(pattern), ({ url, type, body }) => {
        console.log("use MockJS", type, url, body);
        return controller({ url, type, body });
    });
});