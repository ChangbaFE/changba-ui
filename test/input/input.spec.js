import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/input/src/input.vue';

describe('input', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-input');
  });
});
