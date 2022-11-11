<script setup lang="ts">
</script>

<template>
  <div class="mainHero">
    <div class="mainHero__inner">
      <div class="mainHero__heading">
        <h1 class="mainHero__title">Portfolio</h1>
        <p class="mainHero__subtitle">Vue3 + TypeScript + Vite</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

.mainHero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  background-image: url(/static/images/hero/hero.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &__inner {
    width: 100%;
    padding: 0 30px;
    text-align: center;
    position: relative;

    // $break4: 768;
    @include mq(u-br4) {
      text-align: left;
    }
  }

  &__title {
    font-weight: bold;
    line-height: 1;
    @include font-size(72);

    // $break4: 768;
    @include mq(u-br4) {
      line-height: 1.1;

      @include font-size(40);
    }
  }

  &__subtitle {
    margin-top: 20px;
    letter-spacing: 0.1em;
    @include font-size(24);

    // $break4: 768;
    @include mq(u-br4) {
      @include font-size(16);
    }
  }
}
</style>
