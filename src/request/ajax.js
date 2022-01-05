import $ from "jquery";
import {UI} from "@ventose/ui";
import {$t} from "lsrc/language";

export function logError(msg) {
    UI.message.error(msg);
    console.error(msg);
}

const ajaxOptions = (options, customOptions) => {
    const {
        resolve,
        reject
    } = options;

    const _options = {};
    let url = options.url;
    delete options.url;

    let query = customOptions.query;
    delete customOptions.query;
    if (_.isPlainObject(query)) {
        query = _.map(query, (value, key) => `${key}=${value}`).join("&");
        url += `?${query}`;
    }
    _options.url = url;

    const data = customOptions.params;
    delete customOptions.params;

    if (data) {
        _options.data = data;
    }

    _options.success = res => {
        if (res.code !== 200) {
            reject(res.message);
        }
        resolve(res.result);
    };

    _options.error = res => {
        reject(res);
    };

    return _.merge({
            async: true,
            statusCode: {
                401: (res) => {
                    logError($t("tips.404").label);
                },
                404: () => {
                    logError($t("tips.404").label);
                },
                0: () => {
                    logError($t("tips.0").label);
                },
            },
        },
        options,
        _options
    );
};

/*
 * @parseContent：满足`return {}`形式的字符串
 */
export const parseContent = (returnSentence) => new Function(returnSentence);

/* https://learn.jquery.com/ */
/* https://api.jquery.com/jQuery.ajax/  */
export default {
    get: (url, customOptions = {}) =>
        new Promise((resolve, reject) =>
            $.ajax(
                ajaxOptions({
                        method: "GET",
                        url,
                        dataType: "json",
                        resolve,
                        reject,
                    },
                    customOptions
                )
            )
        ),
    post: (url, customOptions = {}) =>
        new Promise((resolve, reject) =>
            $.ajax(
                ajaxOptions({
                        method: "POST",
                        url,
                        dataType: "json",
                        resolve,
                        reject,
                    },
                    customOptions
                )
            )
        ),
    loadText: (url) =>
        new Promise((resolve, reject) =>
            $.ajax({
                type: "GET",
                async: true,
                url,
                dataType: "text",
                success: (data) => resolve(parseContent(data)),
                error: reject,
            })
        ),
};
