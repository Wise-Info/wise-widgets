<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Basic Usage</h4>
    </hgroup>

    <WidgetButton label="Button" />
    <code style="margin: 0 0 0 40px"> {{`<WidgetButton label="Button" />`}}</code>
  </section>
</template>

<script lang="ts">
export const viewTitle = 'WidgetButton';
</script>

<script setup lang="ts">
import { WidgetButton } from '@wiseinfo/wise-widgets';
</script>
