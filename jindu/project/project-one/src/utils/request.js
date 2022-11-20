import axios from 'axios'
import { getToken } from '@/utils/token'
import { Message } from 'element-ui'
const instance = axios.create({
  baseURL: '/api',
  timeout: 30000
})

// 添加拦截器
instance.interceptors.request.use(
  (config) => {
    if (getToken('token')) {
      config.headers['token'] = getToken('token')
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (response) => {
    let { status, data } = response
    if (status === 200) {
      return data
    } else {
      Message({ message: '请求失败', type: 'error' })
    }
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
