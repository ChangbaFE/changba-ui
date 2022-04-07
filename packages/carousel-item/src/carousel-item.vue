<template>
  <div class="cb-carousel-item item">
    <slot></slot>
    <div class="carousel-caption" v-if="label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'CbCarouselItem',

  props: {
    label: {
      type: String,
      default: ''
    }
  },

  created() {
    this.$parent && this.$parent.updateItems();
  },

  destroyed() {
    this.$parent && this.$parent.updateItems();
  }
}
</script>
