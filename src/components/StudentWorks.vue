<template>
  <!-- 学员作品 -->
  <div class="student-works">
    <div class="auto">
      <div class="works-title">
        <img src="http://www.gzomick.com/statics/images/index/title_item3.jpg" alt="">
      </div>
      <div class="works-tab">
        <a-tabs default-active-key="1" @change="callback">
          <a-tab-pane key="1" tab="烘焙甜点 /Bakery&Desserts">
            <div class="pane-content">
              <div class="pane-left">
                <router-link to="">
                  <img src="http://www.gzomick.com/statics/images/index/xd_food2.jpg" alt="">
                </router-link>
              </div>
              <div class="pane-right">
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/statics/images/index/xd_food1.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/statics/images/index/xd_food3.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/statics/images/index/xd_food4.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/statics/images/index/xd_food5.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/statics/images/index/xd_food6.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/statics/images/index/xd_food7.jpg" alt=""></router-link>
                </div>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="西餐料理 /Western Cuisine" force-render>
            <div class="pane-content">
              <div class="pane-left">
                <router-link to="">
                  <img src="http://www.gzomick.com/images/works/xc/xc1.jpg" alt="">
                </router-link>
              </div>
              <div class="pane-right">
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/images/works/xc/xc2.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/images/works/xc/xc3.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/images/works/xc/xc4.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/images/works/xc/xc5.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/images/works/xc/xc6.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/images/works/xc/xc7.jpg" alt=""></router-link>
                </div>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="3" tab="精品调酒 /Mixology">
            <div class="pane-content">
              <div class="pane-left">
                <router-link to="">
                  <img src="http://www.gzomick.com/statics/images/index/tj_food1.jpg" alt="">
                </router-link>
              </div>
              <div class="pane-right">
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/statics/images/index/tj_food2.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/statics/images/index/tj_food3.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/statics/images/index/tj_food4.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/statics/images/index/tj_food5.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/statics/images/index/tj_food6.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/statics/images/index/tj_food7.jpg" alt=""></router-link>
                </div>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="4" tab="咖啡饮品 /Coffee">
            <div class="pane-content">
              <div class="pane-left">
                <router-link to="">
                  <img src="http://www.gzomick.com/statics/images/index/kf_food1.jpg" alt="">
                </router-link>
              </div>
              <div class="pane-right">
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/images/works/kf/kf2.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/images/works/kf/kf3.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/images/works/kf/kf4.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/images/works/kf/kf5.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/images/works/kf/kf6.jpg" alt=""></router-link>
                </div>
                <div>
                  <router-link to=""><img src="http://www.gzomick.com/images/works/kf/kf7.jpg" alt=""></router-link>
                </div>
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
      <div class="works-what">
        <router-link to="">
          <span>想去创业学什么专业好？</span>
        </router-link>
      </div>
    </div>
    <div class="img-fix">
      <img src="http://www.gzomick.com/statics/images/index/img-bg-icon12.png" alt="">
    </div>
    <div class="img-fix2">
      <img src="http://www.gzomick.com/statics/images/index/img-bg-icon10.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentWorks",
  data() {
    return {}
  },
  methods: {
    callback(key) {
      console.log(key)
    }
  }
}
</script>

<style scoped lang="less">
@import "src/styles/StudentWorks";
</style>