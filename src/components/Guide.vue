<template>
  <!-- 创就业指导 -->
  <div class="guide">
    <div class="auto">
      <div class="guide-title"></div>
      <div class="guide-details">
        <ul>
          <li>
            <router-link to="">
              <img src="http://www.gzomick.com/statics/images/index/cmplovment-item1.jpg" alt="">
            </router-link>
          </li>
          <li>
            <router-link to="">
              <img src="http://www.gzomick.com/statics/images/index/cmplovment-item2.jpg" alt="">
            </router-link>
          </li>
          <li>
            <router-link to="">
              <img src="http://www.gzomick.com/statics/images/index/cmplovment-item3.jpg" alt="">
            </router-link>
          </li>
        </ul>
      </div>
      <div class="guide-what">
        <router-link to="">
          <span>学完可以去哪些企业就业？</span>
        </router-link>
      </div>
      <div class="guide-cooperation">
        <div class="cooperation-title"></div>
        <div class="cooperation-content">
          <div class="cooperation-carousel">

          </div>
          <div class="carousel-prev"></div>
          <div class="carousel-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Guide"
}
</script>

<style scoped lang="less">
@import "../../src/styles/Guide";
</style>