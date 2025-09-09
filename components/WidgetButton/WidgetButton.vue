<template>
  <button
    class="widget-button widget-button__original"
    :class="{
      [type]: true,
      [shape]: shape !== 'rectangle',
      [size]: size !== 'normal',
      [state]: state !== 'normal',
      [usage]: usage !== 'normal',
      disabled: disabled || state === 'disabled',
      error: error || state === 'error',
      block: block,
      'icon-only': iconOnly,
    }"
    :type="type === 'submit' || type === 'reset' ? type : 'button'"
    :autofocus="autoFocus"
    :disabled="disabled || state === 'disabled'"
    :title="label"
    :aria-label="label">
    <WidgetIcon
      v-if="icon || state === 'running'"
      class="widget-button__icon"
      :class="{
        'widget-button__running-icon': state === 'running',
      }"
      v-bind="localIcon" />
    <span
      class="widget-button__label"
      :style="{ textTransform } as StyleValue">
      <template v-if="Boolean(label)">
        {{ label }}
      </template>
      <slot v-else />
    </span>
  </button>
</template>

<script lang="ts">
import type { StyleValue } from 'vue';

import { enumSize, type Size, enumUsage, type Usage } from '../enums.ts';

const enums = {
  type: ['text', 'minor', 'major', 'reset', 'button', 'submit'],
  shape: ['rectangle', 'rounded', 'capsule', 'line'],
  size: enumSize,
  state: ['normal', 'active', 'running', 'disabled', 'error'],
  usage: enumUsage,
  textTransform: ['capitalize', 'lowercase', 'uppercase'],
};

export const WidgetButtonEnums = enums;

type WidgetButtonType = (typeof enums.type)[number];
type WidgetButtonShape = (typeof enums.shape)[number];
type WidgetButtonState = (typeof enums.state)[number];
type WidgetButtonTextTransform = (typeof enums.textTransform)[number];

export interface WidgetButtonProps {
  label?: string;
  type?: WidgetButtonType;
  shape?: WidgetButtonShape;
  size?: Size;
  block?: boolean;
  state?: WidgetButtonState;
  usage?: Usage;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
  icon?: string | WidgetIconProps;
  iconOnly?: boolean;
  textTransform?: WidgetButtonTextTransform | string;
  events?: Record<string, (event: Event) => void>;
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { WidgetIcon, WidgetIconProps } from '../WidgetIcon/index.ts';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'button',
    enums: enums.type,
    validator: (type: string) => enums.type.includes(type),
  },
  shape: {
    type: String,
    default: 'rectangle',
    enums: enums.shape,
    validator: (shape: string) => enums.shape.includes(shape),
  },
  size: {
    type: String,
    default: 'normal',
    enums: enums.size,
    validator: (size: string) => enums.size.includes(size),
  },
  block: {
    type: Boolean,
    default: false,
  },
  state: {
    type: String,
    default: 'normal',
    enums: enums.state,
    validator: (state: string) => enums.state.includes(state),
  },
  usage: {
    type: String,
    default: 'normal',
    enums: enums.usage,
    validator: (usage: string) => enums.usage.includes(usage),
  },
  autoFocus: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
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
  textTransform: {
    type: String,
    default: undefined,
    enums: enums.textTransform,
    validator: (textTransform: string) => enums.textTransform.includes(textTransform),
  },
});

const localIcon = computed((): WidgetIconProps => {
  return props.state === 'running'
    ? { icon: 'e863' }
    : typeof props.icon === 'string'
      ? { icon: props.icon }
      : (props.icon as WidgetIconProps);
});
</script>
