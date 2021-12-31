<template>
  <form class="cb-form" :class="formTypeClass" @submit.prevent="handleSubmit">
    <slot></slot>
    <button type="submit" class="cb-button btn" :class="buttonClassList" v-if="button">{{ button }}</button>
    <slot name="addition"></slot>
  </form>
</template>

<script>
export default {
  name: 'CbForm',

  provide() {
    return {
      formType: () => this.type,
      formLeftSpan: () => this.leftSpan,
      formRightSpan: () => this.rightSpan
    }
  },

  props: {
    type: {
      type: String,
      default: ''
    },
    button: {
      type: String,
      default: ''
    },
    buttonTheme: {
      type: String,
      default: 'primary'
    },
    leftSpan: {
      type: [String, Number],
      default: '2'
    },
    rightSpan: {
      type: [String, Number],
      default: '10'
    }
  },

  computed: {
    formTypeClass() {
      return this.type ? 'form-' + this.type : '';
    },
    buttonClassList() {
      let buttonTheme = 'default';

      switch (this.buttonTheme) {
        case 'edit':
          buttonTheme = 'default';
          break;

        case 'submit':
        case 'search':
        case 'save':
          buttonTheme = 'primary';
          break;

        case 'new':
        case 'export':
          buttonTheme = 'success';
          break;

        case 'remove':
          buttonTheme = 'danger';
          break;

        default:
          buttonTheme = this.buttonTheme;
          break;
      }

      return [
        `btn-${buttonTheme}`
      ];
    }
  },

  methods: {
    handleSubmit() {
      this.$emit('submit');
    }
  }
}
</script>
