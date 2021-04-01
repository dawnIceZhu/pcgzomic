<template>
  <!-- 漫游卡 -->
  <div class="auto">
    <div class="wander-tab">
      <a-row :gutter="[8,7]">
        <a-col :span="4">
          <div></div>
          <p>Entrepreneurship</p>
          <p>创业</p>
        </a-col>
        <a-col :span="4">
          <div></div>
          <p>Obtain employment</p>
          <p>就业</p>
        </a-col>
        <a-col :span="4">
          <div></div>
          <p>hobby</p>
          <p>爱好</p>
        </a-col>
        <a-col :span="4">
          <div></div>
          <p>increase</p>
          <p>提高</p>
        </a-col>
        <a-col :span="4">
          <div></div>
          <p>Study tour</p>
          <p>游学</p>
        </a-col>
        <a-col :span="4">
          <div></div>
          <p>Regular class</p>
          <p>长期班</p>
        </a-col>
        <a-col :span="4">
          <div></div>
          <p>Weekend class</p>
          <p>短期班</p>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "WanderTab"
}
</script>

<style scoped lang="less">
@import "src/styles/indexLess/WanderTab";
</style>