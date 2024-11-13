import { createApp, App, Component } from 'vue';
import { Widgets } from './useWidgets';
import * as widgetCollection from './widgets';
import 'normalize.css';
import '@fontsource/material-symbols-outlined';
import './styles/main.scss';

export * from './widgets';

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
