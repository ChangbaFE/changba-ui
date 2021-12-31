import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/steps/src/steps.vue';

describe('steps', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-steps');
  });
});
