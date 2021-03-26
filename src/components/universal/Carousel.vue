<template>
  <div class="carousel">
    <a-carousel effect="fade" :autoplay="true">
      <div>
        <img src="http://www.gzomick.com/statics/banner/banner-cjybm.jpg" alt="">
      </div>
      <div>
        <img src="http://www.gzomick.com/statics/banner/banner-pc-cxz1.jpg" alt="">
      </div>
      <div>
        <img src="http://www.gzomick.com/statics/banner/banner-pc-ss.jpg" alt="">
      </div>
      <div>
        <img src="http://www.gzomick.com/statics/banner/banner_pc_3.jpg" alt="">
      </div>
      <div>
        <img src="http://www.gzomick.com/statics/banner/banner-px-xskt.jpg" alt="">
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel"
}
</script>

<style lang="less">
.carousel {
  //width: 1980px;
  //height: 450px;
  //margin: 0 auto;

  img {
    //max-height: 450px;
    width: 100%;
    object-fit: cover;
  }
}
</style>