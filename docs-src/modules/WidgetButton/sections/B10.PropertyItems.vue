<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Property [ <span>items</span> ]</h4>
    </hgroup>
    <WidgetButtonGroup :items="items" />
    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetButtonGroup :items="items" />

const items = [
  { type: 'text', label: 'Text', disabled: true },
  { type: 'minor', label: 'Minor', icon: 'f06c' },
  {
    type: 'major',
    label: 'Major',
    events: {
      click: (event: MouseEvent) => {
        console.info('Hello', event);
      },
    },
  },
  { type: 'reset', label: 'Reset' },
  { type: 'button', label: 'Button' },
  { type: 'submit', label: 'Submit' },
];`}}
    </WidgetCode>
    <!-- prettier-ignore-end -->
  </section>
</template>

<script setup lang="ts">
const items = [
  { type: 'text', label: 'Text', disabled: true },
  { type: 'minor', label: 'Minor', icon: 'f06c' },
  {
    type: 'major',
    label: 'Major',
    events: {
      click(event: MouseEvent) {
        console.info('Hello', event);
      },
    },
  },
  { type: 'reset', label: 'Reset' },
  { type: 'button', label: 'Button' },
  { type: 'submit', label: 'Submit' },
];
</script>
