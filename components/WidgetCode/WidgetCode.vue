<template>
  <code
    class="widget-code"
    :class="{
      [`lang-${lang}`]: Boolean(lang),
    }">
    <template v-if="Boolean(code)">
      {{ code }}
    </template>
    <slot v-else />
  </code>
  <code
    v-if="$slots.html"
    class="widget-code lang-html">
    // Language : HTML
    <slot name="html" />
  </code>
  <code
    v-if="$slots.js"
    class="widget-code lang-js">
    // Language : JavaScript
    <slot name="js" />
  </code>
  <code
    v-if="$slots.css"
    class="widget-code lang-css">
    // Language : CSS
    <slot name="css" />
  </code>
</template>

<script setup lang="ts">
// import hljsVuePlugin from '@highlightjs/vue-plugin';

// const highlightjs = hljsVuePlugin.component;

defineProps({
  code: {
    type: String,
    default: '',
  },
  lang: {
    type: String,
    default: undefined,
  },
});
</script>
