<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: "",
  },
});

// computed
const color = computed(() => {
  return {
    "--color": props.color,
  };
});
</script>

<template>
  <h3
    class="heading-primary"
    :style="color"
    :class="{ ' color': props.color != '' }"
  >
    <slot />
  </h3>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

.heading-primary {
  font-weight: bold;
  line-height: 1;
  color: $color-primary;

  @include font-size(32);
  // $break4: 768;
  @include mq(u-br4) {
    @include font-size(24);
  }

  &.color {
    color: var(--color);
  }
}
</style>
