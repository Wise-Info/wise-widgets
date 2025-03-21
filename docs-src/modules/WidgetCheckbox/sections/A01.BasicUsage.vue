<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Basic Usage</h4>
    </hgroup>

    <WidgetCheckbox />
    <code class="widget-code--inline"> {{`<WidgetCheckbox />`}}</code>

    <br /><br /><br /><br />

    <WidgetCheckbox label="Checkbox" />
    <code class="widget-code--inline"> {{`<WidgetCheckbox label="Checkbox" />`}}</code>

    <br /><br /><br /><br />

    <WidgetCheckbox> Slot </WidgetCheckbox>
    <code class="widget-code--inline"> {{`<WidgetCheckbox> Slot </WidgetCheckbox>`}}</code>

    <br /><br /><br /><br />

    <WidgetCheckbox label="Label"> Slot </WidgetCheckbox>
    <code class="widget-code--inline">
      {{`<WidgetCheckbox label="Label"> Slot </WidgetCheckbox>`}}
    </code>
  </section>
</template>

<script lang="ts">
export const viewTitle = 'WidgetCheckbox';
</script>

<script setup lang="ts">
import { WidgetCheckbox } from '@wiseinfo/wise-widgets';
</script>
