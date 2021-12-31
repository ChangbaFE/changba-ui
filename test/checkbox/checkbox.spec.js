import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/checkbox/src/checkbox.vue';

describe('checkbox', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-checkbox');
  });
});
