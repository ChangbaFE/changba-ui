import Vue from 'vue';
import Icon from '../../packages/icon';

Vue.use(Icon);

import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/small-box/src/small-box.vue';

describe('small-box', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-small-box');
  });
});
