<template>
<div class="good-info">
  <div class="good-name-price">
    <div class="good-price">￥5-279</div>
    <div class="good-name">嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷嗷</div>
    <van-row class="user-action" type="flex" justify="space-between">
      <van-col span="8">
        <van-icon name="like-o" /><span class="text">推荐</span>
      </van-col>
      <van-col span="8">
        <van-icon name="friends-o" /><span class="text">推荐</span>
      </van-col>
      <van-col span="8">
        <van-icon name="share-o" /><span class="text">推荐</span>
      </van-col>
    </van-row>
  </div>

  <van-cell-group inset class="good-param-type">
    <van-cell is-link center title="选择" :border="false" value="颜色分类" />
    <van-cell is-link center :border="false" title="发货" value="内容啊撒撒撒是" />
    <van-cell is-link center title="保障" :border="false" value="付款488888888888888888888" />
    <van-cell is-link center title="参数" :border="false" value="品牌 型号..."/>

  </van-cell-group>
  <div class="customer-evaluate">
    <div class="section-title">
      宝贝评价(100+)
      <div class="all-evaluate-link">
        查看全部
        <van-icon name="arrow" color="orange"/>
      </div>
    </div>
    <div class="evaluate-some">

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "GoodInfo"
}
</script>

<style lang="less" scoped>
@pad: 5px;
@border-radius: 8px;
@margin: 10px;
.good-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8px;

  .good-name-price {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: @border-radius;
    padding: @pad;
    margin-bottom: @margin;
    background-color: #fff;
  }
  .good-name {
    margin: 10px 0 14px;
    text-align:justify;  // 向左对齐
  }
  .good-price {
    color: #ff4c00;
  }
  .user-action {
    width: 100%;
    .text {
      font-size: 14px;
      color: rgba(128, 128, 128, 0.91);
    }
  }

  .good-param-type {
    padding: @pad;
    margin: 0;
    margin-bottom: @margin;
    .van-cell {
      padding: 0;
    }
    .van-cell__value {
      display: flex;
      flex: 6;
    }
    .van-cell__title {
      display: flex;
      flex: 1;
    }
    .van-cell__right-icon {
      display: flex;
      justify-content: flex-end;
      flex: 1;
    }
  }

  .customer-evaluate {
    display: flex;
    flex-direction: column;
    padding: @pad;
    margin-bottom: @margin;
    border-radius: @border-radius;
    background-color: #fff;

    .section-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      .all-evaluate-link {
        font-size: 16px;
        color: orange;
      }

    }
  }

}
</style>
