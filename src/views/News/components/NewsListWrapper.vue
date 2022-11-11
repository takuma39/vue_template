<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import PageList from "@/components/parts/pagination/PaginationItemComponent.vue";
import PageButton from "@/components/parts/pagination/PaginationBtnComponent.vue";
import NewsJson from "@/assets/json/news.json";

//型
type NewsObject = {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  text1: string;
  text2: string;
  text3: string;
};

//-----定数-----
const page = ref<number>(10);
//クローン＆並び替え
const News = JSON.parse(JSON.stringify(NewsJson)).sort(
  (a: NewsObject, b: NewsObject) => Date.parse(b.date) - Date.parse(a.date)
);

//-----変数-----
let curPage = ref<number>(1);
let pageNum = ref<number>(0);

//-----関数-----
const changePage = (value: number) => {
  curPage.value = value;
};

const calcPageNum = () => {
  pageNum.value = Math.ceil(News.length / page.value);
};

//-----computed-----
const displayItems = computed(() => {
  const startIdx = (curPage.value - 1) * page.value;
  const endIdx = startIdx + page.value;
  return News.slice(startIdx, endIdx);
});

//発火
calcPageNum();
</script>

<template>
  <section class="newsListWrapper">
    <div class="newsListWrapper__inner">
      <div class="newsListWrapper__body">
        <PageList :data="displayItems" />
      </div>
      <div class="newsListWrapper__pagination">
        <PageButton
          @changePage="changePage"
          v-for="n in pageNum"
          :key="n"
          :pageNumber="n"
          :curPage="curPage"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.newsListWrapper {
  @include section();
  &__inner {
    @include inner();
    max-width: 780px;
  }
  &__body {
    margin-bottom: 40px;
  }
  &__pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
