<template>
  <section class="section">
    <hgroup class="section__title">
      <!-- <PropEnums
        widget="WidgetButton"
        prop="usage" /> -->
    </hgroup>
    <WidgetGroup>
      <WidgetButton
        usage="mute"
        label="Mute" />
      <WidgetButton label="Normal" />
      <WidgetButton
        usage="warning"
        label="Warning" />
      <WidgetButton
        usage="danger"
        label="Danger" />
    </WidgetGroup>
    <WidgetGroup>
      <WidgetButton
        type="major"
        usage="mute"
        label="Mute" />
      <WidgetButton
        type="major"
        label="Normal" />
      <WidgetButton
        type="major"
        usage="warning"
        label="Warning" />
      <WidgetButton
        type="major"
        usage="danger"
        label="Danger" />
    </WidgetGroup>
  </section>
</template>

<script setup lang="ts">
import { WidgetButton } from '@wiseinfo/wise-widgets';
// import { PropEnums } from '@components';
</script>
