import request from './request'
export function login(data) { // 个人信息 - 修改QQ
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
