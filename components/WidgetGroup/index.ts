import { App } from 'vue';

import WidgetGroup from './WidgetGroup.vue';

WidgetGroup.install = (app: App) => {
  app.component('WidgetGroup', WidgetGroup);
};

export * from './WidgetGroup.vue';

export { WidgetGroup };
