<template>
  <ul class="cb-steps step">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'CbSteps',

  props: {
    value: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      currentStep: this.value,
      steps: []
    }
  },

  watch: {
    value(value) {
      this.currentStep = value;
    },

    currentStep(value) {
      this.$emit('change', value);
    }
  },

  mounted() {
    this.getSteps();
    this.$emit('change', this.currentStep);
  },

  updated() {
    this.getSteps();

    if (this.currentStep > this.steps.length) {
      this.currentStep = 0;
    }
  },

  methods: {
    getSteps() {
      if (this.$slots.default) {
        const stepSlots = this.$slots.default.filter(vnode => vnode.tag &&
          vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'CbStep');

        // update indeed
        const steps = stepSlots.map(({ componentInstance }, index) => {
          componentInstance.index = index;
          return componentInstance;
        });
        if (!(steps.length === this.steps.length && steps.every((pane, index) => pane === this.steps[index]))) {
          this.steps = steps;
        }
      }
      else if (this.steps.length !== 0) {
        this.steps = [];
      }
    }
  }
}
</script>
