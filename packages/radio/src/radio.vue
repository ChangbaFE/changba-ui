<template>
  <label class="cb-radio" :class="classList" v-if="controlInline">
    <input type="radio" :name="controlName" :value="value" :disabled="controlDisabled" v-model="inputValue" @change="changeHandler" v-bind="attrs">
    <span class="label-text"><slot></slot></span>
  </label>

  <div class="cb-radio" :class="classList" v-else>
    <label>
      <input type="radio" :name="controlName" :value="value" :disabled="controlDisabled" v-model="inputValue" @change="changeHandler" v-bind="attrs">
      <span class="label-text"><slot></slot></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CbRadio',

  inject: {
    formControlInline: { default: () => () => false },
    formControlName: { default: () => () => undefined },
    formControlDisabled: { default: () => () => false }
  },

  model: {
    prop: 'checked',
    event: 'change'
  },

  props: {
    checked: {
      type: [String, Number, Boolean, Array],
      default: ''
    },
    value: {
      type: [String, Number, Array],
      default: ''
    },
    inline: {
      type: Boolean,
      default: undefined
    },
    name: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    }
  },

  data() {
    return {
      checkedProxy: false
    }
  },

  computed: {
    inputValue: {
      get() {
        return this.isGroup ? this._groupComponent.value : this.checked;
      },
      set(val) {
        this.checkedProxy = val;
      }
    },

    isGroup() {
      let parent = this.$parent;

      while (parent) {
        if (parent.$options.name !== 'CbRadioGroup') {
          parent = parent.$parent;
        }
        else {
          this.setGroupComponent(parent);
          return true;
        }
      }

      return false;
    },

    classList() {
      return [
        `radio${this.controlInline ? '-inline' : ''}`,
        this.controlDisabled ? 'disabled' : ''
      ];
    },

    controlInline() {
      return this.inline ?? this.formControlInline();
    },

    controlName() {
      return this.name ?? this.formControlName() ?? `radio-${this._uid}`;
    },

    controlDisabled() {
      return this.disabled ?? this.formControlDisabled();
    },

    attrs() {
      return this.isGroup ? this._groupComponent.$attrs : this.$attrs;
    }
  },

  methods: {
    changeHandler() {
      this.$emit('change', this.checkedProxy);
      if (this.isGroup) {
        this._groupComponent.$emit('input', this.checkedProxy);
      }
    },

    setGroupComponent(component) {
      this._groupComponent = component;
    }
  }
}
</script>
