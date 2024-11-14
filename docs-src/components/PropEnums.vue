<template>
  <h4>Property [ {{ prop }} ]</h4>
  <span class="property-enums">
    <span
      v-for="e in enums"
      :key="e"
      :class="{ default: defaultValue === e }">
      {{ e }}
    </span>
  </span>
</template>
<script setup lang="ts">
  import * as wiseWidgets from '@wiseinfo/wise-widgets';

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

  const { enums, default: defaultValue } = wiseWidgets[props.widget].props[props.prop];
</script>

<style lang="scss">
  .property-enums {
    margin: $size-base 0;
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
