import { App } from 'vue';

import WidgetSvg from './WidgetSvg.vue';

WidgetSvg.install = (app: App) => {
  app.component('WidgetSvg', WidgetSvg);
};

export * from './WidgetSvg.vue';

export { WidgetSvg };
