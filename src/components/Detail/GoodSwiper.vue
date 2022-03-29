<template>
  <van-swipe :autoplay="5000" @change="onChange">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" class="good-pic">
    </van-swipe-item>
    <template #indicator>
      <div class="custom-indicator">{{ active + 1 }}/{{ images.length }}</div>
    </template>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
export default {
  name: "GoodSwiper",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data() {
    return {
      images: [
          'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
        'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
        'https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
        'https://cdn.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
      ],
      active: 0,
    }
  },
  methods: {
    onChange(index) {
      this.active = index;
    },
  },
}
</script>

<style lang="less" scoped>
.van-swipe,
.good-pic {
  width: 100%;
  height: 475px;
}
// 指示器
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  border-radius: 8px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
