import type { App } from 'vue';

import WidgetCard from './WidgetCard.vue';

WidgetCard.install = (app: App) => {
  app.component('WidgetCard', WidgetCard);
};

export * from './WidgetCard.vue';

export { WidgetCard };
