import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { // 首页
    path: '/',
    name: 'Home',
    component: () => import('../views/Layout/index')
  },
  { // 热门课程 => 烘焙甜点全能班
    path: '/baking-almighty',
    name: 'BakingAlmighty',
    component: () => import('../views/Layout/PopularCourses/BakingAlmighty')
  },
  { // 热门课程 => 烘焙甜点金领班
    path: '/baking-gold-collar',
    name: '/BakingGoldCollar',
    component: () => import('../views/Layout/PopularCourses/BakingGoldCollar')
  },
  { // 热门课程 => 烘焙甜点经典班
    path: '/baking-classic',
    name: '/BakingClassic',
    component: () => import('../views/Layout/PopularCourses/BakingClassic')
  },
  { // 热门课程 => 西餐料理金领班
    path: '/cooking-gold-collar',
    name: '/CookingGoldCollar',
    component: () => import('../views/Layout/PopularCourses/CookingGoldCollar')
  },
  { // 热门课程 => 西餐料理精英班
    path: '/cooking-elite',
    name: '/CookingElite',
    component: () => import('../views/Layout/PopularCourses/CookingElite')
  },
  { // 热门课程 => 西餐料理简餐班
    path: '/cooking-simple',
    name: '/CookingSimple',
    component: () => import('../views/Layout/PopularCourses/CookingSimple')
  },
  { // 热门课程 => 精品调酒班
    path: '/bartending',
    name: '/Bartending',
    component: () => import('../views/Layout/PopularCourses/Bartending')
  },

  { // 热门课程 => 咖啡饮品班
    path: '/coffee',
    name: '/Coffee',
    component: () => import('../views/Layout/PopularCourses/Coffee')
  },
  { // 活力校园
    path: '/vibrant-campus',
    name: 'VibrantCampus',
    component: () => import('../views/Layout/VibrantCampus')
  },
  { // 名师风采
    path: '/famous-teacher',
    name: 'FamousTeacher',
    component: () => import('../views/Layout/FamousTeacher')
  },
  { // VR 看校园
    path: '/vr-campus',
    name: 'VRCampus',
    component: () => import('../views/Layout/VRCampus')
  },
  { // 品牌介绍
    path: '/brand-introduction',
    name: 'BrandIntroduction',
    component: () => import('../views/Layout/BrandIntroduction')
  },
  { // 创业指导
    path: '/entrepreneurship',
    name: 'Entrepreneurship',
    component: () => import('../views/Layout/Entrepreneurship')
  },
  { // 就业指导
    path: '/career-guidance',
    name: 'CareerGuidance',
    component: () => import('../views/Layout/CareerGuidance')
  },
]

const router = new VueRouter({
  routes
})

export default router
