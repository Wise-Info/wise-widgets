<template>
  <WidgetGroup class="widget-button-group">
    <template>
      <WidgetButton />
    </template>
  </WidgetGroup>
</template>
<script lang="ts">
  import { WidgetGroup, WidgetGroupEnums, WidgetGroupProps } from '../WidgetGroup';
  import { WidgetButton, WidgetButtonProps } from '../WidgetButton';

  export interface WidgetButtonGroupProps extends WidgetGroupProps {
    items: WidgetButtonProps[];
    itemProps: WidgetButtonProps;
  }
</script>

<script setup lang="ts">
  defineProps({
    label: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    itemProps: {
      type: Object,
      default: () => ({}),
    },
    gap: {
      type: Number,
      default: 1,
      enums: WidgetGroupEnums.gap,
      validator: (gap: number) => WidgetGroupEnums.gap.includes(gap),
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
</script>
