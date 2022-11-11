<script setup lang="ts">
const props = defineProps({
  breadcrumbs: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="breadcrumb">
    <div class="breadcrumb__inner">
      <ul class="breadcrumb__list">
        <li
          class="breadcrumb__item"
          v-for="breadcrumb in props.breadcrumbs"
          :key="breadcrumb.name"
        >
          <router-link
            v-if="breadcrumb.path"
            :to="breadcrumb.path"
            class="breadcrumb__link"
          >
            {{ breadcrumb.name }}
          </router-link>
          <span v-else class="breadcrumb__text">{{ breadcrumb.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.breadcrumb {
  position: sticky;
  top: 64px;
  z-index: 1;
  padding: 8px 0;
  list-style: none;
  background-color: $color-gray;

  // $break4: 768;
  @include mq(u-br4) {
    padding: 5px 0;
  }

  &__inner {
    @include inner();
  }

  &__list {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__item {
    display: inline;
    list-style: none;
    text-transform: uppercase;

    @include font-size(12);
    // $break4: 768;
    @include mq(u-br4) {
      @include font-size(11);
    }

    &::after {
      padding: 0 0.5em;
      content: " > ";
      color: #555;
    }
    &:last-child:after {
      content: "";
    }
  }
}

.breadcrumb:before,
.breadcrumb:after {
  content: "";
  display: table;
}
</style>
