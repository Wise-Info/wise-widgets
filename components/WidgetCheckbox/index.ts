import type { App } from 'vue';

import WidgetCheckbox from './WidgetCheckbox.vue';

import WidgetCheckboxGroup from './WidgetCheckboxGroup.vue';

WidgetCheckbox.install = (app: App) => {
  app.component('WidgetCheckbox', WidgetCheckbox);
};

WidgetCheckboxGroup.install = (app: App) => {
  app.component('WidgetCheckboxGroup', WidgetCheckboxGroup);
};

export * from './WidgetCheckbox.vue';

export * from './WidgetCheckboxGroup.vue';

export { WidgetCheckbox, WidgetCheckboxGroup };
