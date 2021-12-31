import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/input-group/src/input-group.vue';

describe('input-group', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-input-group');
  });
});
