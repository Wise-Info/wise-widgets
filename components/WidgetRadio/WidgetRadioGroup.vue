<template>
  <div
    :id="widgetId"
    class="widget-radio-group widget-group"
    :class="{
      required: required,
      disabled: disabled,
      error: localError,
      column: column,
      wrap: wrap,
      [button.shape]: button && button.shape && button.shape !== 'rectangle',
      [button.size]: button && button.size && button.size !== 'normal',
    }">
    <label
      v-if="label !== undefined"
      class="widget-label widget-group__label"
      >{{ label }}</label
    >
    <div class="widget-group__inner">
      <WidgetRadio
        v-for="(option, index) in options"
        :key="index"
        :name="name"
        :class="{
          'widget-button': button,
          major: button && localChecked === option.value,
          minor: button && localChecked !== option.value,
        }"
        v-bind="option"
        :checked="localChecked === option.value"
        :disabled="disabled || option.disabled"
        @change="
          (event) => {
            onChange(option.value, event);
          }
        " />
      <span
        v-if="Boolean(localPrompt)"
        class="widget-group__prompt">
        {{ localPrompt }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { uid } from 'uid';
import WidgetRadio from './WidgetRadio.vue';

const props = defineProps(
  (() => {
    const identify = `widget-${uid(6)}`;
    return {
      widgetId: {
        type: String,
        default: identify,
      },
      name: {
        type: String,
        default: identify,
      },
      label: {
        type: String,
        default: undefined,
      },
      required: {
        type: Boolean,
        default: false,
      },
      options: {
        type: Array,
        required: true,
        validator: (options) =>
          options.every((option) => option.value !== undefined && option.label !== undefined),
      },
      checked: {
        type: [Boolean, Number, String],
        default: undefined,
      },
      modelValue: {
        type: [Boolean, Number, String],
        default: undefined,
      },
      column: {
        type: Boolean,
        default: false,
      },
      wrap: {
        type: Boolean,
        default: false,
      },
      button: {
        type: [Boolean, Object],
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
      prompt: {
        type: String,
        default: undefined,
      },
    };
  })(),
);

const emits = defineEmits(['update:modelValue', 'update:checked', 'change']);

const localError = ref(props.error);
const localPrompt = ref(props.prompt);

watch(
  () => props.error,
  (error) => {
    localError.value = error;
  },
);

watch(
  () => props.prompt,
  (prompt) => {
    localPrompt.value = prompt;
  },
);

const localChecked = ref([]);

watch(
  () => props.checked,
  (value) => {
    if (value !== undefined) {
      if (props.modelValue !== undefined) {
        throw new Error('The props "checked" and "modelValue" cannot be used at the same time.');
      }
      localChecked.value = props.checked;
    }
  },
  { immediate: true },
);

watch(
  () => props.modelValue,
  (value) => {
    if (props.checked === undefined) {
      localChecked.value = value;
    }
  },
  { immediate: true },
);

const onChange = (optionValue, event) => {
  emits('update:modelValue', optionValue);
  emits('update:checked', optionValue);
  emits('change', optionValue, event);
  localError.value = false;
  localPrompt.value = undefined;
};
</script>
