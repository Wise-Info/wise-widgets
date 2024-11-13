<template>
  <div class="view">
    <div class="view__header">
      <h3 class="view__title">
        {{ $route.name }}
      </h3>
    </div>
    <div class="view__body">
      <template
        v-for="section in sections"
        :key="section.index">
        <component
          :is="section.component"
          v-bind="section" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
  import type { DefineComponent } from 'vue';

  defineProps({
    widget: {
      type: String,
      required: true,
    },
    sections: {
      type: Array as () => Array<{
        index: number;
        name: string;
        component: DefineComponent;
      }>,
      default: () => [],
    },
  });
</script>
