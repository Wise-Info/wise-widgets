import { App } from 'vue';

import WidgetButton from './WidgetButton.vue';

WidgetButton.install = (app: App) => {
  app.component('WidgetButton', WidgetButton);
};

export * from './WidgetButton.vue';

export { WidgetButton };
