<template>
  <li class="cb-step step-item" :class="{ active, completed }">
    <span class="step-item-title"><slot></slot></span>
  </li>
</template>

<script>
export default {
  name: 'CbStep',

  props: {
  },

  data() {
    return {
      index: 0,
      active: false,
      completed: false
    }
  },

  created() {
    this.$parent.$on('change', (index) => {
      this.completed = (this.index < index);
      this.active = (this.index === index);
    })
  }
}
</script>
