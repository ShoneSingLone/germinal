import $ from "jquery";

const ajaxOptions = (options, customOptions) => {
    return _.merge({
        async: true,
        statusCode: {
            404: () => {
                console.log("statusCode 404");
            },
            0: () => {
                console.log("statusCode 0");
            },
        },
    }, options, customOptions);
};


/*
 * @parseContent：满足`return {}`形式的字符串
 */
export const parseContent = returnSentence => new Function(returnSentence);

/* https://api.jquery.com/jQuery.ajax/  */
export default {
    get: (url, options = {}) => new Promise((resolve, reject) => $.ajax(ajaxOptions({
        type: "GET",
        url,
        dataType: "json",
        success: resolve,
        error: reject
    }, options))),
    post: (url, options = {}) => new Promise((resolve, reject) => $.ajax(ajaxOptions({
        type: "POST",
        url,
        dataType: "json",
        success: resolve,
        error: reject
    }, options))),
    loadText: url => new Promise((resolve, reject) => $.ajax({
        type: "GET",
        async: true,
        url,
        dataType: "text",
        success: data => resolve(parseContent(data)),
        error: reject
    }))
};
