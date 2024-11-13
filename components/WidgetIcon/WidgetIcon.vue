<template>
  <span
    v-if="type === 'font'"
    class="widget-icon font"
    :class="`widget-icon__${icon}`"
    :title="label"
    :style="{
      '--size': `var(--icon-size, ${size}px)`,
      '--weight': `var(--icon-weight, ${Number(weight)}`,
    }">
    {{ String.fromCharCode(parseInt(icon, 16)) }}
  </span>
  <svg
    v-else-if="type === 'svg'"
    class="widget-icon svg"
    :class="`widget-icon__${icon}`"
    :title="label"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    :style="{
      '--size': `${size}px`,
    }">
    <use :href="`#${svgPrefix}${icon}`" />
  </svg>
</template>
<script lang="ts">
  const enums = {
    type: ['font', 'svg'],
    weight: [100, 200, 300, 400, 500, 600, 700],
  };

  export const WidgetIconEnums = enums;

  export interface WidgetIconProps {
    type?: 'font' | 'svg';
    icon: string;
    label?: string;
    size?: number | string;
    weight?: number | string;
    svgPrefix?: string;
  }
</script>
<script setup lang="ts">
  // import '@fontsource/material-symbols-outlined';

  const props = defineProps({
    type: {
      type: String,
      default: 'font',
      enums: enums.type,
      validator: (value: string) => enums.type.includes(value),
    },
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: undefined,
    },
    size: {
      type: [Number, String],
      default: 24,
      validator: (value: number | string) => Number(value) > 8 && Number(value) < 128,
    },
    weight: {
      type: [Number, String],
      default: 200,
      enums: enums.weight,
      validator: (value: number | string) => enums.weight.includes(Number(value)),
    },
    svgPrefix: {
      type: String,
      default: 'icon-',
    },
  });

  if (props.type === 'font' && !/^[0-9A-Fa-f]{4}$/.test(props.icon)) {
    console.error(
      new Error(
        `Invalid icon value: ${props.icon}. When using 'font' type of icon, the icon value must be a string of 4-digit hexadecimal number.`,
      ),
    );
  }
</script>
