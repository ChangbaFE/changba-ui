import CbProgress from './src/progress.vue';

CbProgress.install = function(Vue) {
  Vue.component(CbProgress.name, CbProgress);
};

export default CbProgress;
