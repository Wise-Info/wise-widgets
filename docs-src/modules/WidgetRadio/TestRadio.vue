<template>
  <div>
    <label
      v-for="(option, index) in options"
      :key="index">
      <input
        v-model="value"
        :value="option.value"
        type="radio"
        name="radio" />
      {{ option.label }} - {{ option.value }}
    </label>
    <br />
    <span>Selected: {{ value }}</span>
  </div>
</template>

<script setup>
const value = defineModel();

defineProps({
  options: {
    type: Array,
    default: () => [],
  },
});
</script>
