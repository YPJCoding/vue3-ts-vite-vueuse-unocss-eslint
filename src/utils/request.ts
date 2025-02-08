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
    const { code } = response.data
    // 成功
    if (code === 200) {
      return response.data.data
    } else if (code === 401) {
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

export function post<T = any>(url: string, data: any = {}, config: any = {}): Promise<[any, T]> {
  return new Promise((resolve) => {
    request.post(url, data, config).then((res) => {
      resolve([null, res as T])
    }).catch((err) => {
      resolve([err, undefined as T])
    })
  })
}

export function get<T = any>(url: string, data: any = {}, config: any = {}): Promise<[any, T]> {
  return new Promise((resolve) => {
    request.get(url, { params: data, ...config }).then((res) => {
      resolve([null, res as T])
    }).catch((err) => {
      resolve([err, undefined as T])
    })
  })
}
