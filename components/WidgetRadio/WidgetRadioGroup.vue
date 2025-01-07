<template>
  <WidgetGroup
    class="widget-radio-group"
    :class="{
      required,
      [buttonShape]: buttonShape,
      [buttonSize]: buttonSize,
      whole,
    }"
    v-bind="{
      label,
      gap,
      direction,
      justify,
      wrap,
      readonly,
      disabled,
      error: localError,
    }">
    <WidgetRadio
      v-for="(option, index) in options"
      :key="`${name}-${index}`"
      :index="index"
      :class="{
        'widget-button': button,
        major: button && modelValue === (option.value || option.label || index),
        minor: button && modelValue !== (option.value || option.label || index),
        [buttonShape]: buttonShape,
        [buttonSize]: buttonSize,
      }"
      v-bind="option"
      :checked="modelValue === (option.value || option.label || index)"
      :disabled="disabled || option.disabled"
      v-on="{
        ...option.events,
      }"
      @change="
        (event) => {
          onChange(option.value || option.label || index, event);
        }
      " />
    <div
      v-if="localPrompt"
      class="widget-prompt widget-radio-group__prompt">
      {{ localPrompt }}
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
  name?: string;
  required?: boolean;
  options: WidgetRadioProps[];
  optionsProps?: WidgetRadioProps;
  modelValue?: WidgetRadioValue;
  button?: boolean | Button;
  whole?: boolean;
  readonly?: boolean;
  prompt?: string;
}
</script>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { uid } from 'uid';

const props = withDefaults(defineProps<WidgetRadioGroupProps>(), {
  name: `widget-${uid(6)}`,
  required: false,
  options: () => [],
  optionsProps: () => ({}) as WidgetRadioProps,
  modelValue: undefined,
  button: false,
  whole: false,
  prompt: '',
});

const emit = defineEmits(['update:modelValue', 'change', 'update:error', 'update:prompt']);

// validate options
watch(
  () => props.options,
  (options) => {
    const values = options.reduce((acc: WidgetRadioValue[], option, index) => {
      if (option.value === undefined && option.label === undefined) {
        console.error(
          `[WidgetRadioGroup] Error : The "value" or "label" property is required in the options[${index}].`,
        );
      }
      acc.push(option.value || option.label || index);
      return acc;
    }, []);
    if (new Set(values).size !== values.length) {
      console.error(
        `[WidgetRadioGroup] Error : The "value" property in the options must be unique.`,
      );
    }
  },
  { immediate: true },
);

const localError = ref(false);
const localPrompt = ref('');

watch(
  () => props.error,
  (error) => {
    localError.value = error;
  },
  { immediate: true },
);

watch(
  () => props.prompt,
  (prompt) => {
    localPrompt.value = prompt;
  },
  { immediate: true },
);

const onChange = (newValue: WidgetRadioValue, event: Event) => {
  emit('update:modelValue', newValue);
  emit('change', newValue, event);

  localError.value = false;
  localPrompt.value = '';
};

const buttonShape = computed(() =>
  typeof props.button === 'object' && props.button.shape && props.button.shape !== 'rectangle'
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
}
</style>
