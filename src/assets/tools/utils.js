/**
 * 获取url 地址中的参数
 * @returns {Object}
 */
const getUrlParams = () => {
    let url = window.location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") !== -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

export default {
    getUrlParams
}
