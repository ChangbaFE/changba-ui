import CbValidation from './src/validation.js';

CbValidation.install = function(Vue) {
  Vue.directive(CbValidation.name, CbValidation);
};

export default CbValidation;
