<template>
<div class="banner">
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item, index) in imgList" :key="index">
      <a href="#">
        <img src="../../assets/index/tianmao.png" alt="">
        <div>天猫{{item+1}}</div>
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'SwipeBanner',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      imgList: Array.from({length:25}, (v,k) => k),
      swiperOption: {
        slidesPerView: 5,
        slidesPerColumn: 2,
        roundLengths: true,
        slidesPerGroup: 5,
        // 指示器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
// 原为1，不设置堆叠顺序，就会把其他标签覆盖
.swiper-container {
  z-index: 0;
}

.swiper {
  height: 150px;
  --swiper-pagination-color: orange;
  margin-left: auto;
  margin-right: auto;

  .swiper-slide {
    height: 70px;
    img {
      height: 36px;
    }
  }
}
</style>
