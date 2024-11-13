<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>
        Property [ <span class="highlight">usage</span> ] : <span class="default">normal</span> ,
        warning , danger
      </h4>
    </hgroup>
    <WidgetGroup>
      <WidgetButton
        usage="mute"
        label="Mute" />
      <WidgetButton label="Normal" />
      <WidgetButton
        usage="warning"
        label="Warning" />
      <WidgetButton
        usage="danger"
        label="Danger" />
    </WidgetGroup>
    <WidgetGroup>
      <WidgetButton
        type="major"
        usage="mute"
        label="Mute" />
      <WidgetButton
        type="major"
        label="Normal" />
      <WidgetButton
        type="major"
        usage="warning"
        label="Warning" />
      <WidgetButton
        type="major"
        usage="danger"
        label="Danger" />
    </WidgetGroup>
  </section>
</template>

<script setup></script>
