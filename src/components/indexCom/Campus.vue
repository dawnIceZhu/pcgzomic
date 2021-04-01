<template>
  <!-- 校园tab -->
  <div class="campus">
    <div class="auto">
      <div class="campus-title">
        <img src="http://www.gzomick.com/statics/images/index/title_item1.png" alt="">
      </div>
      <div class="campus-content">
        <div class="campus-btn">
          <div>
            <img src="http://www.gzomick.com/statics/images/index/campus_btn1_2.png" alt="">
          </div>
          <div>
            <img src="http://www.gzomick.com/statics/images/index/campus_btn2_2.png" alt="">
          </div>
          <div>
            <img src="http://www.gzomick.com/statics/images/index/campus_btn3_2.png" alt="">
          </div>
        </div>
        <div class="campus-img">
          <img src="http://www.gzomick.com/statics/images/index/campus_img.png" alt="">
        </div>
        <div class="campus-img">
          <img src="http://www.gzomick.com/statics/images/index/campus_img2.png" alt="">
        </div>
        <div class="campus-img">
          <img src="http://www.gzomick.com/statics/images/index/campus_img3.png" alt="">
        </div>
      </div>
      <div class="campus-link">
        <router-link to="">
          <span>没有基础能学会吗？</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Campus"
}
</script>

<style scoped lang="less">
@import "src/styles/indexLess/Campus";
</style>