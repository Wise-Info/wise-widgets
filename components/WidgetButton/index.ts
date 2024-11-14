import { App } from 'vue';

import WidgetButton from './WidgetButton.vue';

import WidgetButtonGroup from './WidgetButtonGroup.vue';

WidgetButton.install = (app: App) => {
  app.component('WidgetButton', WidgetButton);
};

WidgetButtonGroup.install = (app: App) => {
  app.component('WidgetButtonGroup', WidgetButtonGroup);
};

export * from './WidgetButton.vue';

export * from './WidgetButtonGroup.vue';

export { WidgetButton, WidgetButtonGroup };
