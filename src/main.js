import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入图标
import '@/assets/iconfont/iconfont.css'
// 按需导入组件
import { Swipe, SwipeItem, Lazyload } from 'vant'

//注册组件
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
