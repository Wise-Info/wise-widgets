<template>
  <label
    class="widget-radio"
    :class="{
      checked: checked,
      disabled: disabled,
    }">
    <span class="widget-radio__symbol">
      <input
        class="widget-radio__original"
        type="radio"
        :name="name"
        :checked="checked"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @click="$emit('click', $event)"
        @change.stop="onChange" />
    </span>
    <span
      v-if="label !== undefined"
      class="widget-radio__label"
      >{{ label }}</span
    >
  </label>
</template>

<script lang="ts"></script>

<script setup lang="ts">
import { uid } from 'uid';

defineProps({
  widgetId: {
    type: String,
    default: () => `widget-${uid(6)}`,
  },
  name: {
    type: String,
    default: undefined,
  },
  label: {
    type: [String, Number],
    default: undefined,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['focus', 'blur', 'click', 'change', 'update:checked']);

const onChange = (event: Event) => {
  emits('change', (event.target as HTMLInputElement).checked);
  emits('update:checked', (event.target as HTMLInputElement).checked);
};
</script>
