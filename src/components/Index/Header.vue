<template>
<div class="header">
  <div class="banner">
    <van-nav-bar :border="false" class="mine">
      <template #left>
        <van-button round type="info" size="small">搜索</van-button>
        <span>订阅</span>
      </template>
      <template #right>
        <span>推荐</span>
        <van-button round type="info" size="small">会员码</van-button>
      </template>
    </van-nav-bar>
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
</template>

<script>
import { Search, Icon, Button, NavBar } from 'vant'
export default {
  name: "Header",
  components: {
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [NavBar.name]: NavBar,
  },
  data() {
    return {
      value: '',
    }
  },
  methods: {}
}

</script>

<style scoped lang="less">
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
}
/deep/ .van-search__content{
  border-radius: 24px;
  border: 1px orange solid;
}

/deep/ .van-nav-bar__left,
/deep/ .van-nav-bar__right {
  justify-content: space-between;
  width: 45vw;
  font-size: 16px;
}
</style>
