import CbValidation from '../validation/src/validation.js';
import CbMessageBox from './src/message-box.js';

CbMessageBox.install = function(Vue) {
  Vue.directive(CbValidation.name, CbValidation);
  Vue.directive(CbMessageBox.name, CbMessageBox.directive);

  Vue.prototype.$cbAlert = CbMessageBox.alert;
  Vue.prototype.$cbConfirm = CbMessageBox.confirm;
  Vue.prototype.$cbPrompt = CbMessageBox.prompt;
};

export default CbMessageBox;
