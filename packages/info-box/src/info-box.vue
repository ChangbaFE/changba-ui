<template>
  <div class="cb-info-box info-box" :class="boxClass">
    <div class="info-box-icon" :class="iconClass" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <span class="info-box-icon" :class="iconClass" v-else>
      <i class="cb-icon fa fa-fw" :class="`fa-${icon}`"></i>
    </span>

    <div class="info-box-content">
      <div class="info-box-text" v-if="$slots.text">
        <slot name="text"></slot>
      </div>
      <span class="info-box-text" v-else>
        {{ text }}
      </span>

      <div class="info-box-number" v-if="$slots.number">
        <slot name="number"></slot>
      </div>
      <span class="info-box-number" v-else>
        {{ number }}
      </span>

      <slot></slot>

      <div class="progress-description" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
      <span class="progress-description" v-else>
        {{ footer }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CbInfoBox',

  props: {
    theme: {
      type: String,
      default: ''
    },

    iconTheme: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    },

    number: {
      type: [String, Number],
      default: ''
    },

    footer: {
      type: String,
      default: ''
    }
  },

  computed: {
    boxClass() {
      return this.theme ? `bg-${this.theme}` : '';
    },

    iconClass() {
      return this.iconTheme ? `bg-${this.iconTheme}` : '';
    }
  }
}
</script>
