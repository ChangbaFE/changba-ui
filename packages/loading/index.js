import CbLoading from './src/loading.js';

CbLoading.install = function(Vue) {
  Vue.directive(CbLoading.name, CbLoading);
};

export default CbLoading;
