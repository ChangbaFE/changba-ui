<template>
  <li class="cb-menu-item" :class="{ divider: separator }">
    <template v-if="!separator">
      <a :href="href" :target="target" v-if="href">
        <slot>菜单项</slot>
      </a>
      <a href="" @click.prevent="handleClick" v-else>
        <slot>菜单项</slot>
      </a>
    </template>
  </li>
</template>

<script>
export default {
  name: 'CbMenuItem',

  props: {
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    },
    separator: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>
