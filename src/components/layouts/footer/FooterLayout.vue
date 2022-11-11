<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="footer">
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
    <div class="copyright">
      <a href="." class="copyright__link">&copy;portfolio</a>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/sass/app2.scss";
.footer {
  padding: 60px 30px;
  background-color: #120e19;
}

.nav {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;

    // $break4: 768;
    @include mq(u-br4) {
      justify-content: flex-start;
      margin-bottom: -10px;
    }
  }

  &__item {
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #e9e1d1;

    @include font-size(12);
    // $break4: 768;
    @include mq(u-br4) {
      margin-bottom: 10px;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  &__link {
    line-height: 1;
    padding: 5px;
    color: #fff;

    &:hover {
      text-decoration: none;
      opacity: 0.8;
    }
  }
}

.copyright {
  margin-top: 30px;
  text-align: center;

  @include font-size(10);
  &__link {
    text-decoration: none;
    color: #a798b7;
    &:hover {
      text-decoration: none;
      opacity: 0.8;
    }
  }
}
</style>
