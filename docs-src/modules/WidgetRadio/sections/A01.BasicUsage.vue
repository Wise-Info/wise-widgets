<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Basic Usage</h4>
    </hgroup>

    <WidgetRadio />
    <code class="widget-code--inline"> {{`<WidgetRadio />`}}</code>

    <br /><br /><br /><br />

    <WidgetRadio label="Radio" />
    <code class="widget-code--inline"> {{`<WidgetRadio label="Radio" />`}}</code>

    <br /><br /><br /><br />

    <WidgetRadio> Slot </WidgetRadio>
    <code class="widget-code--inline"> {{`<WidgetRadio> Slot </WidgetRadio>`}}</code>

    <br /><br /><br /><br />

    <WidgetRadio label="Label"> Slot </WidgetRadio>
    <code class="widget-code--inline"> {{`<WidgetRadio label="Label"> Slot </WidgetRadio>`}}</code>
  </section>
</template>

<script lang="ts">
export const viewTitle = 'WidgetRadio';
</script>

<script setup lang="ts"></script>
