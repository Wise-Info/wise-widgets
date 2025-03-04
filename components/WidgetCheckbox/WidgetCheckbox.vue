<template>
  <label class="widget-checkbox">
    <!--  -->
  </label>
</template>

<script lang="ts">
import {
  // WidgetIcon,
  WidgetIconProps,
} from '../WidgetIcon/index.ts';

import { enumSize, type Size } from '../enums.ts';

const enums = {
  size: enumSize,
};

export const WidgetCheckboxEnums = enums;

export type WidgetCheckboxValue = boolean | number | string;

export interface WidgetCheckboxProps {
  name?: string;
  required?: boolean;
  label?: number | string;
  value?: WidgetCheckboxValue;
  checked?: boolean;
  size?: Size;
  icon?: string | WidgetIconProps;
  iconOnly?: boolean;
  disabled?: boolean;
  events?: Record<string, (event: Event) => void>;
}
</script>

<script setup lang="ts">
const checked = defineModel('checked', {
  type: Boolean,
  default: false,
});
</script>
