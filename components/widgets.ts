import type { App, DefineComponent } from 'vue';

export * from './WidgetIcon/index.ts';
export * from './WidgetSvg/index.ts';
export * from './WidgetButton/index.ts';

export * from './WidgetGroup/index.ts';

export * from './WidgetRadio/index.ts';

export * from './WidgetCard/index.ts';

export * from './WidgetCode/index.ts';

export * from './WidgetRadio/index.ts';

interface WidgetModule extends DefineComponent {
  install: (app: App) => void;
}

interface WidgetModules {
  [key: string]: WidgetModule;
}

interface Modules {
  [key: string]: WidgetModule | { [key: string]: WidgetModule };
}

const modules: { [key: string]: Modules } = import.meta.glob('./Widget*/index.ts', { eager: true });

const { widgets, enums } = Object.entries(modules).reduce(
  (
    acc: { widgets: WidgetModules; enums: { [key: string]: string[] } },
    [, modules]: [string, Modules],
  ) => {
    Object.entries(modules).forEach(([name, module]) => {
      if ('install' in module) {
        acc.widgets[name] = module as WidgetModule;
      }
      if (name.endsWith('Enums')) {
        Object.assign(acc.enums, module);
      }
    });
    return acc;
  },
  { widgets: {}, enums: {} },
);

export { widgets, enums };
