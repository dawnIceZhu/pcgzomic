<template>
  <!-- 热门专业tab栏 -->
  <div class="introduction-tab">
    <div class="auto">
      <div class="title-tab">
        <img src="http://www.gzomick.com/statics/images/index/img-bg-icon4.png" alt="">
      </div>
      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane key="1" tab="烘焙甜点 /Bakery&Desserts">
          <div class="tabs-box">
            <div class="box-bg bg1">
              <div class="box-left"></div>
              <div class="box-content">
                <h2>Bakery&Desserts Course</h2>
                <h2>烘焙甜点专业</h2>
                <div class="box-time">学习时间：60/180/300个学习日</div>
                <div class="box-bor"></div>
                <p>可获得: </p>
                <ul>
                  <li>可报考初级/中级西式面点师</li>
                  <li>实操教学，实操为主，理论为辅</li>
                  <li>签订就业协议，合格学员推荐就业</li>
                </ul>
                <router-link to="">
                  了解专业详情
                </router-link>
              </div>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="西餐料理 /Western Cuisine" force-render>
          <div class="tabs-box">
            <div class="box-bg bg2">
              <div class="box-left"></div>
              <div class="box-content">
                <h2>Western Cuisine Course</h2>
                <h2>西餐料理专业</h2>
                <div class="box-time">学习时间：120/180个学习日</div>
                <div class="box-bor"></div>
                <p>可获得: </p>
                <ul>
                  <li>可报考初级/中级西式烹调师</li>
                  <li>实操教学，实操为主，理论为辅</li>
                  <li>签订就业协议，合格学员推荐就业</li>
                </ul>
                <router-link to="">
                  了解专业详情
                </router-link>
              </div>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="精品调酒 /Mixology">
          <div class="tabs-box">
            <div class="box-bg bg3">
              <div class="box-left"></div>
              <div class="box-content">
                <h2>Mixology Cours</h2>
                <h2>精品调酒专业</h2>
                <div class="box-time">学习时间：40个学习日</div>
                <div class="box-bor"></div>
                <p>可获得: </p>
                <ul>
                  <li>国内创新情景教学模式，实操教学</li>
                  <li>创业人员提供专业的创业营销课程</li>
                </ul>
                <router-link to="">
                  了解专业详情
                </router-link>
              </div>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="4" tab="饮品咖啡 /Coffee">
          <div class="tabs-box">
            <div class="box-bg bg4">
              <div class="box-left"></div>
              <div class="box-content">
                <h2>Coffee Course</h2>
                <h2>咖啡饮品专业</h2>
                <div class="box-time">学习时间：20个学习日</div>
                <div class="box-bor"></div>
                <p>可获得: </p>
                <ul>
                  <li>国内创新情景教学模式，实操教学</li>
                  <li>引进意大利品牌Nuova教学设备</li>
                </ul>
                <router-link to="">
                  了解专业详情
                </router-link>
              </div>
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
      <div class="box-link">
        <router-link to="">
          <span>女生可以学什么专业？</span>
        </router-link>
        <router-link to="">
          <span>男生可以学什么专业？</span>
        </router-link>
      </div>
      <div class="po-bg">
        <img src="http://www.gzomick.com/statics/images/index/img-bg-icon6.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionTab",
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
@import "src/styles/indexLess/IntroductionTab";
</style>