import Vue from 'vue';
import Icon from '../../packages/icon';

Vue.use(Icon);

import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/upload/src/upload.vue';

describe('upload', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-upload');
  });
});
