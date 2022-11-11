<script setup lang="ts">
//props
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <ul class="newsList">
    <li class="newsList__item" v-for="item in props.data" :key="item.id">
      <div class="newsList__heading">
        <time :datetime="item.date" class="newsList__date">
          {{ item.date }}
        </time>
        <div class="newsList__label">
          <p>{{ item.category }}</p>
        </div>
      </div>
      <div class="newsList__body">
        <router-link
          :to="{ name: 'single', params: { id: item.id } }"
          class="newsList__link"
        >
          {{ item.title }}
        </router-link>
      </div>
    </li>
  </ul>
</template>
<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.newsList {
  &__item {
    display: flex;
    @include font-size(14);

    // $break4: 768;
    @include mq(u-br4) {
      display: block;
    }
    &:not(:last-child) {
      margin-bottom: 15px;

      // $break4: 768;
      @include mq(u-br4) {
        margin-bottom: 30px;
      }
    }
  }
  &__heading {
    display: flex;

    // $break4: 768;
    @include mq(u-br4) {
      margin-bottom: 3px;
    }
  }
  &__body {
    flex: 1;
  }
  &__link {
    color: $color-text;
  }
  &__date {
    margin-right: 20px;
  }
  &__label {
    margin-right: 20px;
  }
}
</style>
