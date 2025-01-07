<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Property [ button.shape ]</h4>
    </hgroup>

    <WidgetRadioGroup
      v-model="align"
      label="Align"
      :options="alignOptions"
      :button="{
        shape: 'rounded',
      }"
      whole
      gap="0" />

    <br /><br />

    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadioGroup
  v-model="align"
  label="Align"
  :options="alignOptions"
  :button="{
    shape: 'rounded',
  }"
  whole
  gap="0" />

const align = ref('left');

const alignOptions = [
  { label: 'Left', value: 'left', icon: 'e236', iconOnly: true },
  { label: 'Center', value: 'center', icon: 'e234', iconOnly: true },
  { label: 'Right', value: 'right', icon: 'e237', iconOnly: true },
  { label: 'Justify', value: 'justify', icon: 'e235', iconOnly: true },
];`}}
    </WidgetCode>
    <!-- prettier-ignore-end -->
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const align = ref('left');

const alignOptions = computed(() =>
  [
    { label: 'Left', value: 'left', icon: 'e236', iconOnly: true },
    { label: 'Center', value: 'center', icon: 'e234', iconOnly: true },
    { label: 'Right', value: 'right', icon: 'e237', iconOnly: true },
    { label: 'Justify', value: 'justify', icon: 'e235', iconOnly: true },
  ].map((option) =>
    option.value === align.value
      ? {
          ...option,
          iconOnly: false,
        }
      : option,
  ),
);
</script>
