import * as PNotify from '@pnotify/core';
import * as PNotifyBootstrap3 from '@pnotify/bootstrap3';
import * as PNotifyFontAwesome4 from '@pnotify/font-awesome4';

PNotify.defaultModules.set(PNotifyBootstrap3, {});
PNotify.defaultModules.set(PNotifyFontAwesome4, {});

const original = PNotify.defaults;
const defaultStackOptions = {
  dir1: 'down',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 25,
  spacing1: 36,
  spacing2: 36,
  maxOpen: 20,
  modalishFlash: false,
  modal: false
};
const defaultStack = new PNotify.Stack(defaultStackOptions);

original.delay = 3000;
original.sticker = false;
original.stack = defaultStack;

const availableType = ['notice', 'success', 'info', 'error'];

const notify = (inputOptions = {}) => {
  let options;

  if (typeof inputOptions === 'string') {
    options = {
      text: inputOptions
    };
  }
  else {
    options = { ...inputOptions };
  }

  if (options.type === 'error') {
    options.delay = 1000 * 60;
  }

  if (!options.type || !availableType.includes(options.type)) {
    options.type = 'notice';
  }

  return PNotify[options.type](options);
};

availableType.forEach(type => {
  notify[type] = (options = {}) => {
    if (typeof options === 'string') {
      options = {
        text: options
      };
    }

    options.type = type;

    return notify(options);
  };
});

notify.setOptions = (options) => {
  Object.keys(options).forEach(key => {
    if (key === 'stack') {
      original.stack = new PNotify.Stack({ ...defaultStackOptions, ...options.stack });
    }
    else {
      original[key] = options[key];
    }
  });
};

notify.getInstance = () => PNotify;

export default notify;
