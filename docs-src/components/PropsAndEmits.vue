<template>
  <section>
    <template v-if="widgetProps">
      <h3 class="section__title">{{ widgetName }} Props</h3>
      <div class="props">
        <span
          v-for="(prop, index) in widgetProps"
          :key="`prop-${index}`"
          class="prop">
          <span class="prop__name">{{ prop.name }}</span>
          <span class="prop__type">{{ prop.type }}</span>
          <span
            v-if="prop.type === 'Boolean'"
            class="prop__default">
            <b> {{ prop.default }} </b>
          </span>
          <span
            v-if="prop.enum"
            class="prop__enum">
            <template
              v-for="(enumValue, enumIndex) in prop.enum"
              :key="`enum-${enumIndex}`">
              <b v-if="enumValue === prop.default">{{ enumValue }}</b>
              <span v-else> {{ enumValue }} </span>
            </template>
          </span>
        </span>
      </div>
      <br />
      <br />
    </template>
    <template v-if="widgetEmits">
      <h3 class="section__title">{{ widgetName }} Emits</h3>
      <div class="emits">
        <span
          v-for="(emit, index) in widgetEmits"
          :key="`emit-${index}`"
          class="emit">
          <span class="emit__name">{{ emit.name }}</span>
        </span>
      </div>
      <br />
      <br />
    </template>
  </section>
</template>
<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    widget: {
      type: Object,
      required: true,
    },
  });

  // eslint-disable-next-line no-underscore-dangle
  const widgetName = computed(() => props.widget.__name);

  const widgetProps =
    props.widget.props &&
    Object.entries(props.widget.props).map(([name, value]) => ({
      name,
      type: Array.isArray(value.type)
        ? `[${value.type.map((type) => type.name).join(' | ')}]`
        : value.type.name,
      default: value.default,
      enums: value.enum,
    }));

  const widgetEmits =
    props.widget.emits &&
    Object.entries(props.widget.emits).map(([, name]) => ({
      name,
    }));
</script>

<style lang="scss">
  .prop,
  .emit {
    display: inline-block;
    margin: 0 $size-base * 2 0 0;

    &__name {
      font-weight: bold;
    }

    &__type {
      font-style: italic;

      &::before {
        content: ' :';
      }
    }

    &__default {
      color: var(--color-major);
      font-weight: bold;

      &::before {
        content: ' :';
      }
    }

    &__enum {
      color: var(--color-major);

      &::before {
        content: ' [ ';
      }

      &::after {
        content: ' ] ';
      }

      b,
      span {
        &::after {
          content: ' , ';
          font-weight: normal;
        }
        &:last-child::after {
          content: '';
        }
      }
    }

    &::after {
      content: ' , ';
    }

    &:last-of-type::after {
      content: '';
    }

    &s {
      margin: 0 0 0 $size-base * 4;
      line-height: $size-base * 4;
    }
  }
</style>
