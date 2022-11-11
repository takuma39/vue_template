<script setup lang="ts">
import SubHero from "@/components/layouts/hero/SubHeroLayout.vue";
import Breadcrumb from "@/components/layouts/breadcrumb/BreadcrumbLayout.vue";
import Section from "./components/SectionComponent.vue";

const breadcrumbs = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "recruit",
  },
];
</script>

<template>
  <main>
    <SubHero en="recruit" ja="採用情報" />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <Section />
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

main {
  height: 200vh;
  background-color: rgb(142, 151, 235);
}
// ブレイクポイント見本
.test {
  // over
  // $break1: 340;
  @include mq(o-br1) {
  }
  // $break2: 480;
  @include mq(o-br2) {
  }
  // $break3: 600;
  @include mq(o-br3) {
  }
  // $break4: 768;
  @include mq(o-br4) {
  }
  // $break5: 960;
  @include mq(o-br5) {
  }
  // $break6: 1140;
  @include mq(o-br6) {
  }
  // under
  // $break6: 1140;
  @include mq(u-br6) {
  }
  // $break5: 960;
  @include mq(u-br5) {
  }
  // $break4: 768;
  @include mq(u-br4) {
  }
  // $break3: 600;
  @include mq(u-br3) {
  }
  // $break2: 480;
  @include mq(u-br2) {
  }
  // $break1: 380;
  @include mq(u-br1) {
  }
  // $break1: 330;
  @include mq(u-br0) {
  }
}
</style>
