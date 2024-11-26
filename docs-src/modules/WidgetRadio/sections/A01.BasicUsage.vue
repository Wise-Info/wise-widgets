<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Basic Usage</h4>
    </hgroup>

    <WidgetRadio />
    <code style="margin: 0 0 0 40px"> {{`<WidgetRadio" />`}}</code>

    <br /><br /><br /><br />

    <WidgetRadio label="Radio" />
    <code style="margin: 0 0 0 40px"> {{`<WidgetRadio label="Radio" />`}}</code>
  </section>
</template>

<script lang="ts">
export const viewTitle = 'WidgetRadio';
</script>

<script setup lang="ts">
</script>
