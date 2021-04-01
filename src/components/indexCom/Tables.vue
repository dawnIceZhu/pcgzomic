<template>
  <!-- 专业, 学制, 名额, 剩余名额 tab栏 -->
  <div class="tables">
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
  name: "Table",
  data() {
    return {
      columns,
      dataLeft,
      dataRight
    }
  }
}
</script>

<style scoped lang="less">
@import "src/styles/indexLess/Tables";
</style>