# wise-widgets

Wise Widget UI Library

## Concept

Hope to build an open-source UI library that prioritize native features from HTML, CSS, and JavaScript for better performance. And also provides better developer experience and user interface experience. Using JS Objects for data and structure rather than HTML.


## Installation

```bash
# use npm
npm install @wiseinfo/wise-widgets

# use yarn
yarn add @wiseinfo/wise-widgets

# use pnpm
pnpm add @wiseinfo/wise-widgets
```


## Quick Start

```ts : main.ts
import { createApp } from 'vue';

import widgets from '@wiseinfo/wise-widgets';

const main = createApp(Main);

main.use(widgets).mount('#main');

```

```vue : Main.vue
<template>
  <div>
    <WidgetButton label='Hello Wise-Widgets' />
  </div>
</template>
```

## Documentation

[Documentation](https://wiseinfo.github.io/wise-widgets/)


--------
Made with ❤️ by WiseInfo
