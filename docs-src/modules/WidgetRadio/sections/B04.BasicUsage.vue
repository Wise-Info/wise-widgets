<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Basic Usage</h4>
    </hgroup>

    <WidgetRadioGroup
      v-model="checked"
      :options="options" />

    <br /><br />

    checked: {{ checked }}

    <br />

    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadioGroup
  v-model="checked"
  :options="options" />

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

<script lang="ts">
export const viewTitle = 'WidgetRadioGroup';
</script>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref('Option 2');

const options = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' },
];
</script>
