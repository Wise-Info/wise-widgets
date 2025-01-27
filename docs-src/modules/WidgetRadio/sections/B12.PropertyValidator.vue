<template>
  <section class="section">
    <hgroup class="section__title">
      <PropEnums
        widget="WidgetRadioGroup"
        prop="validator" />
    </hgroup>

    <WidgetRadioGroup
      v-model="checked"
      required
      label="Radio Group Validator"
      :options
      :validator />

    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadioGroup
  v-model="checked"
  required
  label="Radio Group Validator"
  :options
  :validator />

const checked = ref(undefined);

const options = [
  { label: 'Option 1' },
  { label: 'Option 2' },
  { label: 'Option 3' },
  { label: 'Option 4' },
];

const validator = (value: string) => {
  if (value !== 'Option 2') {
    return { error: true, prompt: 'Only "Option 2" is allowed' };
  }
};`}}
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

const validator = (value: string) => {
  if (value !== 'Option 2') {
    return { error: true, prompt: 'Only "Option 2" is allowed' };
  }
};
</script>
