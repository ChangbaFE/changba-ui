import { shallowMount } from '@vue/test-utils';
import Component from '../../packages/step/src/step.vue';

describe('step', () => {
  it('renders dom when mounted', () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.classes()).toContain('cb-step');
  });
});
