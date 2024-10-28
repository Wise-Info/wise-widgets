<template>
  <nav class="main-nav">
    <li
      v-for="module in modules"
      :key="module.meta.id"
      class="main-nav__item">
      <router-link
        class="main-nav__link"
        :class="{ active: module.meta.id === currentModule }"
        :to="module.path">
        {{ module.name }}
      </router-link>
    </li>
  </nav>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const routes = router.getRoutes();

  const modules = computed(() =>
    routes
      .filter((router) => router.meta.parent === 'root' && router.meta.disabled !== true)
      .sort((a, b) => a.meta.order - b.meta.order),
  );

  const currentModule = computed(() => {
    return router.currentRoute.value.meta.parents?.[1] || router.currentRoute.value.meta.id;
  });
</script>

<style lang="scss">
  .main-nav {
    display: flex;
    flex-shrink: 0;
    overflow: hidden;
    padding: 0 ($size-base * 2) 0 ($size-base * 4);
    margin: $size-base 0;
    list-style: none;
    text-transform: uppercase;
    white-space: nowrap;
    text-overflow: ellipsis;

    &__item {
      display: flex;
      margin: 0 0 0 ($size-base * 2);
      line-height: ($size-base * 4);
      &::before {
        content: '';
        margin: ($size-base * 1.4) ($size-base * 2) ($size-base * 1.4) 0;
        border-left: solid ($global-border-size * 0.5) $color-gray-9;
      }
      &:first-child {
        margin: 0;
        &::before {
          display: none;
        }
      }
    }

    &__link {
      display: block;
      outline: none;
      text-decoration: none;
      color: var(--color-minor);
      &:hover,
      &:focus {
        color: var(--color-major-hover);
      }
      &.active {
        color: var(--color-major);
        cursor: default;
        &:active {
          pointer-events: none;
        }
      }
    }
  }
</style>
