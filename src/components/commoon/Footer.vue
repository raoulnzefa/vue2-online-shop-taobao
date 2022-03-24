<template>
<div class="footer">
  <van-tabbar v-model="active" active-color="orange" inactive-color="#000" placeholder>
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item icon="chat-o" badge="10">消息</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o">我的淘宝</van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vant'

export default {
  name: "Footer",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.empty {
  height: 50px;
  width: 100%;
}
</style>
