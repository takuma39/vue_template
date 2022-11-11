<script setup lang="ts"></script>

<template>
  <h3 class="heading-large">
    <slot name="large" />
    <span class="heading-large__sub">
      <slot name="small" />
    </span>
  </h3>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.heading-large {
  line-height: 1;
  margin-bottom: 10px;
  color: $color-primary;

  @include font-size(72);
  // $break4: 768;
  @include mq(u-br4) {
    line-height: 1.2;

    @include font-size(48);
  }
}

.heading-large__sub {
  display: block;
  margin-top: 5px;
  @include font-size(32);

  // $break4: 768;
  @include mq(u-br4) {
    @include font-size(18);
  }
}

</style>
