<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Basic Usage</h4>
    </hgroup>

    <div>
      <WidgetIcon
        icon="e88a"
        label="Home" />
      Home
    </div>

    <WidgetCode>
      {{ `
      <WidgetIcon
        icon="e88a"
        label="Home" />
      ` }}
    </WidgetCode>

    <div>
      <WidgetIcon
        type="svg"
        icon="copy"
        label="Copy" />
      Copy
    </div>

    <WidgetCode>
      {{ `
      <WidgetIcon
        type="svg"
        icon="copy"
        label="Copy" />
      ` }}
    </WidgetCode>
  </section>
</template>

<script lang="ts"></script>

<style lang="scss"></style>
