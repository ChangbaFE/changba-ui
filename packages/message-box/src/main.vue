<template>
  <div class="vex-panel-wrapper" v-show="vexShow">
    <div class="modal-header">
      <h4 class="modal-title">
        <template v-if="typeof title === 'string'">
          {{ title }}
        </template>
        <template v-else>
          <cb-vnode :vnodes="title" />
        </template>
      </h4>
    </div>
    <div class="modal-body" :class="additionClass" v-if="isPrompt">
      <div class="prompt-content" v-if="message">
        <template v-if="typeof message === 'string'">
          {{ message }}
        </template>
        <template v-else>
          <cb-vnode :vnodes="message" />
        </template>
      </div>
      <form class="input" v-cb-validation @submit.prevent="submit">
        <div class="form-group">
          <label v-if="label">{{ label }}</label>
          <textarea v-if="multiline" class="form-control prompt-textarea" v-model="content" :placeholder="placeholder" v-bind="rules" :rows="rows" ref="input"></textarea>
          <input v-else type="text" class="form-control prompt-text" v-model="content" :placeholder="placeholder" v-bind="rules" ref="input">
        </div>
      </form>
    </div>
    <div class="modal-body" :class="additionClass" v-else>
      <template v-if="typeof message === 'string'">
        {{ message }}
      </template>
      <template v-else>
        <cb-vnode :vnodes="message" />
      </template>
    </div>
    <div class="modal-footer">
      <template v-for="(item, index) in buttons">
        <button type="button" class="cb-button btn" :class="index == 'ok' || index == 'yes' ? 'btn-primary' : 'btn-default'" :disabled="disabled" @click="handleAction(index)" :key="index" v-if="item !== false">{{ item }}</button>
      </template>
    </div>
    <div class="vex-close" v-if="!hideClose" @click="handleAction('close')"></div>
  </div>
</template>

<script>
import $ from 'jquery';
import vex from 'vex-js/src/vex';
import CbVnode from '../../vnode/src/vnode.vue';

export default {
  components: {
    CbVnode
  },

  props: {
    title: {
      type: [String, Object],
      default: ''
    },
    message: {
      type: [String, Object],
      default: ''
    },
    width: {
      type: Number
    },
    className: {
      type: String,
      default: 'vex-alert'
    },
    hideClose: {
      type: Boolean,
      default: false
    },
    additionClass: {
      type: String,
      default: ''
    },
    isPrompt: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    multiline: {
      type: Boolean,
      default: false
    },
    rules: {
      type: Object
    },
    placeholder: {
      type: String
    },
    rows: {
      type: Number
    }
  },

  data() {
    return {
      vexShow: false,
      buttons: {},
      currentButton: '',
      content: '',
      disabled: false
    }
  },

  mounted() {
    setTimeout(() => {
      try {
        this.$refs.input?.focus();
      }
      catch (e) {}
    }, 100);
  },

  methods: {
    submit() {
      this.handleAction('ok');
    },

    handleAction(button) {
      if (this.disabled) {
        return;
      }

      this.currentButton = button;

      if (this.isPrompt && (button === 'ok' || button === 'yes')) {
        this.$cbValidator.whenValidate().then(() => {
          this.isLazy ? this.lazyClose() : this.close();
        });
      }
      else {
        this.isLazy ? this.lazyClose() : this.close();
      }
    },

    open() {
      const options = {
        unsafeContent: this.$el,
        className: 'vex-theme-default vex-theme-panel vex-theme-popup ' + this.className,
        showCloseButton: false,
        escapeButtonCloses: false,
        overlayClosesOnClick: false,
        contentClassName: ''
      };

      options.afterOpen = (content, op) => {
        this.$emit('open', content, op);
      };

      options.afterClose = () => {
        this.$emit('close', this.currentButton, this.content);
      };

      this.panel = vex.open(options);
      this.panel.$contentEl = $(this.panel.contentEl);

      if (this.width) {
        this.panel.$contentEl.css('width', this.width);
      }

      this.vexShow = true;
    },

    close() {
      vex.close(this.panel);
    },

    lazyClose() {
      this.$emit('beforeClose', this.currentButton, this.content);
    }
  }
};
</script>

<style lang="scss" scoped>
.prompt-content {
  margin-bottom: 5px;
}

.prompt-textarea {
  min-height: 56px;
  resize: vertical;
}
</style>
