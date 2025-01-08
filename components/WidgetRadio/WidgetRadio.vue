<template>
  <label
    class="widget-radio"
    :class="{
      checked: checked,
      disabled: disabled,
      'icon-only': iconOnly,
    }">
    <span class="widget-radio__symbol">
      <input
        class="widget-radio__original"
        type="radio"
        :name="name"
        :value="value || label"
        :checked="checked"
        :disabled="disabled"
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
import { computed } from 'vue';
import { WidgetIcon, WidgetIconProps } from '../WidgetIcon/index.ts';

export type WidgetRadioValue = boolean | number | string;

export interface WidgetRadioProps {
  name: string;
  label?: number | string;
  value?: WidgetRadioValue;
  checked?: boolean;
  disabled: boolean;
  icon?: string | WidgetIconProps;
  iconOnly: boolean;
  events: Record<string, (event: Event) => void>;
}
</script>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: undefined,
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
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: [String, Object],
    default: undefined,
  },
  iconOnly: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['update:checked', 'change']);

const onChange = (event: Event) => {
  emits('change', (event.target as HTMLInputElement).checked);
  emits('update:checked', (event.target as HTMLInputElement).checked);
};

const localIcon = computed((): WidgetIconProps => {
  return typeof props.icon === 'string' ? { icon: props.icon } : (props.icon as WidgetIconProps);
});
</script>
