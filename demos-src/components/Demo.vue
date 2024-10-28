<template>
  <div class="view">
    <div class="view__header">
      <h2 class="view__title">
        {{ $route.name }}
      </h2>
    </div>
    <div class="view__body">
      <template
        v-for="(section, index) in sections"
        :key="index">
        <component :is="section" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps({
    widget: {
      type: String,
      required: true,
    },
    sections: {
      type: Array,
      default: () => [],
    },
  });

  console.log({ sections: props.sections });
</script>
