import CbInfoBox from './src/info-box.vue';

CbInfoBox.install = function(Vue) {
  Vue.component(CbInfoBox.name, CbInfoBox);
};

export default CbInfoBox;
