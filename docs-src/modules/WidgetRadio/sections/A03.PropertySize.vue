<template>
  <section class="section">
    <hgroup class="section__title">
      <PropEnums
        widget="WidgetRadio"
        prop="size" />
    </hgroup>
    <WidgetGroup gap="4">
      <WidgetRadio
        label="mini"
        size="mini"
        checked />

      <WidgetRadio
        label="normal"
        checked />

      <WidgetRadio
        label="large"
        size="large"
        checked />

      <WidgetRadio
        label="extra"
        size="extra"
        checked />
    </WidgetGroup>
    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadio label="mini" size="mini" checked />

<WidgetRadio label="normal" checked />

<WidgetRadio label="large" size="large" checked />

<WidgetRadio label="extra" size="extra" checked />`}}
    </WidgetCode>
    <!-- prettier-ignore-end -->
  </section>
</template>

<script setup lang="ts">
import { WidgetRadio } from '@wiseinfo/wise-widgets';
import { PropEnums } from '@components';
</script>
