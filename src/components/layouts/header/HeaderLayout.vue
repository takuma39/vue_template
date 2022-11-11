<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import SpMenu from "@/components/layouts/spMenu/SpMenuLayout.vue";

//ページ内スクロール
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
  <header class="header" :class="{ 'is-active': isActive }">
    <h1 class="logo">
      <router-link to="/">
        <img alt="logo" src="@/assets/images/logo/logo.svg" />
      </router-link>
    </h1>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/" class="nav__link">home</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/news" class="nav__link">news</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/service" class="nav__link">service</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/work" class="nav__link">work</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/company" class="nav__link">company</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/recruit" class="nav__link">recruit</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/contact" class="nav__link">contact</router-link>
        </li>
      </ul>
    </nav>
    <SpMenu />
  </header>
</template>

<style lang="scss">
@import "@/assets/sass/app2.scss";
.header {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 86px;
  padding: 0 30px;
  transition: all 0.3s;
  z-index: 10;

  // $break4: 768;
  @include mq(u-br4) {
    height: 64px;
    padding: 0 15px;
  }

  &.is-active {
    height: 64px;
    background-color: $color-primary-dark;
  }
}

.logo {
  width: 50px;
}

.nav {
  // $break4: 768;
  @include mq(u-br4) {
    display: none;
  }

  &__list {
    display: flex;
    padding-left: 30px;
  }

  &__item {
    &:not(:last-child) {
      margin-right: 25px;
    }
  }

  &__link {
    position: relative;
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    @include font-size(14);

    // $break5: 960;
    @include mq(u-br5) {
      @include font-size(12);
    }

    &::after {
      position: absolute;
      bottom: -5px;
      left: 0;
      display: block;
      width: 0;
      height: 1px;
      content: "";
      transition: width 0.3s;
      background-color: #fff;
    }

    &:hover {
      text-decoration: none;
      &::after {
        width: 100%;
      }
    }
  }
}
</style>
