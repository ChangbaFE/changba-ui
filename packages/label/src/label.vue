<template>
  <span class="cb-label label" :class="classList">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'CbLabel',

  props: {
    theme: {
      type: String,
      default: 'default'
    }
  },

  computed: {
    classList() {
      return `label-${this.theme}`;
    }
  }
}
</script>
