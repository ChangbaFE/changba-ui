<template>
  <div class="cb-carousel carousel slide">
    <!-- Indicators -->
    <ol class="carousel-indicators" v-if="showIndicators">
      <li v-for="(item, index) in items" :key="index" class="cb-carousel-indicator-item" @click="goto(index)"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <slot></slot>
    </div>

    <!-- Controls -->
    <template v-if="showControls">
      <a class="left carousel-control" role="button" @click="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">上一个</span>
      </a>
      <a class="right carousel-control" role="button" @click="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">下一个</span>
      </a>
    </template>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'CbCarousel',

  props: {
    interval: {
      type: [Number, String, Boolean],
      default: 5000
    },

    initialIndex: {
      type: [Number, String],
      default: 0
    },

    showIndicators: {
      type: Boolean,
      default: true
    },

    showControls: {
      type: Boolean,
      default: false
    },

    pauseOnHover: {
      type: Boolean,
      default: true
    },

    loop: {
      type: Boolean,
      default: true
    },

    keyboard: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      element: null,
      instance: null,
      items: [],
      activeIndex: -1
    };
  },

  watch: {
    items(val) {
      if (val.length > 0) {
        this.setActiveItem(this.initialIndex);
      }
    },

    loop(val) {
      this.instance.options.wrap = val;
    },

    interval(val) {
      this.instance.options.interval = val;
      this.element.carousel('cycle');
    }
  },

  mounted() {
    const $el = $(this.$el);

    this.setActiveItem(this.initialIndex);

    this.element = $el.carousel({
      interval: this.interval,
      pause: this.pauseOnHover ? 'hover' : null,
      wrap: this.loop,
      keyboard: this.keyboard
    });

    this.instance = $el.data('bs.carousel');

    $el.on('slid.bs.carousel', (e) => {
      const index = $(e.relatedTarget).index();

      this.$emit('change', index, this.activeIndex);

      this.activeIndex = index;
    })
  },

  methods: {
    updateItems() {
      this.items = this.$children.filter(child => child.$options.name === 'CbCarouselItem');
    },

    setActiveItem(index) {
      const $el = $(this.$el);

      $el.find('> .carousel-inner > .cb-carousel-item').removeClass('active').eq(index).addClass('active');

      if (this.showIndicators) {
        this.$nextTick(() => {
          $el.find('> .carousel-indicators > .cb-carousel-indicator-item').removeClass('active').eq(index).addClass('active');
        });
      }
    },

    prev() {
      this.element.carousel('prev');
    },

    next() {
      this.element.carousel('next');
    },

    goto(index) {
      this.element.carousel(index);
    }
  }
}
</script>
