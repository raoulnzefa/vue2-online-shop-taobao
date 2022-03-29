<template>
<!--  fixed和flex有冲突-->
    <div class="detail-header">
      <van-icon name="arrow-left" size="20px" style="margin-left: 10px"/>
      <van-search v-model="value" background="#f0f0f0" shape="round"  placeholder="搜索宝贝" />
      <van-icon class="icon" name="cart-o" color="#111" size="20px"/>
      <van-icon class="icon" dot name="weapp-nav" size="20px" style="margin-right: 10px"/>
    </div>

</template>

<script>
export default {
  name: "GoodDetailHeader",
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>

.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;

  .van-search__content {
    background-color: #fff;
  }
  .van-search{
    flex-basis: 70%;
    padding: 4px;
  }
  .icon {
    flex-basis: 7%;
  }
}
</style>
