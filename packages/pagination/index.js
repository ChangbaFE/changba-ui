import CbPagination from './src/pagination.vue';

CbPagination.install = function(Vue) {
  Vue.component(CbPagination.name, CbPagination);
};

export default CbPagination;
