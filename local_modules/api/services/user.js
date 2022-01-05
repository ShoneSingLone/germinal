import ajax from "lsrc/request/ajax";
import {
    URL
} from "germinal_api/url";

function genSmsCaptcha() {
    return (Math.random() * 1000000).toFixed(0);
}

export const apiUser = {
    async login(params) {
        // return await ajax.post("asdfasdfasf", {
        return await ajax.post(URL.Login, {
            params
        });
    },
    getSmsCaptcha: async () => {
        return {
            result: {
                code: genSmsCaptcha()
            }
        };
    },
    getInfo: async () => {
        // return await ajax.get(url.UserInfo);
        return {
            result: getInfo
        };

    }
};