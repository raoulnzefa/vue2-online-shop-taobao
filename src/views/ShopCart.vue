<template>
  <div class="cart">
    <!--头部-->
    <GoodsAmount></GoodsAmount>
    <SelectedGoods></SelectedGoods>
    <TotalPrice></TotalPrice>
  </div>
<!--内容为空就呈现另一种页面-->
<!--推荐-->
</template>

<script>
import TotalPrice from "@/components/Cart/TotalPrice"
import GoodsAmount from "@/components/Cart/GoodsAmount"
import SelectedGoods from "@/components/Cart/SelectedGoods"
export default {
  name: "ShopCart",
  components: {
    TotalPrice,
    GoodsAmount,
    SelectedGoods
  }
}
</script>

<style lang="less" scoped>
// 结算栏
.total-price {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
}
// 统计数量栏
.goods-amount {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
}
.cart{
  &:before {
    display: block;
    content: '';
    height: 60px;
    width: 100%;
  }
  &:after {
    display: block;
    content: '';
    height: 76px;
    width: 100%;
  }
}

</style>
