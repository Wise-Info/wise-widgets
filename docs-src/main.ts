import { createApp } from "vue";

// import 'virtual:svg-icons-register';

import widgets from "@wiseinfo/wise-widgets";

import routers from "./routers.ts";

import "./styles/main.scss";

import Main from "./Main.vue";

const main = createApp(Main);

main.use(routers).use(widgets).mount("#main");
