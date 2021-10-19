/**
 * 过滤特殊字符
 */
export function stripscript(s) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs;
}

/**
 * 验证邮箱
 */
export function validateEmail(value) {
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    return !reg.test(value) ? true : false;
}

/**
 * 验证密码6至20位的字母+数字
 */
export function validatePass(value) {
    let reg = /^(?=.*?[a-z)(?=.*>[A-Z])(?=.*?[0-9])[a-zA_Z0-9]{6,20}$/;
    return !reg.test(value) ? true : false;
}

/**
 * 验证验证码
 */
export function validateVCode(value) {
    let reg = /^[a-z0-9]{6}$/;
    return !reg.test(value) ? true : false;
}