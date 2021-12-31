<template>
  <div class="cb-small-box small-box" :class="boxClass">
    <div class="inner">
      <h3>
        <template v-if="$slots.title">
          <slot name="title"></slot>
        </template>
        <template v-else>
          {{ title }}
        </template>
      </h3>

      <p v-if="text">{{ text }}</p>
      <slot v-else></slot>
    </div>

    <div class="icon">
      <template v-if="$slots.icon">
        <slot name="icon"></slot>
      </template>
      <template v-else>
        <i class="cb-icon fa fa-fw" :class="`fa-${icon}`"></i>
      </template>
    </div>

    <div class="small-box-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CbSmallBox',

  props: {
    theme: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    }
  },

  computed: {
    boxClass() {
      return this.theme ? `bg-${this.theme}` : '';
    }
  }
}
</script>

<style lang="scss" scoped>
.small-box-footer {
  > a {
    color: inherit;
  }
}
</style>
