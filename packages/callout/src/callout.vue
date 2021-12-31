<template>
  <div class="cb-callout callout" :class="calloutClass">
    <template v-if="$slots.title">
      <slot name="title"></slot>
    </template>
    <h4 v-else-if="title">{{ title }}</h4>

    <template v-if="$slots.text">
      <slot name="text"></slot>
    </template>
    <p v-else-if="text">{{ text }}</p>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CbCallout',

  props: {
    theme: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    }
  },

  computed: {
    calloutClass() {
      return this.theme ? `callout-${this.theme}` : '';
    }
  }
}
</script>
