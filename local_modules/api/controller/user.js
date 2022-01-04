import ajax from "lsrc/request/ajax";
import { URL } from "../url";
import { getInfo } from "../mock/user";

function genSmsCaptcha() {
    return (Math.random() * 1000000).toFixed(0);
}

export const apiUser = {
    async login(params) {
        await ajax.post(URL.Login, { params });
    },
    getSmsCaptcha: async () => {
        return {
            result: { code: genSmsCaptcha() }
        };
    },
    getInfo: async () => {
        // return await ajax.get(url.UserInfo);
        return {
            result: getInfo
        };

    }
};
