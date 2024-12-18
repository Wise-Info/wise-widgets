<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Property [ <span>itemsProps</span> ]</h4>
    </hgroup>
    <WidgetButtonGroup
      label="Mini Buttons"
      :items="items"
      :items-props="itemsProps" />
    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetButtonGroup
  :items="items"
  :items-props="itemsProps" />

const items = [
  { label: 'Button 1' },
  { label: 'Button 2' },
  { label: 'Button 3' },
  { label: 'Button 4' },
];

const itemProps = {
  shape: 'rounded',
  size: 'mini',
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
  shape: 'rounded',
  size: 'mini',
};
</script>
