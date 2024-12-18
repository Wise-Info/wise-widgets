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
    <br /><br /><br /><br />
    <WidgetCard
      class="active"
      style="width: 400px; height: 160px">
      <p>I am an example.</p>
      <br /><br /><br /><br />
      <WidgetGroup
        direction="row-reverse"
        justify="end">
        <WidgetButton
          type="major"
          icon="e541"
          label="Coffee Time" />
        <WidgetButton
          type="text"
          label="Cancel" />
      </WidgetGroup>
    </WidgetCard>
  </section>
</template>
<script setup lang="ts">
import { WidgetButton } from '@wiseinfo/wise-widgets';
import { PropEnums } from '@components';
</script>
