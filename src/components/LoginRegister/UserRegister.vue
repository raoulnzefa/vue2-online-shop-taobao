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
      <van-field
          v-model="sms"
          center
          clearable
          name="sms"
          label="短信验证码"
          placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </div>

    <div style="margin: 16px;" class="buttons">
      <van-button round type="info" native-type="reset" class="reset-btn">重置</van-button>
      <van-button round type="info" native-type="submit" class="register-btn">注册</van-button>
    </div>
  </van-form>
</template>

<script>
import { registerAPI } from '@/api/userAPI'
import { saltKey } from '@/utils/config'
import hmacSHA512 from 'crypto-js/hmac-sha512'
import Base64 from 'crypto-js/enc-base64'

export default {
  name: "UserRegister",
  data() {
    return {
      username: '',
      password: '',
      sms: '',
    }
  },
  methods: {
    async onSubmit(values) {
      // 密码的哈希值
      const hashPassword = Base64.stringify(hmacSHA512(this.password, `${values.username}+${saltKey}`))
      const { data } = await registerAPI(values.username, hashPassword)
      console.log('submit', data)
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
.register-btn,
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
