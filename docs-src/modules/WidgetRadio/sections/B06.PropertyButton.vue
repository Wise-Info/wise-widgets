<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Property [ button ]</h4>
    </hgroup>

    <WidgetRadioGroup
      v-model="checked"
      label="Button Radio Group"
      :options="options"
      button />

    <br /><br />

    checked: {{ checked }}

    <br /><br />

    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadioGroup
  v-model="checked"
  label="Button Radio Group"
  :options="options"
  button />

const checked = ref('Option 2');

const options = [
  { label: 'Option 1' },
  { label: 'Option 2', icon: 'f06c' },
  { label: 'Option 3', disabled: true },
  { label: 'Option 4' },
];`}}
    </WidgetCode>
    <!-- prettier-ignore-end -->
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref('Option 2');

const options = [
  { label: 'Option 1' },
  { label: 'Option 2', icon: 'f06c' },
  { label: 'Option 3', disabled: true },
  { label: 'Option 4' },
];
</script>
