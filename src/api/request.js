import axios from 'axios'
import { toast } from '../utils/tools'
import Store from '../store'
import { setLogout } from '../utils/cach'
const request = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 60000,
  withCredentials: true
})
request.interceptors.request.use(config => {
  if (config.url.includes('oauth/token')) {
    // eslint-disable-next-line camelcase
    const { grant_type, refresh_token, username, password, verification_token, verification_code, comeFrom } = config.data
    config.auth = { username: 'user', password: 'user' }
    const formData = new FormData()
    formData.append('comeFrom', comeFrom)
    // eslint-disable-next-line camelcase
    if (grant_type === 'password') {
      formData.append('username', username)
      formData.append('password', password)
      formData.append('grant_type', grant_type)
      formData.append('auth_type', 'c_code')
      // eslint-disable-next-line camelcase
      if (verification_token && verification_code) {
        formData.append('verification_token', verification_token)
        formData.append('verification_code', verification_code)
      }
    } else {
      formData.append('refresh_token', refresh_token)
      formData.append('grant_type', grant_type)
    }
    config.data = formData
  } else {
    if (Store.state.token) config.headers.Authorization = `bearer ${Store.state.token}`
  }
  return config
}, err => {
  console.log(err)
  return Promise.reject(err)
})

const tips = '抱歉，网络繁忙'
request.interceptors.response.use(({ data, status, config }) => {
  if (status === 200) {
    if (config.url.includes('remove-token')) {
      setLogout('')
    } else {
      return data
    }
  } else {
    toast(data.error_description || tips, false)
    return data
  }
}, err => {
  const { status, data } = err.response
  if (status === 401) {
    const end = Store.state.expiresIn
    const now = new Date().getTime()
    if (end > now) {
      Store.dispatch('checkAccountStatus')
    } else {
      if (data.error && data.error === 'invalid_token') {
        toast('登录已过期,请重新登录', false)
        Store.dispatch('refreshToken')
      } else {
        toast('登录已过期,请重新登录', false)
        Store.dispatch('signout')
      }
    }
  } else if (status === 400 && data.error_description && data.error_description.includes('Invalid ref')) {
    toast('登录已失效,请重新登录', false)
    Store.dispatch('signout')
  } else {
    toast(data && data.error_description ? data.error_description : tips, false)
  }
  return Promise.reject(err)
})

export default request
