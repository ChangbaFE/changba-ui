<template>
  <div class="cb-form-group form-group">
    <label v-if="label !== false" :class="{ [`col-sm-${formLeftSpan()}`]: isHorizontal, 'control-label': isHorizontal }">{{ label }}</label>
    <div :class="`col-sm-${formRightSpan()}`" v-if="isHorizontal">
      <p class="form-control-static" v-if="this.static">{{ this.static }}</p>
      <div class="form-control-static" v-if="$slots.static">
        <slot name="static"></slot>
      </div>
      <slot></slot>
      <p class="help-block" v-if="help">{{ help }}</p>
      <p class="help-block" v-if="$slots.help"><slot name="help"></slot></p>
    </div>
    <template v-else>
      <template v-if="isInline">
        <p class="form-control-static" v-if="this.static">{{ this.static }}</p>
        <slot></slot>
      </template>
      <template v-else>
        <div>
          <p class="form-control-static" v-if="this.static">{{ this.static }}</p>
          <slot></slot>
        </div>
      </template>
      <p class="help-block" v-if="help">{{ help }}</p>
      <p class="help-block" v-if="$slots.help"><slot name="help"></slot></p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CbFormGroup',

  inject: {
    formType: { default: () => () => '' },
    formLeftSpan: { default: () => () => '2' },
    formRightSpan: { default: () => () => '10' }
  },

  props: {
    label: {
      type: [String, Boolean],
      default: ''
    },
    help: {
      type: String,
      default: ''
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    static: {
      type: [String, Number],
      default: ''
    }
  },

  computed: {
    isHorizontal() {
      return this.formType() === 'horizontal' || this.horizontal;
    },

    isInline() {
      return this.formType() === 'inline' || this.inline;
    }
  }
}
</script>
