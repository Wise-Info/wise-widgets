<template>
  <WidgetGroup
    class="widget-radio-group"
    :class="{
      required,
      [buttonShape]: buttonShape,
      [buttonSize]: buttonSize,
      whole,
      readonly,
      disabled,
      error,
    }"
    v-bind="{
      label,
      gap,
      direction,
      justify,
      wrap,
    }"
    role="radiogroup"
    :aria-required="required"
    :aria-label="label">
    <WidgetRadio
      v-for="(option, index) in localOptions"
      :key="`${name}-${index}`"
      v-model="value"
      :index
      :name
      :class="{
        'widget-button': button,
        major: button && value === (option.value || option.label || index),
        minor: button && value !== (option.value || option.label || index),
        [buttonShape]: buttonShape,
        [buttonSize]: buttonSize,
        'icon-only': button && option.iconOnly,
      }"
      :required
      :disabled="disabled || option.disabled"
      v-bind="option"
      v-on="option.events || {}" />
    <div
      v-if="prompt"
      class="widget-prompt widget-radio-group__prompt">
      {{ prompt }}
    </div>
  </WidgetGroup>
</template>

<script lang="ts">
import { WidgetGroup, WidgetGroupProps } from '../WidgetGroup/index.ts';
import WidgetRadio, { WidgetRadioValue, WidgetRadioProps } from './WidgetRadio.vue';
import { WidgetButtonEnums } from '../WidgetButton/index.ts';

type Button = {
  shape?: (typeof WidgetButtonEnums.shape)[number];
  size?: (typeof WidgetButtonEnums.size)[number];
};

export interface WidgetRadioGroupProps extends WidgetGroupProps {
  label?: string;
  name?: string;
  required?: boolean;
  options: WidgetRadioProps[];
  optionsProps?: WidgetRadioProps;
  value?: WidgetRadioValue;
  readonly?: boolean;
  disabled?: boolean;
  validator?: (
    value: WidgetRadioValue | undefined,
  ) => boolean | { error: boolean; prompt?: string };
  error?: boolean;
  prompt?: string;
  button?: boolean | Button;
  whole?: boolean;
}
</script>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { uid } from 'uid';

const value = defineModel<WidgetRadioValue>();

const error = defineModel<boolean>('error', {
  type: Boolean,
  default: false,
});

const prompt = defineModel<string>('prompt', {
  type: String,
  default: '',
});

const props = withDefaults(
  defineProps<Omit<WidgetRadioGroupProps, 'modelValue' | 'error' | 'prompt'>>(),
  {
    name: () => `widget-${uid(6)}`,
    required: false,
    options: () => [],
    optionsProps: () => ({}) as WidgetRadioProps,
    readonly: false,
    disabled: false,
    error: false,
    prompt: '',
    button: false,
    whole: false,
  },
);

const emit = defineEmits(['change']);

// merge optionsProps with options
const localOptions = computed(() =>
  props.options.map((option) => ({
    ...props.optionsProps,
    ...option,
  })),
);

// validate options
watch(
  () => props.options,
  (options) => {
    const values = options.reduce((acc: WidgetRadioValue[], option, index) => {
      if (option.value === undefined && option.label === undefined) {
        console.warn(
          `[WidgetRadioGroup] Error : The "value" or "label" property is required in the options[${index}].`,
        );
      }
      acc.push(option.value || option.label || index);
      return acc;
    }, []);
    if (new Set(values).size !== values.length) {
      console.warn(
        `[WidgetRadioGroup] Error : The "value" property in the options must be unique.`,
      );
    }
  },
  { immediate: true },
);

watch(
  () => value.value,
  (value) => {
    emit('change', value);

    error.value = false;
    prompt.value = '';

    if (props.validator) {
      const validatorResult = props.validator(value);
      if (typeof validatorResult === 'object') {
        error.value = validatorResult.error;
        prompt.value = validatorResult.prompt || '';
      } else if (validatorResult === false) {
        error.value = true;
      }
    }
  },
);

const buttonShape = computed(() =>
  props.whole &&
  typeof props.button === 'object' &&
  props.button.shape &&
  props.button.shape !== 'rectangle'
    ? props.button.shape
    : '',
);

const buttonSize = computed(() =>
  typeof props.button === 'object' && props.button.size && props.button.size !== 'normal'
    ? props.button.size
    : '',
);
</script>

<style lang="scss">
.widget-radio-group {
  &.readonly {
    cursor: not-allowed;
    .widget-radio {
      pointer-events: none;
    }
  }
  &.error {
    .widget-radio {
      --color: var(--color-error);
      &:hover,
      &:focus {
        --color: var(--color-error-toggle);
      }
    }
  }
}
</style>
