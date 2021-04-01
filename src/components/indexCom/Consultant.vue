<template>
  <!-- carousel-3d 轮播图 -->
  <div class="consultant">
    <div class="fix-img">
      <img src="http://www.gzomick.com/statics/images/index/img-bg-icon3.png" alt="">
    </div>

    <carousel-3d>
      <slide v-for="(i, index) in list" :key="index" :index="index">
        <img :src="i">
      </slide>
    </carousel-3d>

    <div class="floor">
      <ul>
        <li>
          <div>
            <p class="text-name">Nikita Gusev/尼基塔古斯夫</p>
            <p class="text-title">欧米奇西点技术顾问</p>
            <p>擅长：精通西点创意设计</p>
            <p>
              履历：<br>
              曾在Sweet Gift蛋糕店、莫斯科奥萨蛋糕<br>
              店、韩国烹饪学校，担任蛋糕设计师、雕刻师、西点教师等职务。<br>
              荣誉：俄国蛋糕比赛银奖、俄国蛋糕比赛金奖、国际蛋糕杯比赛金奖<br>
              韩国蛋糕比赛金奖。
            </p>
          </div>
          <img src="http://www.gzomick.com/statics/images/index/teachers_info_img_1.jpg" alt="">
        </li>
      </ul>
    </div>

    <div class="omick-what">
      <router-link to="">
        <span>欧米奇学费怎么样?</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Consultant",
  data() {
    return {
      // list: Array(5).fill().map((_, i) => `http://lorempixel.com/400/200/sports/${i}/`)
      list: Array(5).fill().map((_, i) => `http://www.gzomick.com/statics/images/index/teachers_swiper${i + 1}.jpg`)
    }
  }
}
</script>

<style scoped lang="less">
@import "src/styles/indexLess/Consultant";
</style>