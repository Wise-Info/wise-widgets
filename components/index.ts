import { createApp } from 'vue';

import type { App, Component } from 'vue';

import { Widgets } from './useWidgets/index.ts';

import * as widgetCollection from './widgets.ts';

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

  Object.entries(widgetCollection).forEach(([name, component]) => {
    app.component(name, component as Component);
  });
};
