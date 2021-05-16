import Vue from 'vue'
import { Toast } from 'cube-ui'
Vue.use(Toast)
export function toast(txt, mask = true, time = 1600) { // 提示信息函数
  Toast.$create({ txt: txt || '网络异常', type: 'txt', time, mask }).show()
}

function hdt(t) {
  return ('0' + t).slice(-2)
}
// 格式化时间 只支持 'YYYY-MM-DDD'
export function format(time, n = 0) {
  const t = new Date(time - n * 24 * 3600000)
  return t.getFullYear() + '-' + hdt(t.getMonth() + 1) + '-' + hdt(t.getDate())
}
export const formatTime = (time) => {
  const t = new Date(time)
  return `${format(time)} ${hdt(t.getHours())}:${hdt(t.getMinutes())}:${hdt(t.getSeconds())}`
}
export var isIos = (function () {
  var u = navigator.userAgent
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  var isiOS = u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1
  return isAndroid ? 0 : isiOS ? 1 : 2
})()

export function chooseDataZh(arr, num, result, item = []) { // 组合
  if (+num === 1) {
    arr.forEach(_ => result.push([...item, _]))
  } else if (arr.length > num) {
    const first = arr.splice(0, 1)
    chooseDataZh([...arr], num - 1, result, [...item, ...first])
    chooseDataZh([...arr], num, result, [...item])
  } else {
    result.push([...item, ...arr])
  }
}