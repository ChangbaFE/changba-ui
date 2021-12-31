<template>
  <span class="cb-badge badge" :class="classList">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'CbBadge',

  props: {
    theme: {
      type: String,
      default: ''
    }
  },

  computed: {
    classList() {
      return this.theme ? `bg-${this.theme}` : '';
    }
  }
}
</script>
