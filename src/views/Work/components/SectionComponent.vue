<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import Heading from "@/components/parts/heading/HeadingPrimaryComponent.vue";

const props = defineProps({
  count: {
    type: Number,
    required: false,
  },
});
</script>
<template>
  <section class="section">
    <p>section</p>
    <div class="section__inner">
      <p>inner</p>
      <div class="section__heading">
        <Heading>
          <template v-slot:en>service</template>
          <template v-slot:ja>事業内容</template>
        </Heading>
      </div>

      <div class="section__body">
        <p>body</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.section {
  @include section();
  background-color: rgb(243, 239, 255);

  &__inner {
    @include inner();
    background-color: rgb(231, 224, 255);
  }

  &__heading {
    margin-bottom: 30px;
    text-align: center;
  }

  &__body {
    height: 600px;
    background-color: rgb(178, 157, 248);
  }
}
</style>
