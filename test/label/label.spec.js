import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/label/src/label.vue';

describe('label', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-label');
  });
});
