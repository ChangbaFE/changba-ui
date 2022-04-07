import 'bootstrap/js/transition.js';
import 'bootstrap/js/carousel.js';

import CbCarousel from './src/carousel.vue';

CbCarousel.install = function(Vue) {
  Vue.component(CbCarousel.name, CbCarousel);
};

export default CbCarousel;
