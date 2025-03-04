<template>
  <label
    class="widget-radio"
    :class="{
      checked: checked,
      readonly: readonly,
      disabled: disabled,
      'icon-only': iconOnly,
    }">
    <span class="widget-radio__symbol">
      <input
        v-model="checked"
        class="widget-radio__original"
        type="radio"
        :required
        :name
        :value="value || label"
        :checked
        :readonly
        :disabled
        @change.stop="onChange" />
    </span>
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
  </label>
</template>

<script lang="ts">
import { WidgetIcon, WidgetIconProps } from '../WidgetIcon/index.ts';

import { enumSize, type Size } from '../enums.ts';

const enums = {
  size: enumSize,
};

export const WidgetRadioEnums = enums;

export type WidgetRadioValue = boolean | number | string;

export interface WidgetRadioProps {
  name?: string;
  required?: boolean;
  label?: number | string;
  value?: WidgetRadioValue;
  checked?: boolean;
  size?: Size;
  icon?: string | WidgetIconProps;
  iconOnly?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  events?: Record<string, (event: Event) => void>;
}
</script>

<script lang="ts" setup>
import { computed } from 'vue';

const checked = defineModel('checked', {
  type: Boolean,
  default: false,
});

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
  iconOnly: {
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

const onChange = (event: Event) => {
  // checked.value = (event.target as HTMLInputElement).checked;

  emits('change', (event.target as HTMLInputElement).checked);
};

const localIcon = computed((): WidgetIconProps => {
  return typeof props.icon === 'string' ? { icon: props.icon } : (props.icon as WidgetIconProps);
});

// TODO: Size

// TODO: Use :checked pseudo-class replace label checked class
</script>
