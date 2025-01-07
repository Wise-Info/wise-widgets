<template>
  <WidgetGroup
    class="widget-button-group"
    :class="{
      whole,
      [itemsProps.shape as string]: whole && itemsProps.shape && itemsProps.shape !== 'rectangle',
      [itemsProps.size as string]: itemsProps.size && itemsProps.size !== 'normal',
    }"
    v-bind="{
      label,
      gap,
      direction,
      justify,
      wrap,
      readonly,
      disabled,
      error,
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
import { WidgetGroup, WidgetGroupProps } from '../WidgetGroup/index.ts';
import WidgetButton, { WidgetButtonProps } from './WidgetButton.vue';

export interface WidgetButtonGroupProps extends WidgetGroupProps {
  widgetId?: string;
  items: WidgetButtonProps[];
  itemsProps?: WidgetButtonProps;
  whole?: boolean;
  readonly?: boolean;
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

const localProps = computed(() =>
  Object.fromEntries(
    Object.entries({
      disabled: props.disabled,
      error: props.error,
    }).filter(([_, value]) => !!value),
  ),
);
</script>

<style lang="scss">
.widget-button-group {
  &.readonly,
  &.disabled {
    .widget-button {
      --color: var(--color-disabled);
      cursor: not-allowed;
    }
  }
}
</style>
