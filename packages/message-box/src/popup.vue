<template>
  <div>
    <div class="overlay fade"></div>
    <div class="popover fade">
      <div class="arrow"></div>
      <h3 class="popover-title">
        <template v-if="typeof title === 'string'">
          {{ title }}
        </template>
        <template v-else>
          <cb-vnode :vnodes="title" />
        </template>
      </h3>
      <div class="popover-content">
        <p v-if="message">
          <template v-if="typeof message === 'string'">
            {{ message }}
          </template>
          <template v-else>
            <cb-vnode :vnodes="message" />
          </template>
        </p>
        <div class="btn-group">
          <button type="button" class="cb-button btn btn-sm btn-primary" @click="handleAction('yes')">
            <i class="glyphicon glyphicon-ok-sign"></i>确认
          </button>
          <button type="button" class="cb-button btn btn-sm btn-default" @click="handleAction('cancel')">
            <i class="glyphicon glyphicon-remove-sign"></i>取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import CbVnode from '../../vnode/src/vnode.vue';

export default {
  components: {
    CbVnode
  },

  props: {
    title: {
      type: [String, Object],
      default: '确认吗？'
    },
    message: {
      type: [String, Object],
      default: ''
    }
  },

  data() {
    return {
      currentButton: ''
    }
  },

  destroyed() {
    $(this.$el).remove();
  },

  methods: {
    handleAction(button) {
      this.currentButton = button;
      this.close();
    },

    open(el) {
      this._el = $(this.$el);
      this._tip = this._el.find('.popover');
      this._overlay = this._el.find('.overlay');

      this._container = $('body');

      this._tip.css({
        top: 0,
        left: 0,
        zIndex: 3000,
        display: 'block'
      }).addClass('top');

      this.$nextTick(() => {
        this._el.appendTo(this._container)

        const pos = this.getPosition($(el));
        const actualWidth  = this._tip[0].offsetWidth
        const actualHeight = this._tip[0].offsetHeight
        const viewportDim = this.getPosition(this._container);

        const placement = pos.top - actualHeight < viewportDim.top ? 'bottom' : 'top';

        this._tip.removeClass('top').addClass(placement);

        const calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight, viewportDim);

        this._overlay.addClass('in');

        this.applyPlacement(calculatedOffset, placement);

        this._tip.one('bsTransitionEnd', () => {
          this.$emit('open');
        }).emulateTransitionEnd(150);
      });
    },

    close() {
      this._tip.removeClass('in');
      this._overlay.removeClass('in');

      this._tip.one('bsTransitionEnd', () => {
        this.$emit('close', this.currentButton);
      }).emulateTransitionEnd(150);
    },

    getPosition($element) {
      const el = $element[0]
      const isBody = el.tagName == 'BODY'

      let elRect = el.getBoundingClientRect()
      if (elRect.width == null) {
        // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
        elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
      }
      const elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
      const scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
      const outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

      return $.extend({}, elRect, scroll, outerDims, elOffset)
    },

    getCalculatedOffset(placement, pos, actualWidth, actualHeight, viewportDim) {
      const offset = (placement == 'bottom' ?
        { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 }
        : { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 });

      if (offset.left + actualWidth > viewportDim.width) {
        offset.left -= offset.left + actualWidth - viewportDim.width + 2;
      }

      return offset;
    },

    applyPlacement(offset, placement) {
      const height = this._tip[0].offsetHeight

      // manually read margins because getBoundingClientRect includes difference
      let marginTop = parseInt(this._tip.css('margin-top'), 10)
      let marginLeft = parseInt(this._tip.css('margin-left'), 10)

      // we must check for NaN for ie 8/9
      if (isNaN(marginTop)) {
        marginTop  = 0
      }
      if (isNaN(marginLeft)) {
        marginLeft = 0
      }

      offset.top += marginTop
      offset.left += marginLeft

      // $.fn.offset doesn't round pixel values
      // so we use setOffset directly with our own function B-0
      $.offset.setOffset(this._tip[0], $.extend({
        using: (props) => {
          this._tip.css({
            top: Math.round(props.top),
            left: Math.round(props.left)
          })
        }
      }, offset), 0)

      this._tip.addClass('in')

      // check to see if placing tip in new offset caused the tip to resize itself
      const actualHeight = this._tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
      }

      this._tip.offset(offset)
      this._el.find('.arrow').css('left', '50%').css('top', '')
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  -webkit-backface-visibility: hidden;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
}

.popover {
  .btn-group {
    display: flex;
    justify-content: center;
  }

  .btn {
    i {
      margin-right: 5px;
      width: 12px;
      height: 12px;
    }
  }
}
</style>
