<template>
  <section class="section">
    <hgroup class="section__title">
      <!-- <PropEnums
        widget="WidgetButton"
        prop="shape" /> -->
    </hgroup>
    <WidgetGroup>
      <WidgetButton
        shape="rectangle"
        label="Rectangle" />
      <WidgetButton
        shape="rounded"
        label="Rounded" />
      <WidgetButton
        shape="capsule"
        label="Capsule" />
      <WidgetButton
        shape="line"
        label="Line" />
    </WidgetGroup>
    <WidgetGroup>
      <WidgetButton
        type="major"
        shape="rectangle"
        label="Rectangle" />
      <WidgetButton
        type="major"
        shape="rounded"
        label="Rounded" />
      <WidgetButton
        type="major"
        shape="capsule"
        label="Capsule" />
      <WidgetButton
        type="major"
        shape="line"
        label="Line" />
    </WidgetGroup>
  </section>
</template>

<script setup lang="ts">
import { WidgetButton } from '@wiseinfo/wise-widgets';
// import { PropEnums } from '@components';
</script>
