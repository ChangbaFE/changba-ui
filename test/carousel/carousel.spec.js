import Vue from 'vue';
import Carousel from '../../packages/carousel';
import CarouselItem from '../../packages/carousel-item';

Vue.use(Carousel);
Vue.use(CarouselItem);

import { mount } from '@vue/test-utils';
import Component from './demo.vue';

describe('carousel', () => {
  it('renders dom when mounted', () => {
    const wrapper = mount(Component);
    expect(wrapper.classes()).toContain('cb-carousel');
  });
});
