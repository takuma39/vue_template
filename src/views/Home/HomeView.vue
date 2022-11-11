<script setup lang="ts">
import MainHero from "@/components/layouts/hero/MainHeroComponent.vue";
import Section from "./components/SectionComponent.vue";
import Sns from "@/components/parts/sns/SnsComponent.vue";
</script>

<template>
  <main>
    <MainHero />
    <Section />
    <Sns url="/" title="test" description="test" />
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

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
