import { createApp } from "vue";
import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";

import riffRouter from "./router/index.js";
import i18n from "./i18n/index.js";
import "./style.css";
import "./assets/css/typography.css";
import "./assets/css/animations.css";
import App from "./App.vue";

const app = createApp(App);

const queryClient = new QueryClient();

app.use(riffRouter);
app.use(i18n);
app.use(VueQueryPlugin, { queryClient });
app.mount("#app");
