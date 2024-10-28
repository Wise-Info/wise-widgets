<template>
  <svg
    class="widget-svg"
    :width="auto ? '100%' : width"
    :height="auto ? '100%' : height"
    :viewBox="'0 0 ' + width + ' ' + height"
    :title="label">
    <use :href="`#svg-${svg}`" />
  </svg>
</template>

<script setup lang="ts">
  defineProps({
    svg: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
    auto: {
      type: Boolean,
      default: false,
    },
  });
</script>
