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
  <h2
    class="heading-primary"
    :style="color"
    :class="{ ' color': props.color != '' }"
  >
    <slot name="en" />
    <span class="heading-primary__sub">
      <slot name="ja" />
    </span>
  </h2>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

.heading-primary {
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: $color-primary;

  @include font-size(36);
  // $break4: 768;
  @include mq(u-br4) {
    @include font-size(30);
  }

  &.color {
    color: var(--color);
  }
}

.heading-primary__sub {
  display: block;
  margin-top: 5px;
  letter-spacing: 0.05em;

  @include font-size(13);
}
</style>
