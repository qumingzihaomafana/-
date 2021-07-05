import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LyTab from 'ly-tab'
import '@/assets/font/iconfont.css'

Vue.config.productionTip = false
Vue.use(LyTab)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
