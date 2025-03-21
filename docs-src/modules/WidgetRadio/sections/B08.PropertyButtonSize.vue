<template>
  <section
    class="section"
    style="--label-min-width: 240px">
    <hgroup class="section__title">
      <h4>Property [ button.size ]</h4>
    </hgroup>

    <WidgetRadioGroup
      v-model="checked"
      label="Mini Button Radio Group"
      :options="options"
      :button="{
        size: 'mini',
      }" />

    <br /><br />

    <WidgetRadioGroup
      v-model="checked"
      label="Normal Button Radio Group"
      :options="options"
      button />

    <br /><br />

    <WidgetRadioGroup
      v-model="checked"
      label="Large Button Radio Group"
      :options="options"
      :button="{
        size: 'large',
      }" />

    <br /><br />

    <WidgetRadioGroup
      v-model="checked"
      label="Extra Button Radio Group"
      :options="options"
      :button="{
        size: 'extra',
      }" />

    <br /><br />

    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadioGroup
  v-model="checked"
  label="Mini Button Radio Group"
  :options="options"
  :button="{
    size: 'mini',
  }" />

<WidgetRadioGroup
  v-model="checked"
  label="Normal Button Radio Group"
  :options="options"
  button />

<WidgetRadioGroup
  v-model="checked"
  label="Large Button Radio Group"
  :options="options"
  :button="{
    size: 'large',
  }" />

<WidgetRadioGroup
  v-model="checked"
  label="Extra Button Radio Group"
  :options="options"
  :button="{
    size: 'extra',
  }" />`}}
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
