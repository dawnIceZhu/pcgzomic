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

export default {
  name: "Home",
  components: {
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