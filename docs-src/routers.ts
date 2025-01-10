import type { DefineComponent } from 'vue';

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import { routes } from './routes.ts';

import Demo, { type Section } from './components/Demo.vue';

const modules: { [key: string]: DefineComponent } = import.meta.glob(
  './modules/**/sections/*.vue',
  { eager: true },
);

const moduleSections = Object.entries(modules).reduce(
  (acc: { [key: string]: Section[] }, [path, module]) => {
    const match = path.match(
      /\.\/modules\/(?<module>[\w]+)\/sections\/(?<group>[A-F]*)(?<index>[\d]+)\.(?<section>[^/]+).vue$/,
    );
    if (match && match.groups)
      (acc[match.groups.module] ||= []).push({
        group: match.groups.group || 'A',
        viewTitle: module.viewTitle,
        index: parseInt(match.groups.index, 10),
        name: match.groups.section,
        title: match.groups.section.replace(/((?<!^)[A-Z])/g, (_, c) => ` ${c}`),
        component: module.default,
      });
    return acc;
  },
  {},
);

const router = createRouter({
  history: import.meta.env.DOCS === 'true' ? createWebHashHistory() : createWebHistory(),
  routes: [...new Set(routes)].map((path, order) => {
    const segments = path.split('/').reduce((acc: string[], cur: string) => {
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
  scrollBehavior() {
    document.querySelector('.main')?.scrollTo({ top: 0 });
  },
});

export default router;

export { routes };
