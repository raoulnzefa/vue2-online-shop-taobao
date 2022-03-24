import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入图标
import '@/assets/iconfont/iconfont.css'
// 按需导入组件
import { Lazyload } from 'vant'

//注册组件
Vue.use(Lazyload, {
  lazyComponent: true,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
