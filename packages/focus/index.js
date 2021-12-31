import CbFocus from './src/focus.js';

CbFocus.install = function(Vue) {
  Vue.directive(CbFocus.name, CbFocus);
};

export default CbFocus;
