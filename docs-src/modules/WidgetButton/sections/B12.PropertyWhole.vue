<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Property [ <span>whole</span> ]</h4>
    </hgroup>
    <WidgetButtonGroup
      :items="items"
      :items-props="itemsProps"
      whole />
    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetButtonGroup
  :items="items"
  :items-props="itemsProps"
  whole />

const items = [
  { label: 'Button 1' },
  { label: 'Button 2' },
  { label: 'Button 3' },
  { label: 'Button 4' },
];

const itemsProps = {
  shape: 'capsule',
};`}}
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
const itemsProps = {
  shape: 'capsule',
};
</script>
