<template>
  <section class="section">
    <hgroup class="section__title">
      <PropEnums
        widget="WidgetButton"
        prop="type" />
    </hgroup>
    <WidgetGroup>
      <WidgetButton
        type="text"
        label="Text" />
      <WidgetButton
        type="minor"
        label="Minor" />
      <WidgetButton
        type="major"
        label="Major" />
      <WidgetButton
        type="reset"
        label="Reset" />
      <WidgetButton
        type="button"
        label="Button" />
      <WidgetButton
        type="submit"
        label="Submit" />
    </WidgetGroup>
  </section>
</template>
<script setup lang="ts">
  import { WidgetButton } from '@wiseinfo/wise-widgets';
  import { PropEnums } from '@components';
</script>
