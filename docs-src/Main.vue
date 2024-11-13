<template>
  <Aside v-if="!isFrameFree" />
  <main class="main">
    <HeaderBar v-if="!isFrameFree" />
    <router-view />
  </main>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  import { Aside, HeaderBar } from './components/layout';

  // import { WidgetWatermark } from '../components';

  // WidgetWatermark.add({
  //   watermark: 'lane.zhao@nio.io',
  // });

  const route = useRoute();

  const frameFree = [];

  const isFrameFree = computed(() => frameFree.includes(route.name));
</script>
<style lang="scss">
  @import './styles/main.scss';
</style>
