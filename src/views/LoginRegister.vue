<template>
  <van-tabs v-model="active">
    <van-tab title="登录">
        <UserLogin></UserLogin>
    </van-tab>
    <van-tab title="注册">
      <UserRegister></UserRegister>
    </van-tab>
  </van-tabs>
</template>

<script>
import { Tab, Tabs } from 'vant'
import UserLogin from "@/components/LoginRegister/UserLogin"
import UserRegister from "@/components/LoginRegister/UserRegister"

export default {
  name: "LoginRegister",
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    UserLogin,
    UserRegister,
  },

  data() {
    return {
      active: 0,
    }
  }
}
</script>

<style lang="less" scoped>
</style>
