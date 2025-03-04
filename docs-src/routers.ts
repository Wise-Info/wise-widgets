import type { DefineComponent } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import { routes } from './routes.ts';

import { Sections, type Section } from '@components';

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
        sectionTitle: match.groups.section.replace(/((?<!^)[A-Z])/g, (_, c) => ` ${c}`),
        component: module.default,
      });
    return acc;
  },
  {},
);

export default createRouter({
  history:
    import.meta.env.MODE === 'production'
      ? createWebHistory(import.meta.env.BASE_URL)
      : createWebHistory(),
  routes: [...new Set(routes)].map((path, order) => {
    const segments = path.split('/').reduce((acc: string[], cur: string) => {
      if (cur) acc.push(cur.trim());
      return acc;
    }, []);
    const id = segments.pop() || 'home';
    const name = id.replace(/(?:^|-)([a-z])/g, (_, c) => c.toUpperCase());
    const component = modules[`./modules/${name}/${name}.vue`]?.default || Sections;

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
  scrollBehavior(to, _, savedPosition) {
    const main = document.querySelector('.main');

    if (!main) {
      return;
    }

    if (savedPosition) {
      main.scrollTop = savedPosition.top;
      return;
    }
    if (to.hash) {
      const anchor = main.querySelector(to.hash) as HTMLElement;
      if (anchor) {
        main.scroll({
          top: anchor.offsetTop,
          behavior: 'smooth',
        });
        return;
      }
    }

    main.scrollTop = 0;
    return;
  },
});

export { routes };
