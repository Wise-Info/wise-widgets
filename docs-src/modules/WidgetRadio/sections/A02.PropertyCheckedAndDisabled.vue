<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Property [ checked , readonly , disabled ] - State</h4>
      <span class="property-enums">
        <span class="default">unchecked</span>
        <span>checked</span>
        <span>disabled</span>
        <span>checked-disabled</span>
      </span>
    </hgroup>
    <WidgetGroup gap="4">
      <WidgetRadio
        label="unchecked"
        readonly />

      <WidgetRadio
        label="checked"
        checked />

      <WidgetRadio
        label="disabled"
        disabled />

      <WidgetRadio
        label="checked-disabled"
        checked
        disabled />
    </WidgetGroup>
    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadio label="unchecked" />

<WidgetRadio
  label="checked"
  checked />

<WidgetRadio
  label="disabled"
  disabled />

<WidgetRadio
  label="checked-disabled"
  checked
  disabled />`}}
    </WidgetCode>
    <!-- prettier-ignore-end -->
  </section>
</template>

<script setup lang="ts">
import { WidgetRadio } from '@wiseinfo/wise-widgets';
</script>
