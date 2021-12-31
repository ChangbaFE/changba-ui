<template>
  <select class="cb-select form-control" :name="name" v-model="inputValue" :disabled="disabled">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <template v-for="(item, index) in options">
        <option v-if="typeof item === 'Object'" :key="index" :value="item.id">{{ item.text }}</option>
        <option v-else :key="index" :value="index">{{ item }}</option>
      </template>
    </template>
  </select>
</template>

<script>
export default {
  name: 'CbSelect',

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: String,
      default: 'select-' + String(+new Date()) + String(Math.floor(Math.random() * 9999))
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      inputValue: this.value
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

  methods: {
  }
}
</script>
