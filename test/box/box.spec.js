import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/box/src/box.vue';

describe('box', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-box');
  });
});
