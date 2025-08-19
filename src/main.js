import { createApp } from "vue";

import riffRouter from "./router/index.js";
import i18n from "./i18n/index.js";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(riffRouter);
app.use(i18n);
app.mount("#app");
