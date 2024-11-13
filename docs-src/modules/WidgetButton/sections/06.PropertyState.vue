<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Property [ <span class="highlight">State</span> ]</h4>
    </hgroup>
    <WidgetGroup>
      <WidgetButton label="Normal" />
      <WidgetButton
        state="active"
        label="Active" />
      <WidgetButton
        state="running"
        label="Running" />
      <WidgetButton
        state="disabled"
        label="Disabled" />
    </WidgetGroup>
    <WidgetGroup>
      <WidgetButton
        type="major"
        label="Normal" />
      <WidgetButton
        type="major"
        state="active"
        label="Active" />
      <WidgetButton
        type="major"
        state="running"
        label="Running" />
      <WidgetButton
        type="major"
        state="disabled"
        label="Disabled" />
    </WidgetGroup>
    <br /><br />
    <WidgetGroup label="Try It:">
      <WidgetButton
        type="major"
        size="large"
        :state="isRunning ? 'running' : 'normal'"
        icon="e864"
        label="Sync"
        @click="run" />
    </WidgetGroup>
  </section>
</template>

<script setup>
  import { ref } from 'vue';

  const isRunning = ref(false);

  const run = () => {
    isRunning.value = true;

    setTimeout(() => {
      isRunning.value = false;
    }, 2000);
  };
</script>
