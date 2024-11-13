<template>
  <div class="widget-group">
    <label
      v-if="label !== undefined"
      class="widget-group__label">
      {{ label }}
    </label>
    <slot />
  </div>
</template>
<script lang="ts">
  const enums = {
    gap: [0, 1, 2, 3, 4],
    direction: ['row', 'row-reverse', 'column', 'column-reverse'],
    justify: ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'],
    wrap: ['nowrap', 'wrap', 'wrap-reverse'],
  };

  export const WidgetGroupEnums = enums;

  type WidgetGroupGap = (typeof enums.gap)[number];
  type WidgetGroupDirection = (typeof enums.direction)[number];
  type WidgetGroupJustify = (typeof enums.justify)[number];
  type WidgetGroupWrap = (typeof enums.wrap)[number];

  export interface WidgetGroupProps {
    label?: string;
    gap?: WidgetGroupGap;
    direction?: WidgetGroupDirection;
    justify?: WidgetGroupJustify;
    wrap?: WidgetGroupWrap;
    disabled?: boolean;
    error?: boolean;
  }
</script>

<script setup lang="ts">
  defineProps({
    label: {
      type: String,
      default: undefined,
    },
    gap: {
      type: Number,
      // default: 'normal',
    },
    direction: {
      type: String,
      // default: 'horizontal',
    },
    justify: {
      type: String,
      // default: 'left',
    },
    wrap: {
      type: String,
      // default: 'nowrap',
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
