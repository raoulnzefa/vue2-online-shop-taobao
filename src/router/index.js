import Vue from 'vue'
import VueRouter from "vue-router"
// 导入组件
import Category from "@/views/Category"
import Detail from "@/views/Detail"
import Index from "@/views/Index"
import Message from "@/views/Message"
import Search from "@/views/Search"
import ShopCar from "@/views/ShopCar"
import User from "@/views/User"

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index },
  { path: '/categories', component: Category },
  { path: '/details', component: Detail },
  { path: '/index', redirect: '/' },
  { path: '/messages', component: Message },
  { path: '/search', component: Search },
  { path: '/car', component: ShopCar },
  { path: '/user', component: User },
]

const router = new VueRouter({
  routes
})

export default router
