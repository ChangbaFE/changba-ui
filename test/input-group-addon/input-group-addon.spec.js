import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/input-group-addon/src/input-group-addon.vue';

describe('input-group-addon', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-input-group-addon');
  });
});
