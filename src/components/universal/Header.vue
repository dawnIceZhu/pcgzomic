<template>
  <header>
    <a-row>
      <a-col :span="12">
        <router-link to="/">
          <img src="@/assets/public/headLogo.png" alt="logo">
        </router-link>
      </a-col>
      <a-col :span="12">
        <img src="@/assets/public/tip.png" alt="">
      </a-col>
    </a-row>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="less">
header {
  .ant-row {
    height: 130px;
    padding: 24px 40px 24px 10px;

    .ant-col {
      &:first-child {
        img {
          float: left;
        }
      }

      &:last-child {
        img {
          float: right;
        }
      }
    }
  }
}
</style>