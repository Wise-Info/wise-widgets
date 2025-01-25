<template>
  <label
    class="widget-switch"
    :class="{
      readonly: readonly,
      disabled: disabled,
    }">
    <input
      ref="original"
      v-model="localChecked"
      class="widget-switch__original"
      type="checkbox"
      :readonly="readonly"
      :disabled="disabled" />
    <span class="widget-switch__symbol" />
    <span
      v-if="label || $slots.default"
      class="widget-switch__label">
      <template v-if="label">
        {{ label }}
      </template>
      <slot v-else />
    </span>
  </label>
</template>
<script lang="ts">
import { enumSize, type Size } from '../enums.ts';

const enums = {
  size: enumSize,
};

export const WidgetSwitchEnums = enums;

export interface WidgetSwitchProps {
  label?: number | string;
  modelValue?: boolean;
  checked?: boolean;
  size?: Size;
  readonly?: boolean;
  disabled?: boolean;
}
</script>
<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps({
  label: {
    type: [Number, String],
    default: undefined,
  },
  modelValue: {
    type: Boolean,
    default: undefined,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const original = ref<HTMLInputElement | null>(null);

const emit = defineEmits(['update:modelValue', 'update:checked', 'change']);

const localChecked = ref(props.checked);

watch(
  () => props.modelValue,
  (value) => {
    if (value !== undefined) {
      localChecked.value = value;
    }
  },
);

watch(
  () => localChecked.value,
  () => {
    emit('update:modelValue', localChecked.value);
    emit('update:checked', localChecked.value);
    emit('change', localChecked.value);
    original.value?.blur();
  },
);
</script>
