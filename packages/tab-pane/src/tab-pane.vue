<template>
  <div class="cb-tab-pane tab-pane" :class="{ active }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CbTabPane',

  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      index: 0,
      active: false
    }
  },

  created() {
    this.$parent.$on('change', (index) => {
      this.active = (this.index === index);
    })
  }
}
</script>
