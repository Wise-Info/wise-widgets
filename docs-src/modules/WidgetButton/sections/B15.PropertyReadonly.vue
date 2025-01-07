<template>
  <section class="section">
    <hgroup class="section__title">
      <PropEnums
        widget="WidgetGroup"
        prop="readonly" />
    </hgroup>
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div>
        <WidgetButtonGroup
          :items="items"
          label="Button Group"
          readonly />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { WidgetButtonGroup } from '@wiseinfo/wise-widgets';
import { PropEnums } from '@components';

const items = [
  { label: 'Button 1' },
  { label: 'Button 2' },
  { label: 'Button 3' },
  { label: 'Button 4' },
];
</script>

<style lang="scss" scoped></style>
