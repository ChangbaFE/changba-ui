import $ from 'jquery';
import Parsley from 'parsleyjs/src/parsley';
import 'parsleyjs/src/i18n/zh_cn';
import 'parsleyjs/src/i18n/zh_cn.extra';

Parsley.addMessages('zh-cn', {
  required: '此项必填'
});

$.extend(Parsley.options, {
  errorClass: 'has-error',
  successClass: 'has-success',
  classHandler(field) {
    // select2 组件的内部输入框要排除掉
    if (field.$element.hasClass('select2-search__field')) {
      return;
    }

    const groupEl = field.$element.closest('.form-group');

    if (groupEl.length) {
      return groupEl;
    }
    else {
      return field.$element;
    }
  },
  errorsContainer(field) {
    const parentEl = field.$element.parent().find('.cb-validation-error-container');
    const groupEl = field.$element.closest('.form-group');
    const controlGroupEl = field.$element.closest('.cb-validation-group');
    const inputGroupEl = field.$element.closest('.input-group');

    let el;

    if (controlGroupEl.length) {
      el = controlGroupEl.next('.cb-validation-error-container:first');
    }
    else if (inputGroupEl.length) {
      el = inputGroupEl.next('.cb-validation-error-container:first');
    }
    else {
      el = groupEl.find('.cb-validation-error-container:first');
    }

    if (parentEl.length) {
      return parentEl;
    }
    else if (groupEl.length) {
      if (el.length) {
        return el;
      }
      else if (inputGroupEl.length) {
        return $('<div></div>').addClass('cb-validation-error-container').insertAfter(inputGroupEl);
      }
      else if (controlGroupEl.length) {
        return $('<div></div>').addClass('cb-validation-error-container').insertAfter(controlGroupEl);
      }
      else {
        return $('<div></div>').addClass('cb-validation-error-container').insertAfter(field.$element);
      }
    }
    else {
      return field.$element;
    }
  }
});

Parsley.updateValidator('required', {
  validateMultiple(values, requirement, field) {
    const str = field.$element[0].getAttribute('data-parsley-required');
    let text = '此项必选';

    if (str) {
      text = '请选择' + str;
    }

    field.constraintsByName.required.requirements = text;

    return values.length > 0;
  },
  validateString(value, requirement, field) {
    const str = field.$element[0].getAttribute('data-parsley-required');
    const tag = field.$element[0].tagName.toLowerCase();
    const type = field.$element.attr('type');
    let text;
    let prefix;

    if (str) {
      switch (tag) {
        case 'select':
          prefix = '请选择';
          break;

        default:
          if (type == 'radio' || type == 'checkbox') {
            prefix = '请选择';
          }
          else {
            prefix = '请填写';
          }

          break;
      }

      text = prefix + str;
    }
    else {
      switch (tag) {
        case 'select':
          text = '此项必选';
          break;

        default:
          if (type == 'radio' || type == 'checkbox') {
            text = '此项必选';
          }
          else {
            text = '此项必填';
          }

          break;
      }
    }

    field.constraintsByName.required.requirements = text;

    if (type === 'file') {
      const deferred = $.Deferred();

      setTimeout(() => {
        value = field.$element.attr('data-cb-validation-file-value') ?? '';
        if (/\S/.test(value)) {
          deferred.resolve();
        }
        else {
          deferred.reject();
        }
      }, 0);

      return deferred;
    }

    return /\S/.test(value);
  },
  priority: 512,
  messages: {
    'zh-cn': '%s'
  }
});

const update = (vnode, name) => {
  let event;

  if (vnode.data.on && vnode.data.on.submit) {
    event = vnode.data.on;
  }
  else if (vnode.componentOptions && vnode.componentOptions.listeners && vnode.componentOptions.listeners.submit) {
    event = vnode.componentOptions.listeners;
  }
  else {
    return;
  }

  const fns = event.submit.fns;

  event.submit.fns = ($event) => {
    const instance = vnode.context.$cbValidators[name];

    instance.whenValidate().then(() => {
      fns($event);
    }, () => {
      $event?.preventDefault();
    });
  };
};

export default {
  name: 'CbValidation',

  bind(el, binding, vnode) {
    const instance = $(el).parsley();
    const name = binding.arg || 'default';

    // 初始化表单验证器
    if (!vnode.context.$cbValidators) {
      vnode.context.$cbValidators = {};
    }

    vnode.context.$cbValidators[name] = instance;

    if (name === 'default') {
      vnode.context.$cbValidator = instance;
    }

    instance.on('form:submit', () => false);

    update(vnode, name);
  },

  update(el, binding, vnode) {
    update(vnode, binding.arg || 'default');
  },

  unbind(el, binding, vnode) {
    const name = binding.arg || 'default';

    vnode.context.$cbValidators[name].destroy();

    if (name === 'default') {
      vnode.context.$cbValidator = null;
    }
  }
};
