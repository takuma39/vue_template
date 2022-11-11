<script setup lang="ts">
import SnsJson from "@/assets/json/sns.json";

// props
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="snsList">
    <ShareNetwork
      v-for="n in SnsJson"
      :key="n.id"
      class="share-network"
      :network="n.network"
      :url="props.url"
      :title="props.title"
      :description="props.description"
    >
      <i :class="n.icon"></i>
      <div>{{ n.name }}</div>
    </ShareNetwork>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

.share-network {
  @include font-size(28);
  border-radius: 50%;
  position: relative;
  display: inline-block;
  width: 70px;
  height: 70px;
  font-size: 28px;
  color: #fff;
  text-decoration: none;
  transition: 0.5s;
  text-align: center;

  &:hover {
    color: #fff;
    text-decoration: none;
  }

  &:nth-child(n + 2) {
    margin-left: 12px;
  }

  i {
    position: relative;
    bottom: 0px;
  }

  div {
    @include font-size(10);
    font-weight: bold;
    letter-spacing: 0;
    position: relative;
    bottom: 11px;
  }

  &-twitter {
    border: solid 1px #55acee;
    color: #55acee;

    &:hover {
      border: solid 1px #55acee;
      background: #55acee;
    }
  }

  &-facebook {
    border: solid 1px #3b5998;
    color: #3b5998;

    &:hover {
      border: solid 1px #3b5998;
      background: #3b5998;
    }
  }

  &-line {
    border: solid 1px #00c300;
    color: #00c300;

    &:hover {
      border: solid 1px #00c300;
      background:#00c300;
    }
  }
}
</style>
