<template>
  <section class="section">
    <hgroup class="section__title">
      <PropEnums
        widget="WidgetRadioGroup"
        prop="disabled" />
    </hgroup>

    <WidgetRadioGroup
      v-model="checked"
      label="Disabled Radio Group"
      :options="options"
      disabled />

    <br /><br />

    checked: {{ checked }}

    <br /><br />

    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadioGroup
  v-model="checked"
  :options="options"
  disabled />

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
