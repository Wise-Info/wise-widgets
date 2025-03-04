import { createApp } from 'vue';
import type { App } from 'vue';

import { Widgets } from './useWidgets/index.ts';

import { widgets } from './widgets.ts';

import 'normalize.css';
import './styles/main.scss';

export * from './widgets.ts';

export default (app: App) => {
  // create widgets container
  if (!document.getElementById('widgets')) {
    const widgetsContainer = document.createElement('div');
    widgetsContainer.id = 'widgets';
    document.body.appendChild(widgetsContainer);
  }

  // mount widgets container. Use setTimeout to lower priority in devtools component tree.
  setTimeout(() => {
    createApp(Widgets).mount('#widgets');
  }, 0);

  // install widgets
  Object.values(widgets).forEach((widget) => {
    widget.install(app);
  });
};
