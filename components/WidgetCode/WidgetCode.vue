<template>
  <code>
    <pre>
      <template v-if="Boolean(code)">
        {{ code }}
      </template>
      <slot v-else />
    </pre>
  </code>
</template>

<script setup lang="ts">
  import hljsVuePlugin from '@highlightjs/vue-plugin';

  const highlightjs = hljsVuePlugin.component;

  console.log(highlightjs);

  defineProps({
    code: {
      type: String,
      default: '',
    },
  });
</script>
