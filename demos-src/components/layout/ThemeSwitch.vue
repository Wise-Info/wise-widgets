<template>
  <div class="theme-switch">
    <menu class="theme-switch__menu">
      <WidgetIcon
        class="theme-switch__menu-item"
        :class="theme === 'light' ? 'active' : ''"
        icon="e518"
        label="Light Theme"
        tabindex="0"
        @click="switchTheme('light')" />
      <WidgetIcon
        class="theme-switch__menu-item"
        :class="theme === 'dark' ? 'active' : ''"
        icon="e51c"
        label="Dark Theme"
        tabindex="0"
        @click="switchTheme('dark')" />
      <WidgetIcon
        class="theme-switch__menu-item"
        :class="theme === 'auto' ? 'active' : ''"
        icon="f1d7"
        label="By System"
        tabindex="0"
        @click="switchTheme('auto')" />
    </menu>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  type Theme = 'light' | 'dark' | 'auto';

  const html = document.documentElement;

  const theme = ref<Theme>('auto');

  const switchTheme = (targetTheme: Theme = 'auto') => {
    (document.activeElement as HTMLElement)?.blur();
    theme.value = targetTheme;
    localStorage.setItem('theme', targetTheme);
    switch (targetTheme) {
      case 'light':
        html.classList.remove('dark');
        html.classList.add('light');
        break;
      case 'dark':
        html.classList.remove('light');
        html.classList.add('dark');
        break;
      case 'auto':
        html.classList.remove('dark', 'light');
        break;
    }
  };

  switchTheme(localStorage.getItem('theme') as Theme);

  setTimeout(() => {
    html.style.setProperty('--theme-switch-duration', '1s');
  }, 1200);
</script>

<style lang="scss">
  .theme-switch {
    $this: &;

    position: relative;
    display: block;
    flex-shrink: 0;
    width: $size-base * 4;
    height: $size-base * 4;
    margin: $size-base ($size-base * 2) $size-base 0;

    &:focus-within,
    &:hover {
      #{$this}__menu {
        height: auto;
      }
    }

    &__menu {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding: 0;
      margin: 0;
      background-color: var(--global-background-color);
      transition: background-color var(--theme-switch-duration);
    }

    &__menu-item {
      display: block;
      margin: calc($size-base / 2);
      outline: none;
      cursor: pointer;

      transition: color 400ms;

      &:focus,
      &:hover {
        color: var(--color-major);
      }

      &.active {
        order: -1;
      }
    }
  }
</style>
