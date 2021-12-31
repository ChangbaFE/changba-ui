<template>
  <textarea
    class="cb-input form-control resize-vertical"
    :class="inputClass"
    :name="name"
    v-model="inputValue"
    :disabled="disabled"
    v-if="type === 'textarea'"
  >
  </textarea>

  <div class="cb-input input-group" v-else-if="type === 'text' && ($slots.prepend || $slots.append)">
    <div :class="'input-group-' + (isInputGroupButtonPrepend ? 'btn' : 'addon')" v-if="$slots.prepend"><slot name="prepend"></slot></div>
    <input type="text" class="form-control" :name="name" v-model="inputValue" :disabled="disabled" v-bind="$attrs" v-on="inputListeners">
    <div :class="'input-group-' + (isInputGroupButtonAppend ? 'btn' : 'addon')" v-if="$slots.append"><slot name="append"></slot></div>
  </div>

  <input
    :type="type"
    class="cb-input form-control"
    :class="inputClass"
    :name="name"
    v-model="inputValue"
    v-on="inputListeners"
    :disabled="disabled"
    v-else
  >
</template>

<script>
export default {
  name: 'CbInput',

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: 'input-' + String(+new Date()) + String(Math.floor(Math.random() * 9999))
    },
    large: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      inputValue: this.value,
      isInputGroupButtonPrepend: false,
      isInputGroupButtonAppend: false
    }
  },

  computed: {
    inputListeners() {
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: (event) => {
            this.$emit('input', event.target.value)
          }
        }
      )
    },

    inputClass() {
      return {
        'input-lg': this.large,
        'input-sm': this.small
      }
    }
  },

  watch: {
    value(value) {
      this.inputValue = value;
    },

    inputValue(value) {
      this.$emit('input', value);
    }
  },

  mounted() {
    this.updateComponent();
  },

  updated() {
    this.updateComponent();
  },

  methods: {
    updateComponent() {
      if (this.type === 'text') {
        this.isInputGroupButtonPrepend = !!(this.$slots?.prepend?.[0].componentOptions?.Ctor.options.name === 'CbButton');
        this.isInputGroupButtonAppend = !!(this.$slots?.append?.[0].componentOptions?.Ctor.options.name === 'CbButton');
      }
    },

    dispatch(event, args = [], component) {
      const parent = component ? component.$parent : this.$parent;

      if (parent) {
        parent.$emit(event, ...args);

        this.dispatch(event, args, parent);
      }
    }
  }
}
</script>
