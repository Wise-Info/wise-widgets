<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Basic Usage</h4>
    </hgroup>

    <WidgetButton label="Button" />
    <code class="widget-code--inline"> {{`<WidgetButton label="Button" />`}}</code>

    <br /><br /><br /><br />

    <WidgetButton> Slot </WidgetButton>
    <code class="widget-code--inline"> {{`<WidgetButton> Slot </WidgetButton>`}}</code>

    <br /><br /><br /><br />

    <WidgetButton label="Label"> Slot </WidgetButton>
    <code class="widget-code--inline">
      {{`<WidgetButton label="Label"> Slot </WidgetButton>`}}
    </code>

    <br /><br />

    <b class="text-warning">
      The 'label' property overrides the 'slot' content. It is recommended to prioritize the 'label'
      property.
    </b>
  </section>
</template>

<script lang="ts">
export const viewTitle = 'WidgetButton';
</script>

<script setup lang="ts">
import { WidgetButton } from '@wiseinfo/wise-widgets';
</script>
