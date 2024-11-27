<template>
  <section class="section">
    <hgroup class="section__title">
      <!-- <PropEnums
        widget="WidgetButton"
        prop="size" /> -->
    </hgroup>
    <WidgetGroup>
      <WidgetButton
        size="atom"
        label="Atom" />
      <WidgetButton
        size="micro"
        label="Micro" />
      <WidgetButton
        size="mini"
        label="Mini" />
      <WidgetButton
        size="normal"
        label="Normal" />
      <WidgetButton
        size="large"
        label="Large" />
      <WidgetButton
        size="extra"
        label="Extra" />
    </WidgetGroup>
    <WidgetGroup>
      <WidgetButton
        type="major"
        size="atom"
        label="Atom" />
      <WidgetButton
        type="major"
        size="micro"
        label="Micro" />
      <WidgetButton
        type="major"
        size="mini"
        label="Mini" />
      <WidgetButton
        type="major"
        size="normal"
        label="Normal" />
      <WidgetButton
        type="major"
        size="large"
        label="Large" />
      <WidgetButton
        type="major"
        size="extra"
        label="Extra" />
    </WidgetGroup>
  </section>
</template>

<script setup lang="ts">
import { WidgetButton } from '@wiseinfo/wise-widgets';
// import { PropEnums } from '@components';
</script>
