export * from './WidgetIcon/index.ts';
export * from './WidgetSvg/index.ts';
export * from './WidgetButton/index.ts';

export * from './WidgetGroup/index.ts';

export * from './WidgetRadio/index.ts';

export * from './WidgetCard/index.ts';

export * from './WidgetCode/index.ts';

export * from './WidgetRadio/index.ts';

const modules = import.meta.glob('./Widget*/index.ts', { eager: true });

interface Modules {
  [key: string]: {
    [key: string]: {
      install?: () => void;
      [key: string]: unknown;
    };
  };
}

interface Accumulator {
  widgets: Record<string, unknown>;
  enums: Record<string, unknown>;
}

const { widgets, enums } = Object.entries(modules as Modules).reduce(
  (acc, [, module]) => {
    Object.entries(module).forEach(([name, object]) => {
      if (object.install) {
        acc.widgets[name] = object;
      }
      if (name.endsWith('Enums')) {
        Object.assign(acc.enums, object);
      }
    });
    return acc;
  },
  { widgets: {}, enums: {} },
) as Accumulator;

export { widgets, enums };
