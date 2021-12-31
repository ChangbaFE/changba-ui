import 'bootstrap/js/transition.js';
import 'bootstrap/js/tab.js';

import CbTabs from './src/tabs.vue';

CbTabs.install = function(Vue) {
  Vue.component(CbTabs.name, CbTabs);
};

export default CbTabs;
