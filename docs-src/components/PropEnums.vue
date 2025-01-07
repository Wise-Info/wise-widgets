<template>
  <h4>Property [ {{ prop }} ]</h4>
  <span class="property-enums">
    <template v-if="type?.name === 'Boolean'">
      <span :class="{ default: defaultValue }">true</span>
      <span :class="{ default: !defaultValue }">false</span>
    </template>
    <template v-else>
      <span
        v-for="e in localEnums"
        :key="e"
        :class="{ default: defaultValue === e }">
        {{ e }}
      </span>
    </template>
  </span>
</template>
<script setup lang="ts">
import { widgets } from '@wiseinfo/wise-widgets';

const props = defineProps({
  widget: {
    type: String,
    required: true,
  },
  prop: {
    type: String,
    required: true,
  },
});

const { enums, type, default: defaultValue } = widgets[props.widget].props?.[props.prop] || {};

const localEnums = [
  ...new Set((enums && enums.map((e: number | string) => e.toString())) || []),
] as string[];
</script>

<style lang="scss">
.property-enums {
  margin: $size-base;
  font-size: $size-base * 2;
  line-height: $size-base * 3;

  &::before {
    content: ' : ';
  }

  span + span {
    &::before {
      content: ', ';
    }
  }

  .default {
    font-weight: bold;
  }
}
</style>
