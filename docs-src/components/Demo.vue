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
      <component
        :is="section.component"
        v-for="section in view.sections"
        :id="`section-${section.index}-${section.name}`"
        :key="`section-${section.index}-${section.name}`"
        v-bind="section" />
    </div>
  </div>
</template>
<script lang="ts">
export interface Section {
  group: string;
  viewTitle?: string;
  index: number;
  name: string;
  title: string;
  component: DefineComponent;
}
</script>
<script setup lang="ts">
import { computed } from 'vue';
import type { DefineComponent } from 'vue';

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
