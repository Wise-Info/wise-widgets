<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Property [ type ]</h4>
      <span class="property-enums">
        <span
          v-for="(e, i) in WidgetButton.props.type.enums"
          :key="i"
          :class="{
            default: WidgetButton.props.type.default === e,
          }">
          {{ e }}
        </span>
      </span>
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
</script>
