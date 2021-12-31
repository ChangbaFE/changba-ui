<template>
  <div class="cb-color-picker input-group">
    <input type="text" class="form-control" v-bind="$attrs" v-model="colorValue">
    <span class="input-group-addon"><i></i></span>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep';
import $ from 'jquery';

export default {
  name: 'CbColorPicker',

  inheritAttrs: false,

  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => ({})
    },
    format: {
      type: String,
      default: 'hex'
    }
  },

  data() {
    return {
      colorValue: this.value,
      pickerOptions: {}
    };
  },

  watch: {
    value(value) {
      this.colorValue = value;
      $(this.$el).colorpicker('setValue', value);
    }
  },

  mounted() {
    const el = $(this.$el);
    this.pickerOptions = cloneDeep(this.options);
    this.pickerOptions.format = this.format;

    if (this.value) {
      this.pickerOptions.color = this.value;
    }

    let float = false;

    let parentEl = el.parents('.cb-color-picker-attach-point-float');
    if (parentEl.length > 0) {
      float = true;
    }
    else {
      parentEl = el.parents('.cb-color-picker-attach-point');
      if (parentEl.length > 0) {
        this.pickerOptions.container = true;
        this.pickerOptions.customClass = 'cb-color-picker__right';
      }
    }

    el.colorpicker(this.pickerOptions).on('changeColor', (e) => {
      const color = e.color;
      this.$emit('input', color.toHex() === '#aN' ? '' : color.toString());
    }).on('hidePicker', (e) => {
      const color = e.color;
      this.$emit('input', color.toHex() === '#aN' ? '' : color.toString());
    });

    if (float) {
      el.on('showPicker', () => {
        window.addEventListener('wheel', this.disableWheel, { passive: false });
        window.addEventListener('mousewheel', this.disableWheel, { passive: false });
      }).on('hidePicker', () => {
        window.removeEventListener('wheel', this.disableWheel);
        window.removeEventListener('mousewheel', this.disableWheel);
      });
    }

    el.colorpicker('reposition');
  },

  destroyed() {
    $(this.$el).off().colorpicker('destroy');
  },

  methods: {
    disableWheel(e) {
      e.preventDefault();
    }
  }
}
</script>
