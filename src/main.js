import { createApp } from "vue";
import App from "./App.vue";
import clickOutside from "@/directives/click-outside";
import router from "./router";

const nacometaApp = createApp(App);

nacometaApp.use(clickOutside);
nacometaApp.use(router);
nacometaApp.mount("#app");
