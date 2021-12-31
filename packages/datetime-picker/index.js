import 'daterangepicker';
import CbDatetimePicker from './src/datetime-picker.vue';

CbDatetimePicker.install = function(Vue) {
  Vue.component(CbDatetimePicker.name, CbDatetimePicker);
};

export default CbDatetimePicker;
