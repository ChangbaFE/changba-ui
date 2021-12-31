import CbBadge from './src/badge.vue';

CbBadge.install = function(Vue) {
  Vue.component(CbBadge.name, CbBadge);
};

export default CbBadge;
