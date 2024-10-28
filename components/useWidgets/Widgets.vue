<template>
  <template
    v-for="widget in widgetArray"
    :key="widget.id">
    <component
      :is="widgets[widget.widget]"
      v-bind="widget.props" />
  </template>
</template>
<script setup lang="ts">
  import { useWidgets } from './useWidgets.js';
  import * as widgets from '../widgets.js';

  const widgetArray = useWidgets();
</script>
