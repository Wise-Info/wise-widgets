<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Two Way Binding</h4>
    </hgroup>

    <h5>use v-model to binding a value</h5>

    <WidgetGroup gap="4">
      <WidgetRadio
        v-model="selected"
        label="Option 1" />

      <WidgetRadio
        v-model="selected"
        label="Option 2" />
    </WidgetGroup>

    <br />

    <WidgetGroup gap="4">
      <WidgetButton
        label="Select Option 1"
        size="mini"
        @click="selected = 'Option 1'" />
      <span>Selected: {{ selected }}</span>
    </WidgetGroup>

    <!-- prettier-ignore -->
    <WidgetCode>
{{`<WidgetRadio v-model="selected" label="Option 1" />

<WidgetRadio v-model="selected" label="Option 2" />


const selected = ref('Option 2');`}}
    </WidgetCode>
    <!-- prettier-ignore-end -->
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { WidgetRadio } from '@wiseinfo/wise-widgets';

const selected = ref('Option 2');
</script>
