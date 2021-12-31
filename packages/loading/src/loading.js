import Vue from 'vue';
import $ from 'jquery';
import mainVue from './main.vue';

const Mask = Vue.extend(mainVue);

const delay = 50;

const insertDom = (parent, el) => {
  const elLoading = el.$cbLoading;

  if (!elLoading.domVisible && $(el).css('display') !== 'none' && $(el).css('visibility') !== 'hidden') {
    Object.keys(elLoading.maskStyle).forEach(property => {
      elLoading.instance.$el.style[property] = elLoading.maskStyle[property];
    });

    $(parent).addClass('overlay-wrapper');

    if (elLoading.originalPosition !== 'absolute' && elLoading.originalPosition !== 'fixed') {
      parent.style.position = 'relative';
    }

    elLoading.domVisible = true;

    parent.appendChild(elLoading.instance.$el);

    Vue.nextTick(() => {
      elLoading.instance.visible = true;
    });

    elLoading.domInserted = true;
  }
};

const initialize = (el) => {
  const mask = new Mask({
    el: document.createElement('div'),
    data: {
      text: el.getAttribute('loading-text')
    }
  });

  el.$cbLoading = {
    instance: mask,
    maskStyle: {},
    timer: null,
    originalPosition: '',
    domInserted: false,
    domVisible: false
  };
};

const destroy = (el) => {
  const elLoading = el.$cbLoading;

  clearTimeout(elLoading.timer);

  if (elLoading.domInserted) {
    elLoading.instance.$el?.parentNode?.removeChild(elLoading.instance.$el);
  }
};

const setVisible = (el, value) => {
  const elLoading = el.$cbLoading;

  if (value) {
    elLoading.timer = clearTimeout(elLoading.timer);
    Vue.nextTick(() => {
      elLoading.timer = setTimeout(() => {
        elLoading.originalPosition = $(el).css('position');
        insertDom(el, el);
      }, delay);
    });
  }
  else {
    clearTimeout(elLoading.timer);

    if (elLoading.domVisible) {
      elLoading.instance.$once('leave', () => {
        elLoading.domVisible = false;
        el.style.position = elLoading.originalPosition;
        $(el).removeClass('overlay-wrapper');
      });

      elLoading.instance.visible = false;
    }
  }
};

export default {
  name: 'CbLoading',

  bind(el, binding, vnode) {
    const name = binding.arg || 'default';
    const loadingValue = vnode.context[binding.expression];

    initialize(el);

    const instance = {
      componentInstance: vnode.context,
      variableName: binding.expression,
      show() {
        this.componentInstance[this.variableName] = true;
      },
      hide() {
        this.componentInstance[this.variableName] = false;
      },
      setVisible(value) {
        this.componentInstance[this.variableName] = value;
      }
    };

    if (!vnode.context.$cbLoadingInstances) {
      vnode.context.$cbLoadingInstances = {};
    }

    vnode.context.$cbLoadingInstances[name] = instance;

    if (name === 'default') {
      vnode.context.$cbLoadingInstance = instance;
    }

    if (loadingValue) {
      setVisible(el, true);
    }
  },

  update(el, binding, vnode) {
    const loadingValue = vnode.context[binding.expression];

    el.$cbLoading.instance.setText(el.getAttribute('loading-text'));

    setVisible(el, loadingValue);
  },

  unbind(el) {
    destroy(el);
  },

  initialize,
  destroy,
  setVisible
};
