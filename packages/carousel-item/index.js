import CbCarouselItem from './src/carousel-item.vue';

CbCarouselItem.install = function(Vue) {
  Vue.component(CbCarouselItem.name, CbCarouselItem);
};

export default CbCarouselItem;
