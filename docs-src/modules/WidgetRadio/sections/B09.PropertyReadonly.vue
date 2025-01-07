<template>
  <section class="section">
    <hgroup class="section__title">
      <PropEnums
        widget="WidgetGroup"
        prop="readonly" />
    </hgroup>

    <WidgetRadioGroup
      v-model="checked"
      label="Readonly Radio Group"
      :options="options"
      readonly />

    <br /><br />

    checked: {{ checked }}

    <br /><br />

    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadioGroup
  v-model="checked"
  :options="options"
  readonly />

const checked = ref('Option 2');

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
import { PropEnums } from '@components';

const checked = ref('Option 2');

const options = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' },
];
</script>
