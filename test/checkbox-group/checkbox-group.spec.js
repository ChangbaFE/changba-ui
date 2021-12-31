import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/checkbox-group/src/checkbox-group.vue';

describe('checkbox-group', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-checkbox-group');
  });
});
