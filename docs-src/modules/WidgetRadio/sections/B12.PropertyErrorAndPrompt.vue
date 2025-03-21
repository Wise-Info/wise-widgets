<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Property [ error, prompt ]</h4>
    </hgroup>

    <WidgetRadioGroup
      v-model="checked"
      required
      label="Error Radio Group"
      :options="options"
      error
      prompt="Field is required" />

    <br /><br /><br /><br />

    <WidgetRadioGroup
      v-model="checked"
      required
      label="Error Radio Group"
      :options="options"
      button
      error
      prompt="Field is required" />

    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadioGroup
  v-model="checked"
  required
  label="Error Radio Group"
  :options="options"
  error
  prompt="Field is required" />

const checked = ref(undefined);

const options = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' },
];`}}
    </WidgetCode>
    <!-- prettier-ignore-end -->
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(undefined);

const options = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' },
];
</script>
