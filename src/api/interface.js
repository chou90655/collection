import request from './request'
// import qs from 'qs'
export function list(data) {
  return request({
    url: 'posts',
    method: 'get',
    data
  })
}
export function create(data) {
  return request({
    url: 'posts',
    method: 'post',
    data
  })
}
export function detail(id) {
  return request({
    url: 'posts/' + id,
    method: 'get'
  })
}
export function del(id) {
  return request({
    url: 'posts/' + id,
    method: 'delete'
  })
}
export function testd1(data) {
  return request({
    url: '/musicapi/playjs2/' + data + '.js',
    method: 'get'
  })
}
