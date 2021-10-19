import ajax from "@r/ajax";
import url from "../url";
import {getInfo} from "../mock/user";

export default {
    getInfo: async () => {
        // return await ajax.get(url.UserInfo);
        return {
            result: getInfo
        };

    }
};
