<template>
  <div class="cb-radio-group cb-validation-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CbRadioGroup',

  provide() {
    return {
      formControlInline: () => this.inline,
      formControlName: () => this.name ?? `radio-group-${this._uid}`,
      formControlDisabled: () => this.disabled
    }
  },

  props: {
    value: {
      type: [String, Number, Boolean, Array, Object],
      default: ''
    },
    inline: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
