<template>
  <div
    class="widget-card"
    :class="{
      [usage]: usage !== 'normal',
    }">
    <slot />
  </div>
</template>
<script lang="ts">
import { enumUsage } from '../enums.ts';

const enums = {
  usage: enumUsage,
};

export const WidgetCardEnums = enums;

type WidgetCardUsage = (typeof enums.usage)[number];

export interface WidgetCardProps {
  usage?: WidgetCardUsage;
}
</script>

<script setup lang="ts">
defineProps({
  usage: {
    type: String,
    default: 'normal',
    enums: enums.usage,
    validator: (usage: string) => enums.usage.includes(usage),
  },
});
</script>
