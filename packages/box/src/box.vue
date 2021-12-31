<template>
  <div class="cb-box box" :class="classList">
    <div class="box-header" :class="headerClassList" v-if="$slots.header || $slots.title || $slots.tools">
      <i class="cb-icon fa fa-fw" :class="`fa-${icon}`" v-if="icon"></i>
      <h3 class="box-title" v-if="$slots.title">
        <slot name="title"></slot>
      </h3>
      <h3 class="box-title" v-else-if="title">{{ title }}</h3>
      <slot name="header"></slot>
      <div class="box-tools pull-right" v-if="$slots.tools || collapsable">
        <slot name="tools"></slot>
        <button type="button" class="cb-button btn btn-box-tool" data-widget="collapse" v-if="collapsable">
          <i class="cb-icon fa fa-fw" :class="`fa-${collapsed ? 'plus' : 'minus'}`"></i>
        </button>
      </div>
    </div>

    <div class="box-header" :class="headerClassList" v-else-if="title">
      <i class="cb-icon fa fa-fw" :class="`fa-${icon}`" v-if="icon"></i>
      <h3 class="box-title">{{ title }}</h3>
      <div class="box-tools pull-right" v-if="collapsable">
        <button type="button" class="cb-button btn btn-box-tool" data-widget="collapse">
          <i class="cb-icon fa fa-fw" :class="`fa-${collapsed ? 'plus' : 'minus'}`"></i>
        </button>
      </div>
    </div>

    <div class="box-header box-header-addition" v-if="$slots['addition-header']">
      <slot name="addition-header"></slot>
    </div>

    <div class="box-body" :class="bodyClass">
      <slot></slot>
    </div>

    <div class="box-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>

    <slot name="addition" v-else-if="$slots.addition"></slot>
  </div>
</template>

<script>
import $ from 'jquery';

const Default = {
  animationSpeed: 500,
  collapseTrigger: '[data-widget="collapse"]',
  removeTrigger: '[data-widget="remove"]',
  collapseIcon: 'fa-minus',
  expandIcon: 'fa-plus',
  removeIcon: 'fa-times'
}

const Selector = {
  data: '.box',
  collapsed: '.collapsed-box',
  body: '.box-body',
  footer: '.box-footer',
  tools: '.box-tools'
}

const ClassName = {
  collapsed: 'collapsed-box'
}

class Widget {
  constructor(element, options) {
    this.element = element
    this.options = $.extend({}, Default, typeof options == 'object' && options)

    this._setUpListeners()
  }

  toggle() {
    const isOpen = !$(this.element).is(Selector.collapsed)

    if (isOpen) {
      this.collapse()
    }
    else {
      this.expand()
    }
  }

  expand() {
    const collapseIcon = this.options.collapseIcon
    const expandIcon = this.options.expandIcon

    $(this.element).removeClass(ClassName.collapsed)

    $(this.element)
      .find(Selector.tools)
      .find('.' + expandIcon)
      .removeClass(expandIcon)
      .addClass(collapseIcon)

    $(this.element).find(Selector.body + ', ' + Selector.footer)
      .slideDown(this.options.animationSpeed)
  }

  collapse() {
    const collapseIcon = this.options.collapseIcon
    const expandIcon = this.options.expandIcon

    $(this.element)
      .find(Selector.tools)
      .find('.' + collapseIcon)
      .removeClass(collapseIcon)
      .addClass(expandIcon)

    $(this.element).find(Selector.body + ', ' + Selector.footer)
      .slideUp(this.options.animationSpeed, () => {
        $(this.element).addClass(ClassName.collapsed)
      })
  }

  remove() {
    $(this.element).slideUp(this.options.animationSpeed, () => {
      $(this.element).remove()
    })
  }

  // Private

  _setUpListeners() {
    $(this.element).on('click', this.options.collapseTrigger, event => {
      if (event) {
        event.preventDefault()
      }

      this.toggle()
    })

    $(this.element).on('click', this.options.removeTrigger, event => {
      if (event) {
        event.preventDefault()
      }

      this.remove()
    })
  }
}

export default {
  name: 'CbBox',

  props: {
    theme: {
      type: String,
      default: 'default'
    },

    titleClass: {
      type: String,
      default: ''
    },

    headerClass: {
      type: String,
      default: ''
    },

    bodyClass: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    },

    collapsable: {
      type: Boolean,
      default: false
    },

    collapsed: {
      type: Boolean,
      default: false
    },

    solid: {
      type: Boolean,
      default: false
    },

    headerBorder: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classList() {
      return [
        this.theme ? `box-${this.theme}` : '',
        {
          'collapsed-box': this.collapsed,
          'box-solid': this.solid
        }
      ];
    },

    headerClassList() {
      return [
        this.titleClass,
        this.headerClass,
        {
          'with-border': this.headerBorder
        }
      ];
    }
  },

  mounted() {
    if (this.collapsable) {
      this.widget = new Widget(this.$el);
    }
  }
}
</script>
