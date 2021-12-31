import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/select/src/select.vue';

describe('select', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-select');
  });
});
