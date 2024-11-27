<template>
  <section class="section">
    <hgroup class="section__title">
      <!-- <PropEnums
        widget="WidgetButtonGroup"
        prop="gap" /> -->
    </hgroup>
    <div class="gap-group">
      <div class="gap">
        <label>gap-0</label>
        <WidgetButtonGroup
          :items="items"
          gap="0" />
      </div>
      <div class="gap">
        <label>gap-1</label>
        <WidgetButtonGroup :items="items" />
      </div>
      <div class="gap">
        <label>gap-2</label>
        <WidgetButtonGroup
          :items="items"
          gap="2" />
      </div>
      <div class="gap">
        <label>gap-3</label>
        <WidgetButtonGroup
          :items="items"
          gap="3" />
      </div>
      <div class="gap">
        <label>gap-4</label>
        <WidgetButtonGroup
          :items="items"
          gap="4" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export const viewTitle = 'WidgetButtonGroup';
</script>

<script setup lang="ts">
import { WidgetButtonGroup } from '@wiseinfo/wise-widgets';
// import { PropEnums } from '@components';

const items = [
  { label: 'Button 1' },
  { label: 'Button 2' },
  { label: 'Button 3' },
  { label: 'Button 4' },
];
</script>

<style lang="scss">
.gap {
  display: flex;

  &-group {
    display: flex;
    flex-direction: column;
    gap: $size-base * 2;
  }

  label {
    margin: 0 ($size-base * 2) 0 0;
    line-height: $size-base * 4;

    &::after {
      content: ' : ';
    }
  }
}
</style>
