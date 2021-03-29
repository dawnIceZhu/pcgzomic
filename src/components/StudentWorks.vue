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
            Content of Tab Pane 2
          </a-tab-pane>
          <a-tab-pane key="3" tab="精品调酒 /Mixology">
            Content of Tab Pane 3
          </a-tab-pane>
          <a-tab-pane key="4" tab="咖啡饮品 /Coffee">
            Content of Tab Pane 4
          </a-tab-pane>
        </a-tabs>
      </div>
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