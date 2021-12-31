import $ from 'jquery';

export default {
  name: 'CbTooltip',

  inserted(el, binding) {
    const value = binding.value;

    if (typeof value === 'object') {
      $(el).tooltip(value);
    }
    else if (typeof value === 'string') {
      $(el).tooltip({
        placement: 'auto top',
        title: value
      });
    }
    else {
      $(el).tooltip({
        placement: 'auto top'
      });
    }
  },

  update(el, binding, vnode, oldVnode) {
    const $el = $(el);
    const instance = $el.data('bs.tooltip');

    if (oldVnode.data.attrs?.title !== vnode.data.attrs?.title) {
      $el.attr('data-original-title', vnode.data.attrs?.title ?? '');
      $el.attr('title', '');
    }

    const value = binding.value;

    if (typeof value === 'object') {
      instance.options = instance.getOptions(value);
    }
    else if (typeof value === 'string') {
      instance.options.title = value;
    }
  },

  unbind(el) {
    $(el).tooltip('destroy');
  }
};
