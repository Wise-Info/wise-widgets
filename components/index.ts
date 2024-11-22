import { createApp } from 'vue';
import type { App } from 'vue';

import { Widgets } from './useWidgets/index.ts';

import { widgets } from './widgets.ts';

import 'normalize.css';
import './styles/main.scss';

export * from './widgets.ts';

export default (app: App) => {
  // Create widgets container
  if (!document.getElementById('widgets')) {
    const widgetsContainer = document.createElement('div');
    widgetsContainer.id = 'widgets';
    document.body.appendChild(widgetsContainer);
  }

  // Mount widgets container
  createApp(Widgets).mount('#widgets');

  // Install widgets
  Object.values(widgets).forEach((widget) => {
    (widget as { install: (app: App) => void }).install(app);
  });
};
