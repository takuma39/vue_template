<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
let open = ref<boolean>(false);
</script>

<template>
  <div class="menuBtn" :class="{ 'is-active': open }" v-on:click="open = !open">
    <span></span><span></span><span></span>
  </div>

  <div class="spMenu" v-bind:class="{ 'is-active': open }">
    <div class="spMenu__item">
      <router-link to="/" v-on:click="open = !open">Home</router-link>
    </div>
    <div class="spMenu__item">
      <router-link to="/" v-on:click="open = !open">Concept</router-link>
    </div>
    <div class="spMenu__item">
      <router-link to="/" v-on:click="open = !open">Product</router-link>
    </div>
    <div class="spMenu__item">
      <router-link to="/" v-on:click="open = !open">Shop</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/app2.scss";

/*----------------------------
* menuBtn
*----------------------------*/
.menuBtn {
  cursor: pointer;
  position: relative;
  z-index: 9999999999;
  width: 50px;
  height: 50px;
  transition: all 0.4s;
  display: none;

  // $break4: 768;
  @include mq(u-br4) {
    display: block;
  }
  span {
    display: inline-block;
    transition: all 0.4s;
    position: absolute;
    left: 14px;
    height: 3px;
    border-radius: 2px;
    background: $color-primary;
    width: 45%;

    &:nth-of-type(1) {
      top: 15px;
    }

    &:nth-of-type(2) {
      top: 23px;
    }

    &:nth-of-type(3) {
      top: 31px;
    }
  }
}

/*----------------------------
* menuBtn is-active
*----------------------------*/
.menuBtn.is-active {
  transform: rotateY(-360deg);

  span {
    &:nth-of-type(1) {
      top: 18px;
      left: 18px;
      transform: translateY(6px) rotate(-135deg);
      width: 30%;
    }

    &:nth-of-type(2) {
      opacity: 0;
    }

    &:nth-of-type(3){
      top: 30px;
      left: 18px;
      transform: translateY(-6px) rotate(135deg);
      width: 30%;
    }
  }
}

/*----------------------------
* spMenu
*----------------------------*/
.spMenu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999999999;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba($color: #fff, $alpha: 1);

  &__item {
    width: 100%;
    height: auto;
    text-align: center;

    &:nth-child(n + 2) {
      margin-top: 24px;
    }

    a {
      @include font-size(40);
      font-weight: bold;
      transition: all 0.2s;
      color: $color-secondary;

      &.router-link-exact-active {
        color: $color-primary;
      }

      &:hover {
        color: $color-primary;
      }
    }
  }
}

/*----------------------------
* spMenu ?????????????????????
*----------------------------*/

.spMenu {
  transition: all 0.3s linear;
  visibility: hidden;
  opacity: 0;

  &.is-active {
    display: flex;
    visibility: visible;
    opacity: 1;
  }
}
</style>
