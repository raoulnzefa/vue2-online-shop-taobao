<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">

  <div class="home">
  <!--  顶部
  搜索框
  下拉刷新
  -->
  <Header></Header>
  <!--  轮播图（不是普通的轮播图）-->
  <SwipeBanner></SwipeBanner>

  <!--  推荐的商品-->
  <Goods></Goods>
</div>
  </van-pull-refresh>

</template>

<script>
import SwipeBanner from "@/components/Index/SwipeBanner"
import Header from "@/components/Index/Header"
import Goods from "@/components/Index/Goods"
import {PullRefresh} from 'vant'

/*首页*/
export default {
  name: "Index",
  components: {
    [PullRefresh.name]: PullRefresh,
    SwipeBanner,
    Header,
    Goods
  },
  data() {
    return {
      isLoading: false,
    }
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: #f0f0f0;
}
</style>
