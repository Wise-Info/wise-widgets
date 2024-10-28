import type { DefineComponent } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import Demo from './components/Demo.vue';

const routers: string[] = [
  '/',
  '/guides',
  '/guides/how-to-use/installation',
  '/guides/how-to-use/quick-start',
  '/guides/design/colors',
  '/guides/design/themes',
  '/guides/design/typography',
  // '/layouts',
  // '/data',
  '/components',
  '/components/general/widget-button',
  '/components/general/widget-icon',
  '/components/layouts/widget-divider',
  '/components/layouts/widget-grid',
  '/components/layouts/widget-block',
  '/components/navigation/widget-navbar',
  '/components/navigation/widget-breadcrumb',
  '/components/navigation/widget-steps',
  '/components/navigation/widget-tabs',
  '/components/navigation/widget-pagination',
  '/components/data-input/widget-radio',
  '/components/data-input/widget-checkbox',
  '/components/data-input/widget-select',
  '/components/data-input/widget-input',
  '/components/data-input/widget-input-select',
  '/components/data-input/widget-tags',
  '/components/data-input/widget-textarea',
  '/components/data-input/widget-date',
  '/components/data-input/widget-upload',
  '/components/data-display/widget-key-value',
  '/components/data-display/widget-card',
  '/components/data-display/widget-table',
  '/components/feedback/widget-mask',
  '/components/feedback/widget-message',
  '/components/feedback/widget-dialog',
  '/components/feedback/widget-watermark',
  '/resources',
];

const modules: Record<string, { default: DefineComponent }> = import.meta.glob(
  './modules/**/*.vue',
  { eager: true },
);

const moduleSections = Object.entries(modules).reduce(
  (acc, [path, module]) => {
    const match = path.match(/\.\/modules\/(?<module>[\w]+)\/sections\/(?<section>[^/]+)$/);
    if (match && match.groups) (acc[match.groups.module] ||= []).push(module.default);
    return acc;
  },
  {} as Record<string, DefineComponent[]>,
);

const router = createRouter({
  history: createWebHistory(),
  routes: [...new Set(routers)].map((path, order) => {
    const segments = path.split('/').reduce<string[]>((acc, cur) => {
      if (cur) acc.push(cur.trim());
      return acc;
    }, []);
    const id = segments.pop() || 'home';
    const name = id.replace(/(?:^|-)([a-z])/g, (_, c) => c.toUpperCase());
    const component = modules[`./modules/${name}/${name}.vue`]?.default || Demo;

    return {
      path,
      name,
      component,
      props: { widget: name, sections: moduleSections[name] },
      meta: {
        id,
        parent: segments[segments.length - 1] || 'root',
        parents: ['root', ...segments],
        order,
      },
    };
  }),
});

export default router;

export { routers };
