import Vue from 'vue';

import components from '../src';
import '../packages/theme/index.js';

Vue.use(components);

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
