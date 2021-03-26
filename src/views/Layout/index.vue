<template>
  <div class="index">
    <div class="auto">
      <Header/>
      <Nav/>
    </div>
    <Carousel/>
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
    <div class="admissions">
      <router-link to="">
        <img src="http://www.gzomick.com/statics/images/index/tip-banner-zx.jpg" alt="">
      </router-link>
    </div>
    <div class="auto">
      <div class="table">
        <a-table :columns="columns" :data-source="dataLeft" :pagination="false">
          <a slot="name" slot-scope="text">{{ text }}</a>
        </a-table>
        <a-table :columns="columns" :data-source="dataRight" :pagination="false">
          <a slot="name" slot-scope="text">{{ text }}</a>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Carousel from '@/components/Carousel'

const columns = [
  {
    title: '专业',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: {customRender: 'name'}
  },
  {
    title: '学制',
    dataIndex: 'schoolSystem',
    key: 'address 1',
    ellipsis: true
  },
  {
    title: '名额',
    dataIndex: 'quota',
    key: 'address 2',
    ellipsis: true
  },
  {
    title: '剩余名额',
    dataIndex: 'remaining',
    key: 'address 3',
    ellipsis: true
  }
]
const dataLeft = [
  {
    key: '1',
    name: '烘焙甜点全能班',
    schoolSystem: '15个月',
    quota: 24,
    remaining: 9,
  },
  {
    key: '2',
    name: '烘焙甜点金领班',
    schoolSystem: '9个月',
    quota: 24,
    remaining: 7,
  },
  {
    key: '3',
    name: '烘焙甜点经典班',
    schoolSystem: '3个月',
    quota: 24,
    remaining: 5,
  },
  {
    key: '4',
    name: '咖啡饮品班',
    schoolSystem: '1个月',
    quota: 24,
    remaining: 8,
  },
]
const dataRight = [
  {
    key: '5',
    name: '西餐料理金领班',
    schoolSystem: '9个月',
    quota: 24,
    remaining: 6,
  },
  {
    key: '6',
    name: '西餐料理精英班',
    schoolSystem: '6个月',
    quota: 24,
    remaining: 5,
  },
  {
    key: '7',
    name: '西餐料理简餐班',
    schoolSystem: '1个月',
    quota: 24,
    remaining: 8,
  },
  {
    key: '8',
    name: '精品调酒班',
    schoolSystem: '2个月',
    quota: 24,
    remaining: 8,
  },
]

export default {
  name: "Home",
  components: {
    Header,
    Nav,
    Carousel,
  },
  data() {
    return {
      dataLeft,
      dataRight,
      columns
    }
  }
}
</script>

<style scoped lang="less">
@import "src/styles/index";
</style>