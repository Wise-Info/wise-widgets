<template>
  <div
    v-for="(view, index) in views"
    :key="index"
    class="view">
    <div class="view__header">
      <h3 class="view__title">
        {{ view.sections[0].viewTitle || $route.name }}
      </h3>
    </div>
    <div class="view__body">
      <template
        v-for="section in view.sections"
        :key="section.index">
        <component
          :is="section.component"
          v-bind="section" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { DefineComponent } from 'vue';

interface Section {
  group: string;
  viewTitle?: string;
  index: number;
  name: string;
  component: DefineComponent;
}

interface Views {
  [key: string]: {
    sections: Section[];
  };
}

const props = defineProps({
  widget: {
    type: String,
    required: true,
  },
  sections: {
    type: Array as () => Section[],
    default: () => [],
  },
});

const views = computed(() =>
  Object.values(
    props.sections.reduce<Views>((acc, section) => {
      acc[section.group] ||= { sections: [] };
      acc[section.group].sections.push(section);
      return acc;
    }, {}),
  ),
);
</script>
