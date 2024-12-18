<template>
  <label
    class="widget-radio"
    :class="{
      checked: checked,
      disabled: disabled,
    }">
    <span class="widget-radio__symbol">
      <input
        class="widget-radio__original"
        type="radio"
        :name="name"
        :checked="checked"
        :disabled="disabled"
        @change.stop="onChange" />
    </span>
    <span
      v-if="label !== undefined"
      class="widget-radio__label">
      {{ label }}
    </span>
  </label>
</template>

<script lang="ts">
export interface WidgetRadioProps {
  name: string;
  label?: string | number;
  checked: boolean;
  disabled: boolean;
}
</script>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: undefined,
  },
  label: {
    type: [String, Number],
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
});

const emits = defineEmits(['change', 'update:checked']);

const onChange = (event: Event) => {
  emits('change', (event.target as HTMLInputElement).checked);
  emits('update:checked', (event.target as HTMLInputElement).checked);
};
</script>
