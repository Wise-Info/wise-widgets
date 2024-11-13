<template>
  <button
    class="widget-button"
    :class="{
      [type]: true,
      [shape]: shape !== 'rectangle',
      [size]: size !== 'normal',
      [state]: state !== 'normal',
      [usage]: usage !== 'normal',
      disabled: disabled || state === 'disabled',
      block: block,
      'icon-only': iconOnly,
    }"
    :type="type === 'submit' || type === 'reset' ? type : 'button'"
    :disabled="disabled || ['running', 'disabled'].includes(state)"
    :title="label">
    <WidgetIcon
      v-if="icon || state === 'running'"
      class="widget-button__icon"
      :class="{
        'widget-button__running-icon': state === 'running',
      }"
      v-bind="localIcon" />
    <span class="widget-button__label">
      <template v-if="Boolean(label)">
        {{ label }}
      </template>
      <slot v-else />
    </span>
  </button>
</template>

<script lang="ts">
  const enums = {
    type: ['text', 'minor', 'major', 'reset', 'button', 'submit'],
    shape: ['rectangle', 'rounded', 'capsule', 'line'],
    size: ['extra', 'large', 'normal', 'mini', 'micro', 'atom'],
    state: ['normal', 'active', 'running', 'disabled'],
    usage: ['mute', 'normal', 'warning', 'danger', 'error'],
  };

  export const WidgetButtonEnums = enums;

  type WidgetButtonType = (typeof enums.type)[number];
  type WidgetButtonShape = (typeof enums.shape)[number];
  type WidgetButtonSize = (typeof enums.size)[number];
  type WidgetButtonState = (typeof enums.state)[number];
  type WidgetButtonUsage = (typeof enums.usage)[number];

  export interface WidgetButtonProps {
    label?: string;
    type?: WidgetButtonType;
    shape?: WidgetButtonShape;
    size?: WidgetButtonSize;
    block?: boolean;
    state?: WidgetButtonState;
    disabled?: boolean;
    usage?: WidgetButtonUsage;
    icon?: string | WidgetIconProps;
    iconOnly?: boolean;
  }
</script>

<script setup lang="ts">
  import { computed } from 'vue';
  import { WidgetIcon, WidgetIconProps } from '../WidgetIcon';

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
    disabled: {
      type: Boolean,
      default: false,
    },
    usage: {
      type: String,
      default: 'normal',
      enums: enums.usage,
      validator: (usage: string) => enums.usage.includes(usage),
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

  const localIcon = computed((): WidgetIconProps => {
    return props.state === 'running'
      ? { icon: 'e863' }
      : typeof props.icon === 'string'
        ? { icon: props.icon }
        : (props.icon as WidgetIconProps);
  });
</script>
