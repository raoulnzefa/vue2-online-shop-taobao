<template>
  <div class="detail">
    <!--头部-->
    <div class="header">
      <GoodDetailHeader></GoodDetailHeader>
    </div>
    <!--导航栏，往上拖动页面才会出现，这个有点难度，先放着-->
<!--    轮播图-->
    <GoodSwiper></GoodSwiper>
    <!--内容-->
    <GoodInfo></GoodInfo>
    <!--底部-->
  </div>


</template>

<script>
import GoodDetailHeader from "@/components/Detail/GoodDetailHeader"
import GoodSwiper from "@/components/Detail/GoodSwiper"
import GoodInfo from "@/components/Detail/GoodInfo"
// 商品详情
export default {
  name: "Detail",
  components: {
    GoodDetailHeader,
    GoodSwiper,
    GoodInfo
  }
}
</script>

<style lang="less" scoped>
.detail {
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 2;
  }
  &:before {
    display: block;
    content: '';
    height: 42px;
    width: 100%;
  }


}
</style>
