import { App } from 'vue';

import WidgetCode from './WidgetCode.vue';

WidgetCode.install = (app: App) => {
  app.component('WidgetCode', WidgetCode);
};

export { WidgetCode };
