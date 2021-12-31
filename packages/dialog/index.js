import CbDialog from './src/dialog.js';

CbDialog.install = function(Vue) {
  Vue.component(CbDialog.component.name, CbDialog.component);
  Vue.prototype.$cbDialog = CbDialog.dialog;
};

export default CbDialog;
