import type { App } from 'vue';

import WidgetSwitch from './WidgetSwitch.vue';

WidgetSwitch.install = (app: App) => {
  app.component('WidgetSwitch', WidgetSwitch);
};

export * from './WidgetSwitch.vue';

export { WidgetSwitch };
