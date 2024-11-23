import type { DefineComponent } from 'vue';

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import { routes } from './routes.ts';

import Demo from './components/Demo.vue';

const modules: Record<string, { default: DefineComponent; viewTitle?: string }> = import.meta.glob(
  './modules/**/sections/*.vue',
  { eager: true },
);

const moduleSections = Object.entries(modules).reduce(
  (acc, [path, module]) => {
    const match = path.match(
      /\.\/modules\/(?<module>[\w]+)\/sections\/(?<group>[A-F]*)(?<order>[\d]+)\.(?<section>[^/]+).vue$/,
    );
    if (match && match.groups)
      (acc[match.groups.module] ||= []).push({
        group: match.groups.group || 'A',
        viewTitle: module.viewTitle,
        index: parseInt(match.groups.order, 10),
        name: match.groups.section.replace(/((?<!^)[A-Z])/g, (_, c) => ` ${c}`),
        component: module.default,
      });
    return acc;
  },
  {} as Record<
    string,
    Array<{
      group: string;
      viewTitle?: string;
      index: number;
      name: string;
      component: DefineComponent;
    }>
  >,
);

const router = createRouter({
  history: import.meta.env.DOCS === 'true' ? createWebHashHistory() : createWebHistory(),
  routes: [...new Set(routes)].map((path, order) => {
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

export { routes };
