<template>
  <van-form @submit="onSubmit">
    <div class="input-field">
      <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '' }]"
      />
    </div>

    <div style="margin: 16px;" class="buttons">
      <van-button round type="info" native-type="reset" class="reset-btn">重置</van-button>
      <van-button round type="info" native-type="submit" class="login-btn" >登录</van-button>
    </div>
  </van-form>
</template>

<script>
import CryptoJS from 'crypto-js'
import hmacSHA512 from 'crypto-js/hmac-sha512'
import Base64 from 'crypto-js/enc-base64'
import { saltKey } from '@/utils/config'
import { loginAPI } from '@/api/userAPI'
import { setLocalToken } from '@/utils/tokenOperate'

export default {
  name: "UserLogin",
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {

    async onSubmit(values) {
      // 加密
      const hashPassword = Base64.stringify(hmacSHA512(this.password, `${values.username}+${saltKey}`))
      const { data: res } = await loginAPI(values.username, hashPassword)
      if(res.status === 0) {
        // 密码正确
        setLocalToken(res.data.token)
        this.$router.replace({path: this.$route.query.redirect || '/user'})

      } else {
        alert('用户名或密码错误')
      }
    },
  },
}
</script>

<style lang="less" scoped>
.van-form {
  margin: 0 16px;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
.login-btn,
.reset-btn {
  flex-basis: 45%;
  border-radius: 8px;
  border: 1px solid blue;
}
.van-field {
  border-radius: 8px;
  border: 1px solid grey;
  margin: 0 16px;
  width: auto;
}
.input-field {
  margin-top: 8px;
}
</style>
