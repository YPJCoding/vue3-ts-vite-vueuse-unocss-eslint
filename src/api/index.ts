import { post } from '@/utils/request.ts'

// 账号密码登录
export function loginByPwd(data: ILoginByPwd) {
  return post('/auth/loginByPwd', data)
}
