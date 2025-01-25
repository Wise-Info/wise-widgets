<template>
  <nav
    v-if="sections.length > 3"
    id="anchor-nav"
    class="anchor-nav">
    <li
      v-for="view in views"
      :key="`anchor-${view.anchor}`"
      class="view-anchor">
      <a
        :href="`#${view.anchor}`"
        :title="view.title"
        class="view-anchor__link">
        {{ view.title }}
      </a>
      <ul class="view-anchor__sections">
        <li
          v-for="section in view.sections"
          :id="`anchor-${section.anchor}`"
          :key="`anchor-${section.anchor}`"
          class="section-anchor">
          <a
            :href="`#${section.anchor}`"
            :title="section.title"
            class="section-anchor__link">
            {{ section.title }}
          </a>
        </li>
      </ul>
    </li>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue';

import { useRoute } from 'vue-router';

const route = useRoute();

interface View {
  anchor: string;
  title: string;
  sections: Section[];
}
interface Section {
  anchor: string;
  title: string;
}

const views = ref<View[]>([]);

let sections = ref<HTMLElement[]>([]);

let anchors: HTMLElement[] = [];

watch(
  () => route.path,
  () => {
    views.value = [];
    sections.value = [...document.querySelectorAll('.section')] as HTMLElement[];
    document.querySelectorAll('.view').forEach((view) => {
      views.value.push({
        anchor: view.id || '',
        title: view.getAttribute('data-title') || '',
        sections: [...view.querySelectorAll('.section')].map((section) => ({
          anchor: section.id || '',
          title: section.getAttribute('data-title') || '',
        })),
      });
    });
    setTimeout(() => {
      anchors = [
        ...document.querySelectorAll('.anchor-nav .section-anchor__link'),
      ] as HTMLElement[];

      highlightActiveAnchor();
    }, 100);
  },
);

let observer: IntersectionObserver;

const highlightActiveAnchor = () => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionIndex = sections.value.indexOf(entry.target as HTMLElement);
        const anchor = anchors[sectionIndex];
        if (entry.isIntersecting) {
          anchor?.classList.add('active');
        } else {
          anchor?.classList.remove('active');
        }
      });
    },
    { threshold: 0.5 },
  );

  sections.value.forEach((section) => observer.observe(section));
};

document.addEventListener('DOMContentLoaded', highlightActiveAnchor);

onUnmounted(() => {
  sections.value.forEach((section) => observer.unobserve(section));
});
</script>

<style lang="scss">
.anchor-nav {
  position: absolute;
  top: $size-base * 16;
  right: $size-base * 2;
  z-index: $z-index-fixed;

  padding: $size-base;

  background-color: var(--global-frost-color);
  backdrop-filter: blur($size-base * 0.5);

  list-style: none;

  opacity: 0.8;
  @include rise(4);

  transition: opacity 0.4s;

  &:hover,
  &:focus-within {
    opacity: 1;
  }
}

.view-anchor {
  position: relative;
  padding: 0 $size-base;

  & + & {
    padding: $size-base $size-base 0;

    &::before {
      content: '';
      position: absolute;
      top: -1px;
      left: $size-base;
      right: $size-base;
      border-top: solid 1px var(--color-major);
      opacity: 0.16;
    }
  }

  &__link {
    display: block;

    font-size: $size-base * 2;
    font-weight: bold;
    text-decoration: none;

    color: var(--color-gray-80);
    line-height: $size-base * 4;

    &:focus,
    &:hover {
      color: var(--color-major-toggle);
    }
  }

  &__sections {
    margin-top: $size-base;
    padding: 0 0 0 $size-base * 2;

    list-style: none;
  }
}

.section-anchor {
  &::marker {
    content: '#  ';
    color: var(--color-gray-40);
    font-size: $size-base * 1.5;
  }

  &__link {
    display: block;

    font-size: $size-base * 1.5;
    text-decoration: none;

    color: var(--color-gray-60);
    line-height: $size-base * 3;

    &.active {
      color: var(--color-major);
    }

    &:focus,
    &:hover {
      color: var(--color-major-toggle);
    }
  }
}
</style>
