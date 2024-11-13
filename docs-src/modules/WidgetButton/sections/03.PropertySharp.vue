<template>
  <section class="section">
    <hgroup class="section__title">
      <h4>Property [ shape ]</h4>
      <span class="property-enums">
        <span class="default">rectangle</span> , rounded , capsule , line
      </span>
    </hgroup>
    <WidgetGroup>
      <WidgetButton
        shape="rectangle"
        label="Rectangle" />
      <WidgetButton
        shape="rounded"
        label="Rounded" />
      <WidgetButton
        shape="capsule"
        label="Capsule" />
      <WidgetButton
        shape="line"
        label="Line" />
    </WidgetGroup>
    <WidgetGroup>
      <WidgetButton
        type="major"
        shape="rectangle"
        label="Rectangle" />
      <WidgetButton
        type="major"
        shape="rounded"
        label="Rounded" />
      <WidgetButton
        type="major"
        shape="capsule"
        label="Capsule" />
      <WidgetButton
        type="major"
        shape="line"
        label="Line" />
    </WidgetGroup>
  </section>
</template>
