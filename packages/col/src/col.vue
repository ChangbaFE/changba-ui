<template>
  <div class="cb-col" :class="classList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CbCol',

  props: {
    span: {
      type: [String, Number],
      default: '12'
    },
    xs: {
      type: [String, Number],
      default: ''
    },
    sm: {
      type: [String, Number],
      default: ''
    },
    md: {
      type: [String, Number],
      default: ''
    },
    lg: {
      type: [String, Number],
      default: ''
    }
  },

  computed: {
    classList() {
      const result = [];

      ['xs', 'sm', 'md', 'lg'].forEach((size) => {
        if (this[size]) {
          result.push(`col-${size}-${this[size]}`);
        }
      });

      if (this.span && !result.length) {
        result.push(`col-md-${this.span}`);
      }

      return result;
    }
  }
}
</script>
