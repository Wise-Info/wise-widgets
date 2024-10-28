<template>
  <span
    v-if="type === 'font'"
    class="widget-icon font"
    :class="`widget-icon__${icon}`"
    :title="label"
    :style="{
      '--size': `${size}px`,
      '--weight': Number(weight),
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
<script setup lang="ts">
  import '@fontsource/material-symbols-rounded';

  const props = defineProps({
    type: {
      type: String,
      default: 'font',
      enum: ['font', 'svg'],
      validator: (value: string) => ['font', 'svg'].includes(value),
    },
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    size: {
      type: [Number, String],
      default: 24,
      validator: (value: number | string) => Number(value) > 8 && Number(value) < 128,
    },
    weight: {
      type: [Number, String],
      default: 200,
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
<style lang="scss">
  @import './WidgetIcon.scss';
</style>
