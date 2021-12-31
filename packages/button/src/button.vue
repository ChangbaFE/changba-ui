<template>
  <div class="cb-button btn-group" :class="{ dropup }" v-if="$slots.menu">
    <button type="button" class="dropdown-toggle btn" :class="classList" data-toggle="dropdown" :disabled="disabled" v-if="!split">
      <slot>按钮</slot> <span class="caret"></span>
    </button>
    <template v-else>
      <button :type="type" class="btn" :class="classList" :disabled="disabled" @click="handleClick"><slot>按钮</slot></button>
      <button type="button" class="dropdown-toggle btn" :class="classList" :disabled="disabled" data-toggle="dropdown">
        <span class="caret"></span>
        <span class="sr-only">切换下拉框</span>
      </button>
    </template>
    <ul class="dropdown-menu">
      <slot name="menu"></slot>
    </ul>
  </div>

  <a :href="newHref" class="cb-button btn" :class="classList" v-else-if="href">
    <slot>按钮</slot>
  </a>

  <button :type="type" class="cb-button btn" :class="classList" :disabled="disabled" @click="handleClick" v-else>
    <slot>按钮</slot>
  </button>
</template>

<script>
import stringify from 'qs/lib/stringify';

export default {
  name: 'CbButton',

  props: {
    type: {
      type: String,
      default: 'button'
    },
    theme: {
      type: String,
      default: 'button'
    },
    href: {
      type: String,
      default: ''
    },
    to: {
      type: [String, Object],
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    tiny: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    split: {
      type: Boolean,
      default: false
    },
    params: {
      type: Object,
      default: null
    },
    dropup: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classList() {
      let buttonTheme = 'default';

      switch (this.theme) {
        case 'button':
          if (this.type === 'submit') {
            buttonTheme = 'primary';
          }
          else {
            buttonTheme = 'default';
          }
          break;

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
          buttonTheme = this.theme;
          break;
      }

      return [
        `btn-${buttonTheme}`,
        {
          'btn-lg': this.large,
          'btn-sm': this.small,
          'btn-xs': this.tiny,
          'btn-block': this.block,
          'btn-flat': this.flat,
          'disabled': this.disabled
        }
      ];
    },

    newHref() {
      const queryString = stringify(this.params);

      return this.href + (queryString ? '?' + queryString : '');
    }
  },

  methods: {
    handleClick() {
      if (this.to) {
        this.$router?.push(this.to);
      }
      else {
        this.$emit('click');
      }
    }
  }
}
</script>
