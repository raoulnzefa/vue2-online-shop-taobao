<template>
<div class="header">
<!--  box是为了解决脱标问题-->
  <div class="box">
    <div class="nav">
      <div class="left">
        <van-button round type="info" size="small">搜索</van-button>
        <a href="javascript:;" >订阅</a>
      </div>
      <div class="right">
        <a href="javascript:;">推荐</a>
        <van-button round type="info" size="small">会员码</van-button>
      </div>
    </div>
    <div class="search">
      <van-search v-model="value" placeholder="请输入搜索关键词" @click="
$router.push('/search')">
        <template #left-icon>
          <van-icon name="scan" color="orange"/>
        </template>
        <template #right-icon>
          <i class="iconfont icon-paizhao" />
          <van-button round type="info" size="small">搜索</van-button>
        </template>
      </van-search>

    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      value: '',
    }
  },
  methods: {}
}

</script>

<style scoped lang="less">
@bgc: #f0f0f0;
.header{
  height: 92px;
  >.box {
    width: 100%;
    position: fixed;
    z-index: 1;
    background-color: @bgc;
  }
}

/deep/ .van-field__right-icon  {
  display: flex ;
  .van-button--small {
    height: 24px;
    margin-left: 8px;
    background-color: orange;
    border-color: orange;
  }
}
.van-search {
  padding-top: 0;
  background-color: @bgc;
}
/deep/ .van-search__content{
  border-radius: 24px;
  border: 1px orange solid;
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  .left,
  .right {
    //position: relative;
    display: flex;
    justify-content: space-between;
    flex-basis: 49%;
    font-size: 16px;
    >a {
      display: flex;
      align-items: center;
      color: #636866;
    }

  }
}
</style>
