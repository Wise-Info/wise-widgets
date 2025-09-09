<template>
  <label
    class="widget-checkbox"
    :class="{
      [size]: size !== 'normal',
    }">
    <input
      ref="original"
      v-model="modelValue"
      class="widget-checkbox__original"
      type="checkbox"
      :required
      :name
      :value="value || label"
      :readonly
      :disabled="disabled || readonly" />
    <span class="widget-checkbox__container">
      <span class="widget-checkbox__symbol" />
      <WidgetIcon
        v-if="icon"
        class="widget-button__icon"
        v-bind="localIcon" />
      <span class="widget-checkbox__label">
        <template v-if="label || value !== undefined">
          {{ label || value }}
        </template>
        <slot v-else />
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import {
  // WidgetIcon,
  WidgetIconProps,
} from '../WidgetIcon/index.ts';

import { enumSize, type Size } from '../enums.ts';

const enums = {
  size: enumSize,
};

export const WidgetCheckboxEnums = enums;

export type WidgetCheckboxValue = boolean | number | string;

export interface WidgetCheckboxProps {
  name?: string;
  required?: boolean;
  label?: number | string;
  value?: WidgetCheckboxValue;
  size?: Size;
  icon?: string | WidgetIconProps;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  events?: Record<string, (event: Event) => void>;
}
</script>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';

const original = ref<HTMLInputElement | null>(null);

const modelValue = defineModel<WidgetCheckboxValue[]>();

const props = defineProps({
  name: {
    type: String,
    default: undefined,
  },
  required: {
    type: Boolean,
    default: false,
  },
  label: {
    type: [Number, String],
    default: undefined,
  },
  value: {
    type: [Boolean, Number, String],
    default: undefined,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'normal',
    enums: enums.size,
    validator: (size: string) => enums.size.includes(size),
  },
  icon: {
    type: [String, Object],
    default: undefined,
  },
  indeterminate: {
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

const emits = defineEmits(['change']);

watch(
  () => props.indeterminate,
  (indeterminate) => {
    if (original.value) {
      original.value.indeterminate = indeterminate;
    }
  },
);

onMounted(() => {
  if (original.value && props.indeterminate) {
    original.value.indeterminate = props.indeterminate;
    console.log({
      propIndeterminate: props.indeterminate,
      indeterminate: original.value.indeterminate,
      classList: original.value.classList,
    });
  }
});

const onChange = (event: Event) => {
  console.log({
    propIndeterminate: props.indeterminate,
    indeterminate: (event.target as HTMLInputElement).indeterminate,
    class: (event.target as HTMLInputElement).classList,
  });
  emits('change', (event.target as HTMLInputElement).checked);
};

const localIcon = computed((): WidgetIconProps => {
  return typeof props.icon === 'string' ? { icon: props.icon } : (props.icon as WidgetIconProps);
});
</script>
