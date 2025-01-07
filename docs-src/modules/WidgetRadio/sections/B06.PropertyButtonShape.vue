<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Property [ button.shape ]</h4>
    </hgroup>

    <WidgetRadioGroup
      v-model="checked"
      label="Rounded Button Radio Group"
      :options="options"
      :button="{
        shape: 'rounded',
      }" />

    <br /><br />

    <WidgetRadioGroup
      v-model="checked"
      label="Capsule Button Radio Group"
      :options="options"
      :button="{
        shape: 'capsule',
      }"
      whole />

    <br /><br />

    <WidgetRadioGroup
      v-model="checked"
      label="Line Button Radio Group"
      :options="options"
      :button="{
        shape: 'line',
      }"
      gap="0" />

    <br /><br />

    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadioGroup
  v-model="checked"
  label="Rounded Button Radio Group"
  :options="options"
  :button="{
    shape: 'rounded',
  }" />

  <WidgetRadioGroup
  v-model="checked"
  label="Rounded Button Radio Group"
  :options="options"
  :button="{
    shape: 'capsule',
  }"
  whole />

  <WidgetRadioGroup
  v-model="checked"
  label="Rounded Button Radio Group"
  :options="options"
  :button="{
    shape: 'line',
  }"
  gap="0" />
`}}
    </WidgetCode>
    <!-- prettier-ignore-end -->
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref('Option 2');

const options = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3', disabled: true },
  { label: 'Option 4' },
];
</script>
