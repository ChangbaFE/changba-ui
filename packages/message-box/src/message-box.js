import Vue from 'vue';
import mainVue from './main.vue';
import popupVue from './popup.vue';

const Box = Vue.extend(mainVue);
const Popup = Vue.extend(popupVue);

export default {
  name: 'CbConfirm',

  alert(msg, title, options = {}) {
    const box = new Box({
      el: document.createElement('div')
    });

    box.width = options.width || 0;
    box.title = title || '消息';
    box.message = msg;
    box.hideClose = options.hideClose;
    box.buttons = {
      ok: '确认',
      ...options.buttons
    };

    return new Promise((resolve) => {
      box.$on('close', (button) => {
        if (button === 'ok' || button === 'yes') {
          resolve({ button, isOk: true });
        }
        else {
          resolve({ button, isOk: false });
        }
      });

      box.open();
    });
  },

  confirm(msg, title, options = {}) {
    const box = new Box({
      el: document.createElement('div')
    });

    box.className = 'confirm';
    box.width = options.width || 0;
    box.title = title || '消息';
    box.message = msg;
    box.hideClose = options.hideClose;
    box.buttons = {
      yes: '确认',
      cancel: '取消',
      ...options.buttons
    };

    return new Promise((resolve) => {
      box.$on('close', (button) => {
        if (button === 'ok' || button === 'yes') {
          resolve({ button, isOk: true });
        }
        else {
          resolve({ button, isOk: false });
        }
      });

      box.open();
    });
  },

  prompt(msg, title, options = {}) {
    const box = new Box({
      el: document.createElement('div')
    });

    box.isPrompt = true;
    box.className = 'prompt';
    box.title = title || '消息';
    box.message = msg;
    box.placeholder = options.placeholder || '';
    box.rows = options.rows || 1;
    box.label = options.label || '';
    box.width = options.width || 0;
    box.multiline = options.multiline || false;
    box.hideClose = options.hideClose || false;
    box.rules = options.rules || {};
    box.isLazy = !!options.beforeClose;
    box.content = options.defaultValue || '';
    box.buttons = {
      ok: '确认',
      cancel: '取消',
      ...options.buttons
    };

    return new Promise((resolve) => {
      box.$on('close', (button, text) => {
        resolve({
          button,
          text,
          isOk: button === 'ok' || button === 'yes'
        });
      });

      if (box.isLazy) {
        box.$on('beforeClose', (button, text) => {
          box.disabled = true;

          const result = options.beforeClose({
            button,
            text,
            isOk: button === 'ok' || button === 'yes'
          });

          if (result?.then) {
            this?.$store?.dispatch('showProgress');

            result.then((result) => {
              this?.$store?.dispatch('hideProgress');

              if (result === true || typeof result === 'undefined') {
                box.close();
              }
              else {
                box.disabled = false;
              }
            });
          }
          else {
            if (result === true || typeof result === 'undefined') {
              box.close();
            }
            else {
              box.disabled = false;
            }
          }
        });
      }

      box.open();
    });
  },

  directive: function(el, binding, vnode) {
    const hookEvent = ['click', 'submit'];

    const newFns = function(event, fns) {
      return function($event) {
        if ($event && $event.preventDefault) {
          $event.preventDefault();
        }

        const args = [...arguments];
        const popup = new Popup({
          el: document.createElement('div')
        });

        if (typeof binding.value === 'string') {
          popup.title = binding.value;
        }
        else if (typeof binding.value === 'object') {
          if (binding.value.title) {
            popup.title = binding.value.title;
          }
          if (binding.value.message) {
            popup.message = binding.value.message;
          }
        }

        popup.$on('close', button => {
          popup.$destroy();

          if (button === 'yes') {
            fns.apply(vnode.context, args);
          }
        });

        // submit 事件要特殊处理，找出当前是哪个按钮提交的
        if (event === 'submit') {
          let targetEl = el.querySelector('[type=submit]:focus');

          if (!targetEl) {
            targetEl = el.querySelector('[type=submit]');

            if (!targetEl) {
              targetEl = el;
            }
          }

          popup.open(targetEl);
        }
        else {
          popup.open(el);
        }
      };
    };

    hookEvent.forEach((item) => {
      let event;

      if (vnode?.data?.on?.[item]) {
        event = vnode.data.on;
      }
      else if (vnode?.componentOptions?.listeners?.[item]) {
        event = vnode.componentOptions.listeners;
      }
      else {
        return;
      }

      const fns = event[item].fns;

      event[item].fns = newFns(item, fns);
    });
  }
};
