<script setup lang="ts">
import { computed } from "vue";

//props
const props = defineProps({
  pageNumber: {
    type: Number,
    required: true,
  },
  curPage: {
    type: Number,
    required: true,
  },
});

//computed
const isCurrentPage = computed(() => {
  return props.pageNumber === props.curPage;
});

//emit
const btnPressed = defineEmits(["changePage"]);
</script>

<template>
  <button
    @click="btnPressed('changePage', props.pageNumber)"
    class="paginationBtn"
    :class="{ active: isCurrentPage }"
  >
    {{ pageNumber }}
  </button>
</template>
<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.paginationBtn {
  @include font-size(20);
  font-weight: bold;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #f1ebf8;

  &:hover {
    background-image: linear-gradient(135deg, #7633a4, #250d65);
    color: #fff;
  }

  &.active {
    color: #fff;
    background-image: linear-gradient(135deg, #7633a4, #250d65);
  }
}
</style>
