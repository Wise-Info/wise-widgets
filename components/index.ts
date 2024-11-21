import { createApp } from 'vue';

import type { App } from 'vue';

import { Widgets } from './useWidgets/index.ts';

import { widgets } from './widgets.ts';

import '@fontsource/material-symbols-outlined';
import 'normalize.css';
import './styles/main.scss';

export * from './widgets.ts';

export default (app: App) => {
  if (!document.getElementById('widgets')) {
    const widgetsContainer = document.createElement('div');
    widgetsContainer.id = 'widgets';
    document.body.appendChild(widgetsContainer);
  }

  createApp(Widgets).mount('#widgets');

  Object.values(widgets).forEach((widget) => {
    (widget as { install: (app: App) => void }).install(app);
  });
};
