import Vue from 'vue'
import VueRouter from "vue-router"
// 导入组件
import Category from "@/views/Category"
import Detail from "@/views/Detail"
import Index from "@/views/Index"
import Message from "@/views/Message"
import Search from "@/views/Search"
import ShopCart from "@/views/ShopCart"
import User from "@/views/User"
import Footer from "@/components/common/Footer"
import GoodFooter from "@/components/Detail/GoodFooter"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      default: Index,
      footer: Footer
    }
  }, {
    path: '/categories',
    components: {
      default: Category,
      footer: Footer
    }
  },
  { path: '/index', redirect: '/' },
  {
    path: '/messages',
    components: {
      default: Message,
      footer: Footer
    }
  }, {
    path: '/cart',
    components: {
      default: ShopCart,
      footer: Footer
    }
  }, {
    path: '/user',
    components: {
      default: User,
      footer: Footer
    }
  }, {
    path: '/details',
    components: {
      default: Detail,
      footer: GoodFooter
    }
  },
  { path: '/search', component: Search },
]

const router = new VueRouter({
  routes
})

export default router
