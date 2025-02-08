import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

const request: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
  timeoutErrorMessage: '访问超时，请稍候再试！',
})

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = ''
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  async (response: AxiosResponse) => {
    const { status, code } = response.data
    // 成功
    if ([status, code].includes(200)) {
      return response.data.data
    } else if ([status, code].includes(401)) {
      // token失效
    } else {
      // 错误提示吐司
    }

    return Promise.reject(response.data)
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

// post请求
export function post(url: string, data: any = {}, config = {}): Promise<[any, any]> {
  return new Promise((resolve) => {
    request
      .post(url, data, config)
      .then((res: any) => {
        resolve([null, res])
      })
      .catch((err: any) => {
        resolve([err, null])
      })
  })
}

// get请求
export function get(url: string, params = {}, config: any = {}): Promise<[any, any]> {
  return new Promise((resolve) => {
    request
      .get(url, { params, ...config })
      .then((res: any) => {
        resolve([null, res.data])
      })
      .catch((err: any) => {
        resolve([err, null])
      })
  })
}
