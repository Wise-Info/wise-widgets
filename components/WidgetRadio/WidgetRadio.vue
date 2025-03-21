<template>
  <label
    class="widget-radio"
    :class="{
      [size]: size !== 'normal',
    }">
    <input
      v-model="modelValue"
      class="widget-radio__original"
      type="radio"
      :required
      :name
      :value="value || label"
      :readonly
      :disabled="disabled || readonly"
      :aria-disabled="disabled"
      v-on="events" />
    <span class="widget-radio__container">
      <span class="widget-radio__symbol" />
      <WidgetIcon
        v-if="icon"
        class="widget-button__icon"
        v-bind="localIcon" />
      <span class="widget-radio__label">
        <template v-if="label || value !== undefined">
          {{ label || value }}
        </template>
        <slot v-else />
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import { WidgetIcon, WidgetIconProps } from '../WidgetIcon/index.ts';

const enums = {
  size: ['mini', 'normal', 'large', 'extra'],
};

export type Size = (typeof enums.size)[number];

export const WidgetRadioEnums = enums;

export type WidgetRadioValue = boolean | number | string;

export interface WidgetRadioProps {
  name?: string;
  required?: boolean;
  label?: number | string;
  value?: WidgetRadioValue;
  size?: Size;
  icon?: string | WidgetIconProps;
  iconOnly?: boolean;
  checked?: boolean;
  modelValue?: WidgetRadioValue;
  readonly?: boolean;
  disabled?: boolean;
  events?: Record<string, (event: Event) => void>;
}
</script>

<script lang="ts" setup>
import { computed, watch } from 'vue';

const modelValue = defineModel<WidgetRadioValue>();

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
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  events: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['update:checked']);

watch(
  () => props.checked,
  (checked: boolean) => {
    if (checked) {
      modelValue.value = props.value || props.label;
    }
  },
  { immediate: true },
);

watch(
  () => modelValue.value,
  (value) => {
    const newChecked = value === props.value || value === props.label;
    if (newChecked !== props.checked) {
      emit('update:checked', newChecked);
    }
  },
);

const localIcon = computed((): WidgetIconProps => {
  return typeof props.icon === 'string' ? { icon: props.icon } : (props.icon as WidgetIconProps);
});
</script>
