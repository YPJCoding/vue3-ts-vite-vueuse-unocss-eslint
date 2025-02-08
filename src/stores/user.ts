import type { Ref } from 'vue'
import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

export const useUserStore = createGlobalState(() => {
  const userInfo = ref({}) as Ref<UserInfo>

  return {
    userInfo,
  }
})
