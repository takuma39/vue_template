<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from '@/components/layouts/header/HeaderLayout.vue';
import Footer from '@/components/layouts/footer/FooterLayout.vue';
import PageTop from '@/components/layouts/pageTop/PageTopLayout.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <PageTop />
</template>

<style scoped lang="scss"></style>
