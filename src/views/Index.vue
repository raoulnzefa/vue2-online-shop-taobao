<template>
<div class="home">
  <!--  顶部
  搜索框
  下拉刷新
  -->
  <Header></Header>
  <!--  轮播图（不是普通的轮播图）-->
  <SwipeBanner></SwipeBanner>

  <!--  推荐的商品-->
  <!--  底部-->
  <Footer></Footer>
</div>
</template>

<script>
import SwipeBanner from "@/components/Index/SwipeBanner"
import Header from "@/components/Index/Header"
import Footer from "@/components/commoon/Footer"

/*首页*/
export default {
  name: "Index",
  components: {
    SwipeBanner,
    Header,
    Footer
  }
}
</script>

<style scoped>
</style>
