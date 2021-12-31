<template>
  <i class="cb-icon fa fa-fw" :class="iconClass" v-if="type == 'fa'" @click="handleClick"></i>
  <i class="cb-icon ion" :class="iconClass" v-else-if="type == 'ion'" @click="handleClick"></i>
  <span class="cb-icon glyphicon" :class="iconClass" v-else-if="type == 'g'" @click="handleClick"></span>
</template>

<script>
const typeMap = {
  fa: 'fa-',
  g: 'glyphicon-',
  ion: 'ion-'
};

export default {
  name: 'CbIcon',

  props: {
    type: {
      type: String,
      default: 'fa'
    },
    name: {
      type: String,
      default: 'circle'
    },
    spin: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    iconClass() {
      const type = typeMap[this.type];

      return [
        type ? `${type}${this.name}` : '',
        { 'fa-spin': this.spin }
      ];
    }
  },

  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>
