<template>
  <WidgetGroup
    class="widget-radio-group"
    :class="{
      whole,
    }"
    v-bind="{
      label,
      gap,
      direction,
      justify,
      wrap,
      disabled,
      error,
    }">
    <template
      v-for="(option, index) in options"
      :key="`${widgetId}-${index}`">
      <WidgetRadio
        :index="index"
        v-bind="option"
        :checked="localChecked === `${option.value || option.label || index}`"
        v-on="{
          ...option.events,
        }"
        @change="
          (event) => {
            onChange(option.value || option.label || index, event);
          }
        " />
    </template>
  </WidgetGroup>
</template>
<script lang="ts">
import { WidgetGroup, WidgetGroupEnums, WidgetGroupProps } from '../WidgetGroup/index.ts';
import WidgetRadio, { WidgetRadioProps } from './WidgetRadio.vue';

export interface WidgetButtonGroupProps extends WidgetGroupProps {
  widgetId?: string;
  name?: string;
  required?: boolean;
}
</script>

<script setup lang="ts">
import { ref, computed, type PropType, watch } from 'vue';
import { uid } from 'uid';

const value = defineModel({ type: String, default: undefined });

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
        type: Array as PropType<WidgetRadioProps[]>,
        default: () => [],
      },
      optionsProps: {
        type: Object,
        default: () => ({}),
      },

      modelValue: {
        type: [Boolean, Number, String],
        default: undefined,
      },

      checked: {
        type: [Boolean, Number, String],
        default: undefined,
      },

      whole: {
        type: Boolean,
        default: false,
      },
      gap: {
        type: [Number, String],
        default: 2,
        enums: WidgetGroupEnums.gap,
        validator: (gap: number | string) =>
          WidgetGroupEnums.gap.includes(typeof gap === 'number' ? gap : parseInt(gap)),
      },
      direction: {
        type: String,
        default: 'row',
        enums: WidgetGroupEnums.direction,
      },
      justify: {
        type: String,
        default: 'start',
        enums: WidgetGroupEnums.justify,
        validator: (justify: string) => WidgetGroupEnums.justify.includes(justify),
      },
      wrap: {
        type: String,
        default: 'nowrap',
        enums: WidgetGroupEnums.wrap,
        validator: (wrap: string) => WidgetGroupEnums.wrap.includes(wrap),
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

const emit = defineEmits(['update:modelValue', 'update:checked', 'change']);

const localChecked = ref();

watch(
  () => props.options,
  (options) => {
    const values = options.reduce((acc, option, index) => {
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

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== undefined) {
      if (props.checked !== undefined) {
        console.error(
          `[WidgetRadioGroup] Error : The "v-model", "modelValue" or "v-model:checked", "checked" cannot be used at the same time.`,
        );
      }
      localChecked.value = newValue;
    }
  },
  { immediate: true },
);

watch(
  () => props.checked,
  (newValue) => {
    if (newValue !== undefined) {
      localChecked.value = newValue;
    }
  },
  { immediate: true },
);

const onChange = (newValue: string, event: Event) => {
  emit('update:modelValue', newValue);
  emit('update:checked', newValue);
  emit('change', newValue, event);
};
</script>
