<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Basic Usage</h4>
    </hgroup>
    <WidgetButtonGroup :items="items" />
    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetButtonGroup :items="items" />

const items = [
  { label: 'Button 1' },
  { label: 'Button 2' },
  { label: 'Button 3' },
  { label: 'Button 4' },
];`}}
    </WidgetCode>
    <!-- prettier-ignore-end -->
  </section>
</template>

<script lang="ts">
export const viewTitle = 'WidgetButtonGroup';
</script>

<script setup lang="ts">
const items = [
  { label: 'Button 1' },
  { label: 'Button 2' },
  { label: 'Button 3' },
  { label: 'Button 4' },
];
</script>

<style lang="scss" scoped></style>
