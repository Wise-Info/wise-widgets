<template>
  <WidgetGroup
    class="widget-button-group"
    :class="{
      whole,
      [itemsProps.shape]: whole && itemsProps.shape !== 'rectangle',
    }"
    v-bind="{
      label,
      gap,
      direction,
      justify,
      wrap,
      disabled,
      error,
    }">
    <template
      v-for="item in localItems"
      :key="item.key">
      <WidgetButton
        v-bind="{
          ...itemsProps,
          ...item,
          ...localProps,
        }"
        v-on="{
          ...itemsProps.events,
          ...item.events,
        }" />
    </template>
  </WidgetGroup>
</template>
<script lang="ts">
import { WidgetGroup, WidgetGroupEnums, WidgetGroupProps } from '../WidgetGroup/index.ts';
import WidgetButton, { WidgetButtonProps } from './WidgetButton.vue';

export interface WidgetButtonGroupProps extends WidgetGroupProps {
  items: WidgetButtonProps[];
  itemsProps?: WidgetButtonProps;
  whole?: boolean;
}
</script>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { uid } from 'uid';

const props = defineProps({
  widgetId: {
    type: String,
    default: () => `widget-${uid(6)}`,
  },
  label: {
    type: String,
    default: undefined,
  },
  items: {
    type: Array as PropType<WidgetButtonProps[]>,
    default: () => [],
  },
  itemsProps: {
    type: Object,
    default: () => ({}),
  },
  whole: {
    type: Boolean,
    default: false,
  },
  gap: {
    type: [Number, String],
    default: 1,
    enums: WidgetGroupEnums.gap,
    validator: (gap: number | string) =>
      WidgetGroupEnums.gap.includes(typeof gap === 'number' ? gap : parseInt(gap)),
  },
  direction: {
    type: String,
    default: 'row',
    enums: WidgetGroupEnums.direction,
  },
  justify: {
    type: String,
    default: 'start',
    enums: WidgetGroupEnums.justify,
    validator: (justify: string) => WidgetGroupEnums.justify.includes(justify),
  },
  wrap: {
    type: String,
    default: 'nowrap',
    enums: WidgetGroupEnums.wrap,
    validator: (wrap: string) => WidgetGroupEnums.wrap.includes(wrap),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
});

const localItems = computed(() =>
  props.items.map((item, index) => ({
    key: `${props.widgetId}-${index}`,
    ...item,
  })),
);

const localProps = computed(() =>
  Object.fromEntries(
    Object.entries({
      disabled: props.disabled,
      error: props.error,
    }).filter(([_, value]) => !!value),
  ),
);
</script>
