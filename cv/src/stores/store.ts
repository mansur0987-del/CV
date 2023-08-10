import { ref } from 'vue'
import { defineStore } from 'pinia'

export const Store = defineStore('main_store', () => {
  const lang = ref('eng')
  return { lang }
})
