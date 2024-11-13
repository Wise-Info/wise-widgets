import type { DefineComponent } from 'vue';

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import { routers } from './routes';

import Demo from './components/Demo.vue';

const modules: Record<string, { default: DefineComponent }> = import.meta.glob(
  './modules/**/sections/*.vue',
  { eager: true },
);

const moduleSections = Object.entries(modules).reduce(
  (acc, [path, module]) => {
    const match = path.match(
      /\.\/modules\/(?<module>[\w]+)\/sections\/(?<order>[\d]+)\.(?<section>[^/]+).vue$/,
    );
    if (match && match.groups)
      (acc[match.groups.module] ||= []).push({
        index: parseInt(match.groups.order, 10),
        name: match.groups.section.replace(/((?<!^)[A-Z])/g, (_, c) => ` ${c}`),
        component: module.default,
      });
    return acc;
  },
  {} as Record<
    string,
    Array<{
      index: number;
      name: string;
      component: DefineComponent;
    }>
  >,
);

const router = createRouter({
  history: import.meta.env.DOCS === 'true' ? createWebHashHistory() : createWebHistory(),
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
