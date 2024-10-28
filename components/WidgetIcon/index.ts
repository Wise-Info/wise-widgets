import { App } from 'vue';

import WidgetIcon from './WidgetIcon.vue';

WidgetIcon.install = (app: App) => {
  app.component('WidgetIcon', WidgetIcon);
};

export { WidgetIcon };
