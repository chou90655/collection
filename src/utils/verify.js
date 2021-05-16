/*eslint-disable*/
export const isAccount = v => new RegExp('^[0-9a-zA-Z]{6,12}$').test(v)
export const isPhone = v => new RegExp('^1(3|4|5|6|7|8|9)[0-9]{9}$').test(v)
// export const isPwd = v => new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/).test(v) && v.length > 5 && v.length < 13
export const isPwd = v => new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,16})$/).test(v)
export const isName = v => new RegExp(/^[\u4E00-\u9FA5]{2,6}$/).test(v)
export const isIcard = v => new RegExp(/^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/).test(v)
export const isCode = v => v

export const isRealName = v => new RegExp('^[\u4E00-\u9FA5\uf900-\ufa2d·•s]{2,20}$').test(v)
export const isEmail = v => new RegExp('^\w+@[a-z0-9]+\.[a-z]{2,4}$').test(v)
export const isWeChat = v => new RegExp('^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$').test(v)
export const isQq = v => new RegExp('^[1-9]\d{4,9}$').test(v)
export const isNumber = v => new RegExp('^[0-9]{6}$').test(v)
