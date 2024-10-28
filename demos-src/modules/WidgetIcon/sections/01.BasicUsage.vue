<template>
  <section class="section">
    <h3 class="section__title">Basic Usage</h3>

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

<script setup></script>

<style lang="scss"></style>
