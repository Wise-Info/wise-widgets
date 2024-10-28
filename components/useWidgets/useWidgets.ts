import { ref, Ref } from 'vue';
import { uid } from 'uid';

interface WidgetProps {
  [key: string]: any;
}

interface Widget {
  widget: string;
  props: WidgetProps;
}

declare global {
  interface Window {
    WidgetArray: Ref<Widget[]>;
  }
}

window.WidgetArray = ref([]);

const useWidgets = () => window.WidgetArray;

const addWidget = (widget: string, props: WidgetProps): Widget => {
  const newWidget: Widget = {
    widget,
    props: {
      widgetId: props.widgetId || `widget-${uid(6)}`,
      ...props,
    },
  };
  window.WidgetArray.value.push(newWidget);
  return newWidget;
};

const updateWidget = (id: string, props: WidgetProps): Widget | null => {
  const targetWidget = window.WidgetArray.value.find((widget) => widget.props.widgetId === id);
  if (targetWidget) {
    targetWidget.props = {
      ...targetWidget.props,
      ...props,
    };
    return targetWidget;
  }
  return null;
};

const removeWidget = (id: string): Widget | null => {
  const targetWidgetIndex = window.WidgetArray.value.findIndex(
    (widget) => widget.props.widgetId === id,
  );
  if (targetWidgetIndex !== -1) {
    const targetWidget = window.WidgetArray.value[targetWidgetIndex];
    window.WidgetArray.value.splice(targetWidgetIndex, 1);
    return targetWidget;
  }
  return null;
};

const clearWidgets = (widget?: string): void => {
  if (widget) {
    window.WidgetArray.value = window.WidgetArray.value.filter((w) => w.widget !== widget);
  } else {
    window.WidgetArray.value = [];
  }
};

export { useWidgets, addWidget, updateWidget, removeWidget, clearWidgets };
