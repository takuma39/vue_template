<script setup lang="ts">
import { ref } from "vue";
let isActive = ref<boolean>(false);
window.addEventListener("scroll", () => {
  let position: number = document.documentElement.scrollTop;

  if (position > 0) {
    isActive.value = true;
  } else {
    isActive.value = false;
  }
});
</script>

<template>
  <transition name="active">
    <div class="page-top" v-show="isActive">
      <a href="#app" v-smooth-scroll class="page-top__link">
        <i class="fas fa-arrow-up" aria-hidden="true"></i>
      </a>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

.active {
  &-enter {
    &-from {
      opacity: 0;
    }
    &-to {
      opacity: 1;
    }
    &-active {
      transition: opacity 0.3s;
    }
  }
  &-leave {
    &-from {
      opacity: 1;
    }
    &-to {
      opacity: 0;
    }
    &-active {
      transition: opacity 0.3s;
    }
  }
}
.page-top {
  position: fixed;
  right: 45px;
  bottom: 45px;
  z-index: 1;

  // $break4: 768;
  @include mq(u-br4) {
    right: 20px;
    bottom: 20px;
  }
  &__link {
    display: block;
    width: 50px;
    height: 50px;
    padding: 12px;
    text-align: center;
    text-decoration: none;
    color: $color-primary;
    box-shadow: 0 0 6px rgb(0 0 0 / 20%);
    background-color: #fff;
    border-radius: 50%;
    &:hover {
      opacity: 0.8;

      // $break4: 768;
      @include mq(u-br4) {
        opacity: 1;
      }
    }
  }
}
</style>
