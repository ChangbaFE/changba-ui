import 'bootstrap-colorpicker';
import CbColorPicker from './src/color-picker.vue';

CbColorPicker.install = function(Vue) {
  Vue.component(CbColorPicker.name, CbColorPicker);
};

export default CbColorPicker;
