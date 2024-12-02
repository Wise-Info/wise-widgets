<template>
  <section class="section">
    <hgroup class="section__title">
      <PropEnums
        widget="WidgetButtonGroup"
        prop="direction" />
    </hgroup>
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div>
        <WidgetButtonGroup
          :items="items"
          label="row" />
      </div>
      <hr />
      <div>
        <WidgetButtonGroup
          :items="items"
          label="row-reverse"
          direction="row-reverse" />
      </div>
      <hr />
      <div>
        <WidgetButtonGroup
          :items="items"
          label="column"
          direction="column"
          inline />
      </div>
      <hr />
      <div>
        <WidgetButtonGroup
          :items="items"
          label="column-reverse"
          direction="column-reverse"
          inline />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export const viewTitle = 'WidgetButtonGroup';
</script>

<script setup lang="ts">
import { WidgetButtonGroup } from '@wiseinfo/wise-widgets';
import { PropEnums } from '@/components/index.ts';

const items = [
  { label: 'Button 1' },
  { label: 'Button 2' },
  { label: 'Button 3' },
  { label: 'Button 4' },
];
</script>

<style lang="scss" scoped></style>
