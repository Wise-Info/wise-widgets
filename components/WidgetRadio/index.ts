import type { App } from 'vue';

import WidgetRadio from './WidgetRadio.vue';

// import WidgetRadioGroup from './WidgetRadioGroup.vue';

WidgetRadio.install = (app: App) => {
  app.component('WidgetRadio', WidgetRadio);
};

// WidgetRadioGroup.install = (app: App) => {
//   app.component('WidgetRadioGroup', WidgetRadioGroup);
// };

export * from './WidgetRadio.vue';

// export * from './WidgetRadioGroup.vue';

export {
  WidgetRadio,
  // WidgetRadioGroup,
};
