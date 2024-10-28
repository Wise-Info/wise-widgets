<template>
  <aside
    class="aside"
    :class="{
      'aside--collapsed': hasAsideCollapsed,
    }">
    <h1
      class="logo"
      tabindex="0"
      @click="toggleAsideCollapsedState">
      <span class="logo__icon">
        <WidgetSvg
          auto
          svg="logo"
          style="color: var(--color-major)" />
      </span>
      <span class="logo__label">WISE-WIDGETS</span>
    </h1>
    <nav class="aside-nav">
      <li
        v-for="item in Object.values(asideNav)"
        :key="item.meta.id"
        class="aside-nav__item">
        <router-link
          v-if="item.path"
          :to="item.path"
          class="aside-nav__item-link"
          :class="{ active: $route.meta.parent === item.meta.id }"
          active-class="active">
          <span class="aside-nav__item-icon">
            <WidgetIcon v-bind="iconMapping[item.meta.id] || {}" />
          </span>
          <span class="aside-nav__item-label">
            {{ item.name }}
          </span>
        </router-link>
        <span
          v-else
          class="aside-nav__item-link space"
          :class="{ active: $route.meta.parent === item.meta.id }">
          <span class="aside-nav__item-icon">
            <WidgetIcon v-bind="iconMapping[item.meta.id] || {}" />
          </span>
          <span class="aside-nav__item-label">
            {{ item.name }}
          </span>
        </span>
        <template v-if="Object.keys(item?.children || {}).length">
          <div class="aside-nav__sub-item-menu">
            <li
              v-for="subItem in Object.values(item.children)"
              :key="subItem.meta.id"
              class="aside-nav__sub-item">
              <router-link
                :to="subItem.path"
                class="aside-nav__sub-item-link"
                active-class="active">
                <span class="aside-nav__sub-item-label">
                  {{ subItem.name }}
                </span>
              </router-link>
            </li>
          </div>
        </template>
      </li>
    </nav>
  </aside>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import { useRouter } from 'vue-router';

  const router = useRouter();
  const routes = router.getRoutes();

  const asideNav = computed(() => {
    const currentRoute = router.currentRoute.value;
    const currentModule = currentRoute.meta.parents?.[1] || currentRoute.meta.id;
    return routes
      .filter((r) => r.meta.id === currentModule || r.meta.parents?.[1] === currentModule)
      .sort((a, b) => a.meta.order - b.meta.order)
      .reduce((acc, cur) => {
        if (['root', currentModule].includes(cur.meta.parent)) {
          acc[cur.meta.id] = cur;
        } else {
          acc[cur.meta.parent] ||= {
            name: cur.meta.parent
              .replace(/(?:^|-)([a-z])/g, (_, c) => ` ${c.toUpperCase()}`)
              .trim(),
            meta: { id: cur.meta.parent },
          };
          acc[cur.meta.parent].children ||= {};
          acc[cur.meta.parent].children[cur.meta.id] = cur;
        }
        return acc;
      }, {});
  });

  const iconMapping = ref({
    home: {
      icon: 'e88a',
      label: 'Home',
      size: 28,
    },
    guides: {
      icon: 'ea19',
      label: 'Guides',
      size: 28,
    },
    'how-to-use': {
      icon: 'eb71',
      label: 'How to Use',
      size: 28,
    },
    design: {
      icon: 'f10a',
      label: 'Design',
      size: 28,
    },
    layouts: {
      icon: 'e871',
      label: 'Layouts',
      size: 28,
    },
    data: {
      icon: 'e99c',
      label: 'Data',
      size: 28,
    },
    components: {
      icon: 'e1bd',
      label: 'Components',
      size: 28,
    },
    resources: {
      icon: 'f5a4',
      label: 'Resources',
      size: 28,
    },
    general: {
      icon: 'f1c5',
      label: 'General',
      size: 28,
    },
    navigation: {
      icon: 'e87a',
      label: 'Navigation',
      size: 28,
    },
    'data-input': {
      icon: 'f3c6',
      label: 'Data Input',
      size: 28,
    },
    'data-display': {
      icon: 'f466',
      label: 'Data Display',
      size: 28,
    },
    feedback: {
      icon: 'e002',
      label: 'Feedback',
      size: 28,
    },
  });

  const hasAsideCollapsed = ref(Boolean(JSON.parse(localStorage.getItem('has_aside_collapsed'))));

  const toggleAsideCollapsedState = (element) => {
    element.target.blur();
    hasAsideCollapsed.value = !hasAsideCollapsed.value;
    localStorage.setItem('has_aside_collapsed', hasAsideCollapsed.value);
  };
</script>

<style lang="scss">
  .aside {
    position: sticky;
    top: 0;
    z-index: $z-index-fixed;
    flex-shrink: 0;
    overflow-x: hidden;
    overflow-y: auto;
    width: $size-base * 26;
    background-color: var(--color-lightest);
    box-shadow: 0 0 ($size-base * 2) 0 var(--global-shadow-color);

    transition: background-color var(--theme-switch-duration);
  }

  .logo {
    position: sticky;
    top: 0;
    z-index: $z-index-sticky;

    border-bottom: solid $global-border-size var(--color-gray-40);
    outline: none;
    margin: 0;

    background-color: var(--global-frost-color);
    backdrop-filter: blur($size-base * 0.5);

    text-align: center;

    cursor: pointer;

    &::before,
    &::after {
      content: '';
      display: table;
    }

    &::after {
      position: absolute;
      top: $size-base * 2;
      left: 50%;
      transform: translateX(-50%);
      width: $size-base * 6;
      height: $size-base * 6;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M2 2h6v20h-6z"/><path fill="none" stroke="currentColor" stroke-width="2" d="M24 12h-12m5 -5l-5 5l5 5"/></svg>');
      opacity: 0;
      // need improvement for theme switch
    }

    &:hover,
    &:focus {
      span {
        opacity: 0.08;
      }

      &::after {
        opacity: 0.64;
      }
    }

    &::before,
    &::after,
    span {
      transition: 200ms opacity;
    }

    &__icon {
      display: block;
      width: $size-base * 6;
      height: $size-base * 6;
      margin: $size-base * 2 auto;
    }

    &__label {
      display: block;
      margin: $size-base * 2;
      font-size: $size-base * 2.5;
      line-height: 1em;
    }
  }

  .aside-nav {
    margin: $size-base 0;

    list-style: none;
    white-space: nowrap;

    &__item,
    &__sub-item {
      position: relative;

      &-link {
        position: relative;
        display: flex;
        height: $size-base * 6;

        border-left: solid ($size-base * 0.5) transparent;

        color: var(--color-minor);
        text-decoration: none;

        &:hover,
        &:focus {
          color: var(--color-major-hover);
        }
      }

      &-icon {
        display: block;
        flex-shrink: 0;
        width: $size-base * 3.5;
        height: $size-base * 3.5;
        margin: ($size-base * 1.25) ($size-base * 1.75);
      }

      &-label {
        height: $size-base * 4;
        padding: 1px 0 0;
        margin: $size-base 0 $size-base (-$size-base);
        line-height: $size-base * 4;
      }
    }

    &__item {
      &:hover {
        .aside-nav__item-label,
        .aside-nav__sub-item-menu {
          display: block;
        }
      }

      &-link {
        // font-weight: bold;

        &.active {
          background-color: var(--color-gray-10);
          border-color: var(--color-major);
          transition: background-color var(--theme-switch-duration);
        }

        &.space {
          pointer-events: none;
        }

        &.disabled {
          color: var(--color-gray-40);
          pointer-events: none;
        }
      }
    }

    &__sub-item {
      &-menu {
        &--collapsed {
          height: 0;
          overflow: hidden;
          transition: 200ms height;
        }

        &-collapse-trigger {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 2;
          display: block;
          flex-shrink: 0;
          width: $size-base * 3;
          height: $size-base * 3;
          margin: ($size-base * 1.5) ($size-base * 2);
          color: var(--color-gray-40);

          &::before {
            content: '\e5cf';
            display: block;
            width: $size-base * 3;
            height: $size-base * 3;
            font-family: $font-icon !important; // TODO
            line-height: $size-base * 3;
            text-align: center;
          }

          &:hover {
            color: var(--color-major-hover);
          }

          &--collapsed::before {
            content: '\e5cb';
          }
        }
      }

      &-link {
        &.active {
          color: var(--color-major);
        }

        &.disabled {
          color: var(--color-gray-40);
          pointer-events: none;
        }
      }

      &-icon {
        display: none;
      }

      &-label {
        margin: $size-base 0 $size-base ($size-base * 6);
      }
    }
  }

  @mixin aside--collapsed {
    width: $size-base * 8;
    overflow: visible;

    .logo {
      &__icon {
        width: $size-base * 4;
        height: $size-base * 4;
        margin: $size-base * 2;
      }

      &__label {
        display: none;
      }
    }

    .aside-nav {
      &__item-label {
        position: absolute;
        left: $size-base * 10;

        // opacity: 0.9;
        display: none;

        padding: 0 $size-base;
        background: var(--color-gray-40);
        border-radius: $global-border-radius;

        color: var(--color-lightest);
        font-size: $size-base * 1.5;

        &::before {
          content: '';

          position: absolute;
          top: 50%;
          left: 1px;
          transform: translate(-100%, -50%);

          display: block;
          border: solid 6px transparent;
          border-left-width: 0;
          border-right-color: var(--color-gray-40);
        }
      }

      &__sub-item-menu {
        position: absolute;
        top: 0;
        left: $size-base * 9;
        display: none;
        height: auto;

        padding: $size-base 0;
        background: var(--color-lightest);
        border: solid 1px var(--color-light);
        box-shadow: 0 0 ($size-base * 2) 0 var(--global-shadow-color);
        margin: -$size-base 0 0;

        &::before {
          content: '';
          position: absolute;
          left: -$size-base;
          display: block;
          width: $size-base;
          height: $size-base * 6;
        }

        .aside-nav__sub-item {
          &-icon {
            display: block;
          }

          &-label {
            padding: 0 ($size-base * 2.5) 0 ($size-base * 2);
            margin: $size-base 0;
          }
        }

        &-collapse-trigger {
          display: none;
        }
      }
    }
  }

  .aside--collapsed {
    @include aside--collapsed;

    .logo {
      &::after {
        width: $size-base * 4;
        height: $size-base * 4;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M2 2h6v20h-6z"/><path fill="none" stroke="currentColor" stroke-width="2" d="M10 12h12m-5 -5l5 5l-5 5"/></svg>');
      }
    }
  }

  @media (max-width: $responsive-breakpoint) {
    .aside {
      @include aside--collapsed;
    }

    .logo {
      pointer-events: none;

      &::after {
        display: block;
      }
    }
  }
</style>
