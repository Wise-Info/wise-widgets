<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Advanced Usage</h4>
    </hgroup>

    <WidgetRadioGroup
      v-model="checked"
      required
      label="Radio Group"
      :options="options"
      direction="column" />

    <br /><br />

    checked: {{ checked }}

    <br /><br />

    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadioGroup
  v-model="checked"
  required
  label="Radio Group"
  :options="options"
  direction="column" />

const checked = ref(2);

const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3, disabled: true },
  { label: 'Option 4', value: 4 },
];`}}
    </WidgetCode>
    <!-- prettier-ignore-end -->
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(2);

const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3, disabled: true },
  { label: 'Option 4', value: 4 },
];
</script>
