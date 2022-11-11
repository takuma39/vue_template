import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueSmoothScroll from "vue3-smooth-scroll";
import VueSocialSharing from "vue-social-sharing";

import "./assets/sass/app.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueSmoothScroll, {
  duration: 300,
});
app.use(VueSocialSharing);

app.mount("#app");
