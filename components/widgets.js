import { createApp } from 'vue';
import WidgetContainer from './WidgetContainer/WidgetContainer.vue';
import * as widgets from './widgets';
import './styles/main.scss';

export * from './widgets';

export default (app) => {

  if (!document.getElementById('widgets')) {
    const target = document.createElement('div');
    target.id = 'widgets';
    document.body.appendChild(target);
  }

  createApp(WidgetContainer).mount('#widgets');

  Object.entries(widgets).forEach(([name, component]) => {
    app.component(name, component);
  });
};