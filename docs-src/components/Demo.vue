<template>
  <div
    v-for="view in views"
    :id="`view-${view.group}-${view.viewTitle}`"
    :key="`view-${view.group}-${view.viewTitle}`"
    :data-title="view.viewTitle || $route.name"
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
        :data-title="section.sectionTitle"
        v-bind="section" />
    </div>
  </div>
</template>
<script lang="ts">
interface View {
  group: string;
  viewTitle?: string;
  sections: Section[];
}

export interface Section {
  group: string;
  viewTitle?: string;
  index: number;
  name: string;
  sectionTitle: string;
  component: DefineComponent;
}
</script>
<script setup lang="ts">
import { computed } from 'vue';
import type { DefineComponent } from 'vue';

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

const views = computed<View[]>(() =>
  Object.values(
    props.sections.reduce<{
      [group: string]: View;
    }>((acc, section) => {
      acc[section.group] ||= {
        group: section.group,
        viewTitle: section.viewTitle,
        sections: [],
      };
      acc[section.group].sections.push(section);
      return acc;
    }, {}),
  ),
);
</script>
