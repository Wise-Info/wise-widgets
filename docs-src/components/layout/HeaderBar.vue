<template>
  <header
    id="header-bar"
    class="header-bar">
    <Breadcrumb />
    <MainNav />
    <ThemeSwitch />
  </header>
</template>

<script setup>
  import Breadcrumb from './Breadcrumb.vue';
  import MainNav from './MainNav.vue';
  import ThemeSwitch from './ThemeSwitch.vue';
</script>

<style lang="scss">
  .header-bar {
    position: sticky;
    top: 0;
    z-index: $z-index-fixed;

    display: flex;
    justify-content: space-between;

    background-color: var(--global-background-color);
    // backdrop-filter: blur($size-base * 0.5);

    transition: background-color var(--theme-switch-duration);
  }
</style>
