<template>
  <Aside v-if="!isFrameFree" />
  <main class="main">
    <HeaderBar v-if="!isFrameFree" />
    <router-view />
  </main>
  <!-- <AnchorNav v-if="!isFrameFree" /> -->
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { Aside, HeaderBar, AnchorNav } from './components/index.ts';

const route = useRoute();

const frameFree: string[] = [];

const isFrameFree = computed(() => frameFree.includes(route.path));
</script>
