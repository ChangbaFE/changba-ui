import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/form-group/src/form-group.vue';

describe('form-group', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-form-group');
  });
});
