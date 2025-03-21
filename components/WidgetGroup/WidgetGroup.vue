<template>
  <div
    class="widget-group"
    :class="{
      [`gap-${gap}`]: true,
      reverse: ['row-reverse'].includes(direction),
      inline,
    }"
    :style>
    <label
      v-if="label !== undefined"
      class="widget-label widget-group__label">
      {{ label }}
    </label>
    <div class="widget-group__inner">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
const enums = {
  gap: [0, 1, 2, 3, 4, '0', '1', '2', '3', '4'],
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
  inline?: boolean;
  direction?: WidgetGroupDirection;
  justify?: WidgetGroupJustify;
  wrap?: WidgetGroupWrap;
}
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: undefined,
  },
  gap: {
    type: [Number, String],
    default: 1,
    enums: WidgetGroupEnums.gap,
    validator: (gap: number | string): boolean =>
      WidgetGroupEnums.gap.includes(typeof gap === 'number' ? gap : parseInt(gap)),
  },
  inline: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String,
    default: 'row',
    enums: WidgetGroupEnums.direction,
    validator: (direction: string) => WidgetGroupEnums.direction.includes(direction),
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
});

const style = computed(() => ({
  '--direction': props.direction !== 'row' ? props.direction : undefined,
  '--justify': props.justify !== 'start' ? props.justify : undefined,
  '--wrap': props.wrap !== 'nowrap' ? props.wrap : undefined,
}));
</script>
