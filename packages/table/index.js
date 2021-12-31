import CbTable from './src/table.vue';

CbTable.install = function(Vue) {
  Vue.component(CbTable.name, CbTable);
};

export default CbTable;
