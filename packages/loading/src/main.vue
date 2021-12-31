<template>
  <transition name="fade" @after-leave="leave">
    <div v-show="visible" class="overlay" :class="[customClass]">
      <div class="loading-spinner">
        <i class="cb-icon fa fa-fw fa-refresh fa-spin"></i>
        <p v-if="text" class="loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      text: null,
      visible: false,
      customClass: ''
    };
  },
  methods: {
    setText(text) {
      this.text = text;
    },

    leave() {
      this.$emit('leave');
    }
  }
};
</script>

<style lang="scss" scoped>
.loading-spinner {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -15px;
  text-align: center;
}

.fa {
  color: #000;
  font-size: 30px;
}

.loading-text {
  margin: 3px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
