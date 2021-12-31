import CbButton from './src/button.vue';

CbButton.install = function(Vue) {
  Vue.component(CbButton.name, CbButton);
};

export default CbButton;
