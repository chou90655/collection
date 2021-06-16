import axios from 'axios'
import { toast } from '../utils/tools'
import Store from '../store'
const request = axios.create({
  // baseURL: process.env.VUE_APP_API,
  baseURL: 'http://172.20.30.34:3000',
  timeout: 60000
})
request.interceptors.request.use(config => {
  if (Store.state.token) config.headers.Authorization = `bearer ${Store.state.token}`
  return config
}, err => {
  console.log(err)
  return Promise.reject(err)
})

request.interceptors.response.use(({ data, status, config }) => {
  if (status === 200) return data
  else {
    toast(data.msg || '网络繁忙')
    return Promise.reject(data)
  }
}, err => {
  return Promise.reject(err)
})

export default request
