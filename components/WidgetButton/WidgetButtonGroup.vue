<template>
  <WidgetGroup
    class="widget-button-group"
    :class="{
      [buttonShape]: buttonShape,
      [buttonSize]: buttonSize,
      whole,
      readonly,
      disabled,
      error,
    }"
    v-bind="{
      label,
      gap,
      direction,
      justify,
      wrap,
    }">
    <template
      v-for="(item, index) in items"
      :key="`${widgetId}-${index}`">
      <WidgetButton
        :index="index"
        v-bind="{
          ...{
            ...itemsProps,
            size: undefined,
          },
          ...item,
          disabled: props.disabled || itemsProps.disabled || item.disabled,
        }"
        v-on="{
          ...itemsProps.events,
          ...item.events,
        }" />
    </template>
  </WidgetGroup>
</template>
<script lang="ts">
import { WidgetGroup, WidgetGroupProps } from '../WidgetGroup/index.ts';
import WidgetButton, { WidgetButtonProps } from './WidgetButton.vue';

export interface WidgetButtonGroupProps extends WidgetGroupProps {
  widgetId?: string;
  items: WidgetButtonProps[];
  itemsProps?: WidgetButtonProps;
  whole?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  error?: boolean;
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { uid } from 'uid';

const props = withDefaults(defineProps<WidgetButtonGroupProps>(), {
  widgetId: `widget-${uid(6)}`,
  items: () => [],
  itemsProps: () => ({}),
  whole: false,
});

const buttonShape = computed(() =>
  props.whole &&
  typeof props.itemsProps === 'object' &&
  props.itemsProps.shape &&
  props.itemsProps.shape !== 'rectangle'
    ? props.itemsProps.shape
    : '',
);

const buttonSize = computed(() =>
  typeof props.itemsProps === 'object' &&
  props.itemsProps.size &&
  props.itemsProps.size !== 'normal'
    ? props.itemsProps.size
    : '',
);
</script>

<style lang="scss">
.widget-button-group {
  &.readonly,
  &.disabled {
    .widget-button {
      --color: var(--color-disabled);
      cursor: not-allowed;

      &:active {
        --color: var(--color-disabled);
        animation: none;
      }
    }
  }
  &.error {
    .widget-button {
      --color: var(--color-error);
      &:hover,
      &:focus {
        --color: var(--color-error-toggle);
      }
    }
  }
}
</style>
