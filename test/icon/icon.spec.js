import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/icon/src/icon.vue';

describe('icon', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-icon');
  });
});
