<template>
  <div class="cb-checkbox-group cb-validation-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CbCheckboxGroup',

  provide() {
    return {
      formControlInline: () => this.inline,
      formControlName: () => this.name ?? `checkbox-group-${this._uid}`,
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
