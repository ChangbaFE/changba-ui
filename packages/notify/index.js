import CbNotify from './src/notify.js';

CbNotify.install = function(Vue) {
  Vue.prototype.$cbNotify = CbNotify;
};

export default CbNotify;
