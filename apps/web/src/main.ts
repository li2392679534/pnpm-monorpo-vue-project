import { createApp } from 'vue'
import App from './App.vue'
import { formatDate } from '@monorepo/utils'

console.log('当前时间:', formatDate(new Date()))

createApp(App).mount('#app') 