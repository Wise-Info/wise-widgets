<template>
  <nav class="breadcrumb">
    <li class="breadcrumb__item">
      <router-link
        to="/"
        class="breadcrumb__link">
        HOME
      </router-link>
    </li>
    <template v-for="item in breadcrumb">
      <li
        v-if="routers.includes(item.path)"
        :key="item.label"
        class="breadcrumb__item">
        <router-link
          :to="item.path"
          class="breadcrumb__link">
          <!-- {{ Object.values($route.params).includes(item.label)
          ? item.label : $t(item.label) }} -->
          {{ item.label }}
        </router-link>
      </li>
    </template>
  </nav>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  import { routers } from '@/routers.ts';

  const route = useRoute();

  const breadcrumb = computed(() =>
    route.path.split('/').reduce((acc, cur, index, array) => {
      if (cur !== '') {
        acc.push({
          path: `${array.slice(0, index + 1).join('/')}`,
          label: decodeURI(cur.split('.').pop().replace(/_/g, ' ')),
        });
      }
      return acc;
    }, []),
  );
</script>

<style lang="scss">
  .breadcrumb {
    display: flex;
    width: 100%;

    overflow: hidden;

    padding: 0 ($size-base * 3);
    margin: $size-base 0;

    list-style: none;
    text-transform: uppercase;
    white-space: nowrap;
    text-overflow: ellipsis;

    &__item {
      display: flex;
      margin: 0 0 0 $size-base;
      line-height: $size-base * 4;

      &::before {
        content: '';

        margin: ($size-base * 1.4) ($size-base * 2) ($size-base * 1.4) $size-base;
        border-left: solid ($global-border-size * 0.5) $color-gray-9;

        transform: rotate(20deg);
        transform-origin: center;
      }
      &:first-child {
        margin: 0;
        &::before {
          display: none;
        }
      }
      &:last-child {
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: default;
        &:active {
          pointer-events: none;
        }
      }
    }

    &__link {
      display: block;
      outline: none;
      color: var(--color-minor);
      text-decoration: none;
      &:hover,
      &:focus {
        color: var(--color-major-hover);
      }
    }
  }
</style>
