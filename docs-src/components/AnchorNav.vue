<template>
  <nav
    id="anchor-nav"
    class="anchor-nav">
    <!--  -->
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface View {
  anchor: string;
  title: string;
  sections: Section[];
}
interface Section {
  anchor: string;
  title: string;
}

const anchors = ref([]);
</script>
