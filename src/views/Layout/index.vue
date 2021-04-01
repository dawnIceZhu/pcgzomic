<template>
  <div class="Home">
    <div class="auto">
      <Header/>
      <Nav/>
    </div>
    <Carousel/>
    <WanderTab/>
    <Admissions/>
    <Tables/>
    <Consultant/>
    <IntroductionTab/>
    <Campus/>
    <StudentWorks/>
    <Guide/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/universal/Header'
import Nav from '@/components/universal/Nav'
import Carousel from '@/components/universal/Carousel'
import IntroductionTab from "@/components/indexCom/IntroductionTab"
import Consultant from "@/components/indexCom/Consultant"
import Tables from "@/components/indexCom/Tables"
import Admissions from "@/components/indexCom/Admissions"
import WanderTab from "@/components/indexCom/WanderTab"
import Campus from "@/components/indexCom/Campus"
import StudentWorks from "@/components/indexCom/StudentWorks"
import Guide from "@/components/indexCom/Guide"
import Footer from "@/components/universal/Footer"

export default {
  name: "Home",
  components: {
    Guide,
    StudentWorks,
    Campus,
    WanderTab,
    Admissions,
    Tables,
    Consultant,
    IntroductionTab,
    Header,
    Nav,
    Carousel,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
@import "src/styles/indexLess/Home";
</style>