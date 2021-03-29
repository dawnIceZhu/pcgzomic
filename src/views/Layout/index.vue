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
  </div>
</template>

<script>
import Header from '@/components/universal/Header'
import Nav from '@/components/universal/Nav'
import Carousel from '@/components/universal/Carousel'
import IntroductionTab from "@/components/IntroductionTab"
import Consultant from "@/components/Consultant"
import Tables from "@/components/Tables"
import Admissions from "@/components/Admissions"
import WanderTab from "@/components/WanderTab"
import Campus from "@/components/Campus";
import StudentWorks from "@/components/StudentWorks";

export default {
  name: "Home",
  components: {
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
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
@import "../../styles/Home";
</style>