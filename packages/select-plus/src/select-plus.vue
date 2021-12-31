<template>
  <div class="cb-select-plus cb-validation-group" :class="{ 'cb-select-plus--full-width': isFullWidth }">
    <select ref="select" v-bind="$attrs">
      <slot></slot>
    </select>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'CbSelectPlus',

  inject: {
    formType: { default: () => () => '' }
  },

  props: {
    value: {
      type: [Number, String, Array],
      default: ''
    },
    options: {
      type: [Object, Array],
      default() {
        return [];
      }
    },
    width: {
      type: [String, Number],
      default: 'resolve'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  data() {
    return {
      dataWidth: this.width,
      isFullWidth: false
    }
  },

  watch: {
    value(value) {
      this.instance.val(value).trigger('change');
    },

    options(values) {
      // update options
      this.instance.empty();
      this.instance.select2({
        language: 'zh-CN',
        data: values,
        dropdownParent: this.parentEl,
        multiple: this.multiple,
        width: this.dataWidth,
        ...this.config
      }).val(this.value).trigger('change');
    }
  },

  mounted() {
    const el = $(this.$refs.select);

    this.parentEl = el.parents('.cb-select-plus-attach-point');
    if (!this.parentEl.length) {
      this.parentEl = $('body');
    }

    if (this.formType() !== 'inline') {
      this.dataWidth = '100%';
      this.isFullWidth = true;
    }

    this.instance = el.select2({
      language: 'zh-CN',
      data: this.options,
      dropdownParent: this.parentEl,
      multiple: this.multiple,
      width: this.dataWidth,
      ...this.config
    })
      .val(this.value)
      .trigger('change')
      // emit event on change.
      .on('select2:select select2:unselect', (ev) => {
        let value = this.instance.val();

        if (this.multiple && value === null) {
          value = [];
        }

        this.$emit('input', value);
        this.$emit('select', ev.params.data);
      });

    this.$on('change', () => {
      this.$nextTick(() => {
        el.val(this.value).trigger('change');
      });
    });
  },

  beforeDestroy() {
    this.instance.select2('destroy');
  }
}
</script>
