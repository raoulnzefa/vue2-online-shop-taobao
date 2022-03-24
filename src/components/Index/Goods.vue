<template>
  <div class="goods">
    <div class="left">
      <a href="#" class="good hot"></a>
      <lazy-component>
        <div v-for="(item, index) in aList" :key="index" class="good" v-lazy="item" @click="func">
          <img :src="item" alt="" width="90%" >
        </div>
      </lazy-component>
    </div>
    <div class="right">
      <lazy-component>
        <div v-for="(item, index) in aList" :key="index" class="good" v-lazy="item" @click="func">
          <img :src="item" alt="" width="90%" >
        </div>
      </lazy-component>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goods",
  data() {
    return {
      aList: Array(10).fill('https://img01.yzcdn.cn/vant/apple-2.jpg')
    }
  },

  methods: {
    func() {
      console.log("fuck you")
    }
  }
}
</script>

<style lang="less" scoped>
.goods {
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 0 10px;

  .left,
  .right {
    display: flex;
    flex-direction: column;
    flex-basis: 49%;
  }
  .good {
    width: 100%;
    height: 360px;
    border-radius: 8px;
    margin-bottom: 8px;
    background-color: skyblue;
  }
  .left .hot {
    height: 180px;
    background-color: red;
  }
}
</style>
