import { createApp } from 'vue';

// import 'virtual:svg-icons-register';

import widgets from '../components/index.ts';

import * as widgetCollection from '../components/index.ts';

import routers from './routers.js';

import Main from './Main.vue';

const main = createApp(Main);

main.use(routers).use(widgets).mount('#main');
