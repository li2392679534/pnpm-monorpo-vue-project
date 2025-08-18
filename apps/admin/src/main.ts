import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Dashboard from './views/Dashboard.vue'
import { formatDate } from '@monorepo/utils'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/dashboard', component: Dashboard }
  ]
})

console.log('管理后台启动时间:', formatDate(new Date()))

createApp(App)
  .use(router)
  .mount('#app') 