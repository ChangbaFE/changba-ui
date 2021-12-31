import Vue from 'vue';
import Icon from '../../packages/icon';

Vue.use(Icon);

import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/info-box/src/info-box.vue';

describe('info-box', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-info-box');
  });
});
