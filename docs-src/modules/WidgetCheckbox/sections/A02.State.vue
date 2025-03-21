<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>State - Property [ checked , indeterminate , readonly , disabled ]</h4>
    </hgroup>
    <WidgetGroup gap="4">
      <WidgetCheckbox
        label="unchecked"
        readonly />

      <WidgetCheckbox
        label="indeterminate"
        indeterminate />

      <WidgetCheckbox
        label="checked"
        checked />

      <WidgetCheckbox
        label="readonly"
        readonly />

      <WidgetCheckbox
        label="checked-readonly"
        checked
        readonly />

      <WidgetCheckbox
        label="disabled"
        disabled />

      <WidgetCheckbox
        label="checked-disabled"
        checked
        disabled />
    </WidgetGroup>
    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadio label="unchecked" />

<WidgetRadio label="checked" checked />

<WidgetRadio label="readonly" readonly />

<WidgetRadio label="checked-readonly" checked readonly />

<WidgetRadio label="disabled" disabled />

<WidgetRadio label="checked-disabled" checked disabled />`}}
    </WidgetCode>
    <!-- prettier-ignore-end -->
  </section>
</template>

<script setup lang="ts">
import { WidgetCheckbox } from '@wiseinfo/wise-widgets';
</script>
