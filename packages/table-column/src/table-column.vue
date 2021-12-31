<script>
export default {
  name: 'CbTableColumn',

  props: {
    label: {
      type: String
    },

    width: {
      type: [String, Number]
    },

    dataKey: {
      type: String
    },

    type: {
      type: String
    },

    dataCssClass: {
      type: String
    },

    prefix: {
      type: String
    },

    postfix: {
      type: String
    },

    arraySeparator: {
      type: String
    },

    showArrayByLine: {
      type: Boolean
    },

    replace: {
      type: Array
    },

    defaultText: {
      type: String
    }
  },

  render(createElement) {
    return createElement('div', this.$slots.default);
  }
}
</script>
