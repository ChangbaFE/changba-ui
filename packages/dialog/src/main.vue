<template>
  <div class="cb-dialog vex-panel-wrapper" v-show="vexShow">
    <div class="modal-header">
      <slot name="title">
        <h4 class="modal-title">
          <template v-if="typeof title === 'string'">
            {{ title }}
          </template>
          <template v-else>
            <cb-vnode :vnodes="title" />
          </template>
        </h4>
      </slot>
    </div>
    <div class="modal-body">
      <slot v-if="!dynamic"></slot>
      <template v-else>
        <vex-dialog-body v-bind="dialogProps" ref="body" />
        <div class="overlay" v-show="loading">
          <i class="cb-icon fa fa-fw fa-refresh fa-spin"></i>
        </div>
      </template>
    </div>
    <div class="modal-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
    <div class="modal-footer" v-if="dynamic">
      <template v-if="Array.isArray(buttons)">
        <template v-for="(item, index) in buttons">
          <button
            type="button"
            class="cb-button btn"
            :key="index"
            :class="item.type ? 'btn-' + item.type : (item.name == 'ok' || item.name == 'yes' ? 'btn-primary' : 'btn-default')"
            :disabled="disabled"
            @click="handleAction(item.name)"
          >
            {{ item.text }}
          </button>
        </template>
      </template>
      <template v-else>
        <template v-for="(item, index) in buttons">
          <button
            type="button"
            class="cb-button btn"
            :key="index"
            :class="index == 'ok' || index == 'yes' ? 'btn-primary' : 'btn-default'"
            :disabled="disabled"
            @click="handleAction(index)"
            v-if="item !== false"
          >
            {{ item }}
          </button>
        </template>
      </template>
    </div>
    <div class="vex-close" v-if="!hideClose" @click="handleClose"></div>
  </div>
</template>

<script>
import $ from 'jquery';
import vex from 'vex-js/src/vex';
import CbVnode from '../../vnode/src/vnode.vue';

export default {
  name: 'CbDialog',

  components: {
    CbVnode
  },

  props: {
    visible: {
      type: Boolean,
      default: false
    },
    dynamic: {
      type: Boolean,
      default: false
    },
    title: {
      type: [String, Object],
      default: '对话框'
    },
    hideClose: {
      type: Boolean,
      default: false
    },
    buttons: {
      type: Object,
      default: () => ({ ok: '确认', cancel: '取消' })
    },
    top: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      vexShow: false,
      disabled: false,
      loading: false,
      width: 0,
      panel: null
    }
  },

  computed: {
    dialogProps() {
      return {};
    }
  },

  watch: {
    visible(value) {
      if (value) {
        this.open();
      }
      else {
        this.close();
      }
    },

    width(value) {
      this.panel.$contentEl.css('width', value);
    }
  },

  mounted() {
    this.$on('dialog-adjust-position', () => {
      this.autoAdjustPosition();
    });

    if (this.visible) {
      this.open();
    }
  },

  methods: {
    handleAction(button) {
      this.$emit('action', button);
    },

    handleClose() {
      this.$emit('action', 'close');
      this.$emit('update:visible', false);
    },

    // 自动调整窗体 top 和 max-height
    autoAdjustPosition() {
      const bd = this.panel.$contentEl.find('.modal-body');
      const paddingTop = parseInt(this.panel.$contentEl.parent().css('padding-top'));

      const rect = this.panel.$contentEl.position();
      rect.width = this.panel.$contentEl.width();
      rect.height = this.panel.$contentEl.height();
      const height = $(window).height();
      const bottomHeight = height - rect.top - rect.height;

      if (bd[0].scrollHeight + 120 + 40 > height) {
        bd.css('max-height', (height - 120 - 40));
        this.panel.$contentEl.css('top', 20 - paddingTop);
      }
      else if (bottomHeight < rect.top) {
        this.panel.$contentEl.css('top', (Math.floor((bottomHeight + rect.top) / 3)) - paddingTop);
      }
    },

    open() {
      const options = {
        unsafeContent: this.$el,
        className: 'vex-theme-default vex-theme-panel cb-datetime-picker-attach-point-float cb-color-picker-attach-point-float cb-select-plus-attach-point',
        showCloseButton: false,
        escapeButtonCloses: false,
        overlayClosesOnClick: false,
        contentClassName: ''
      };

      if (this.top) {
        options.css['padding-top'] = this.top;
      }

      options.afterOpen = (content, op) => {
        this.$emit('open', content, op);
      };

      options.afterClose = (content, op) => {
        this.$emit('close', content, op);
      };

      this.panel = vex.open(options);
      this.panel.$contentEl = $(this.panel.contentEl);

      if (this.width) {
        this.panel.$contentEl.css('width', this.width);
      }

      if (this.height) {
        this.panel.$contentEl.css('height', this.height);
      }

      this.vexShow = true;
    },

    close() {
      vex.close(this.panel);
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>
