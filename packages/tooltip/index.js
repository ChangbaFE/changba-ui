import 'bootstrap/js/transition.js';
import 'bootstrap/js/tooltip.js';

import CbTooltip from './src/tooltip.js';

CbTooltip.install = function(Vue) {
  Vue.directive(CbTooltip.name, CbTooltip);
};

export default CbTooltip;
