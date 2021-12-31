<template>
  <div class="cb-progress progress" :class="outerClassList">
    <div class="progress-bar" :class="innerClassList" :style="progressStyle" role="progressbar" :aria-valuenow="value" :aria-valuemin="min" :aria-valuemax="max">
      <span :class="{ 'sr-only': !showText }">
        <template v-if="text">{{ text }}</template>
        <template v-else>{{ value }}%</template>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CbProgress',

  props: {
    theme: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: 0
    },
    active: {
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 100
    },
    showText: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    striped: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    tiny: {
      type: Boolean,
      default: false
    },
    tinier: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    outerClassList() {
      return {
        'progress-sm': this.small,
        'progress-xs': this.tiny,
        'progress-xxs': this.tinier,
        vertical: this.vertical,
        active: this.active
      }
    },

    innerClassList() {
      return [
        this.theme ? `progress-bar-${this.theme}` : '',
        this.striped ? 'progress-bar-striped' : ''
      ];
    },

    progressStyle() {
      return this.vertical ? { height: `${this.value}%` } : { width: `${this.value}%` };
    }
  },

  methods: {
  }
}
</script>
