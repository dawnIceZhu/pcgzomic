<template>
  <nav>
    <a-row :gutter="[8,8]">
      <router-link to="/">
        <a-col :span="3">
          <h3>首页</h3>
          <p>Home</p>
        </a-col>
      </router-link>
      <a-col :span="3">
        <a-dropdown>
          <h3 class="ant-dropdown-link" @click="e => e.preventDefault()">热门课程</h3>
          <a-menu slot="overlay">
            <a-menu-item>
              <router-link to="/baking-almighty">烘焙甜品全能班</router-link>
            </a-menu-item>
            <a-menu-item>
              <router-link to="/baking-gold-collar">烘焙甜点金领班</router-link>
            </a-menu-item>
            <a-menu-item>
              <router-link to="/baking-classic">烘焙甜点经典班</router-link>
            </a-menu-item>
            <a-menu-item>
              <router-link to="/cooking-gold-collar">西餐料理金领班</router-link>
            </a-menu-item>
            <a-menu-item>
              <router-link to="/cooking-elite">西餐料理精英班</router-link>
            </a-menu-item>
            <a-menu-item>
              <router-link to="cooking-simple">西餐料理简餐班</router-link>
            </a-menu-item>
            <a-menu-item>
              <router-link to="/bartending">精品调酒班</router-link>
            </a-menu-item>
            <a-menu-item>
              <router-link to="/coffee">咖啡饮品班</router-link>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <p>popular courses</p>
      </a-col>
      <router-link to="/vibrant-campus">
        <a-col :span="3">
          <h3>活力校园</h3>
          <p>campus life</p>
        </a-col>
      </router-link>
      <router-link to="/famous-teacher">
        <a-col :span="3">
          <h3>名师风采</h3>
          <p>Our teacher</p>
        </a-col>
      </router-link>
      <router-link to="/vr-campus">
        <a-col :span="3">
          <h3>VR看校园</h3>
          <p>VR School</p>
        </a-col>
      </router-link>
      <router-link to="/brand-introduction">
        <a-col :span="3">
          <h3>品牌介绍</h3>
          <p>Our brand</p>
        </a-col>
      </router-link>
      <router-link to="/entrepreneurship">
        <a-col :span="3">
          <h3>创业指导</h3>
          <p>Entrepreneurship</p>
        </a-col>
      </router-link>
      <router-link to="/career-guidance">
        <a-col :span="3">
          <h3>就业指导</h3>
          <p>mployment</p>
        </a-col>
      </router-link>
    </a-row>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped lang="less">
nav {
  margin-top: 10px;

  .ant-col {
    height: 66px;
    border-right: 1px solid #c4c4c4;
    padding-top: 13px !important;

    h3 {
      text-align: center;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
    }

    p {
      text-align: center;
      font-size: 8px;
    }
  }
}
</style>