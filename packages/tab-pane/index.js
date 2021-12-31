import CbTabPane from './src/tab-pane.vue';

CbTabPane.install = function(Vue) {
  Vue.component(CbTabPane.name, CbTabPane);
};

export default CbTabPane;
