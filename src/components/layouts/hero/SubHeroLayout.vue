<script setup lang="ts">
import Heading from "@/components/parts/heading/HeadingPrimaryComponent.vue";
const props = defineProps({
  en: {
    type: String,
    required: false,
    default: "",
  },
  ja: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <div class="subHero">
    <div class="subHero__inner">
      <Heading color="#fff">
        <template v-slot:en>{{ props.en }}</template>
        <template v-slot:ja>{{ props.ja }}</template>
      </Heading>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.subHero {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 240px;
  color: #fff;
  background-image: url(/static/images/hero/hero.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  // $break4: 768;
  @include mq(u-br4) {
    height: 180px;
  }
  &__inner {
    padding: 50px 40px 10px 40px;
    text-align: center;
  }
}
</style>
